const convert24To12 = (twelveHrString) => {
    let strTOArr = twelveHrString.split(':');
    let minutes = Number(strTOArr[1]);
    if (Number(strTOArr[0]) > 12) {
      let convertedHours = Number(strTOArr[0] - 12);

      if (convertedHours < 10 && minutes < 10) {
        return `0${convertedHours}:0${minutes} PM`;
      } else if (convertedHours < 10 && minutes >= 10) {
        return `0${convertedHours}:${minutes} PM`;
      } else if (convertedHours >= 10 && minutes < 10) {
        return `${convertedHours}:0${minutes} PM`;
      } else {
        return `${convertedHours}:${minutes} PM`;
      }
    }
    
    else if (strTOArr[0] === "12") {
      if (minutes < 10) {
        return `${strTOArr[0]}:0${minutes} PM`;
      } else {
        return `${strTOArr[0]}:${minutes} PM`;
      }
    }
    
    else if (strTOArr[0] === "00") {
      if (minutes < 10) {
        return `12:0${minutes} AM`;
      } else {
        return `12:${minutes} AM`;
      }
    }
    
    else {
        let hours = Number(strTOArr[0]);
    
      if (hours < 10 && minutes < 10) {
        return `0${hours}:0${minutes} AM`;
      } else if (hours < 10 && minutes >= 10) {
        return `0${hours}:${minutes} AM`;
      } else if (hours >= 10 && minutes < 10) {
        return `${hours}:0${minutes} AM`;
      } else {
        return `${hours}:${minutes} AM`;
      }
    }
}
export { convert24To12 };