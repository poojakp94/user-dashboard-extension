/*global chrome*/
import getImages from "./utils/image";

// create alarm for fresh on installed/updated, and start fetch data
chrome.runtime.onInstalled.addListener(() => {
  scheduleAlarmRequest();
  startRequestForImage();
});

// fetch and save data when chrome restarted, alarm will continue running when chrome is restarted
chrome.runtime.onStartup.addListener(() => {
  startRequestForImage();
});

// alarm listener
chrome.alarms.onAlarm.addListener(alarm => {
  startRequestForImage();
});

// schedule a new fetch every 10 minutes
function scheduleAlarmRequest() {
  chrome.alarms.create("refresh", { periodInMinutes: 10 });
}

// fetch data and save to local storage
function startRequestForImage() {
  let getBlob = getImages();
  getBlob.then(blob => {
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      chrome.storage.local.set({ blob: reader.result });
    };
  });
}
