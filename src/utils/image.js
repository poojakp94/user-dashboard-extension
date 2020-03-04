function getImages() {
   return fetch(
     // `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
     `https://api.unsplash.com/photos/random/?client_id=c1abfd586c80415c3860ececcdb7971179a16825f47900e5cc10ac76ad15aa2c`
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
