function getImages() {
   return fetch(
     `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
   )
     .then(response => {
       if (response.ok) {
         return response.json();
       }
       throw new Error(
         `Oops! request failed with status code ${response.status}`
       );
     })
     .then(bodyData => fetch(bodyData.urls.regular))
     .then(response => {
       if (response.ok) {
         return response.blob();
       }
       throw new Error(
         `Oops! request failed with status code ${response.status}`
       );
     })
     .catch(error => {
       console.log(error);
     });
}
export default getImages;
