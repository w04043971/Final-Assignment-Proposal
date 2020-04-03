// (function(){
//     //fetch("https://www.mikecaines.com/3inarow/puzzle.php")
//     fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm", {
//         method: 'GET',
//         headers: {
//             "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
//             "x-rapidapi-key": "8122c07e03mshbce2c59b05d1b7dp132119jsn8867e324e3fc"
//         }
       
//       }).then(function(response){return response.json()})
//       .then(function(json){
      
//               console.log(json);
//               displayApplication(json);
//            });

       
//  function displayApplication(jsonArray)
//         {

//         };
//    })();


// (function(){
//     //fetch("https://www.mikecaines.com/3inarow/puzzle.php")
//     fetch("https://api.themoviedb.org/3/movie/550?api_key=4b807ac42cd74c36a19fa1804b6ee092")
//    .then(function(response){return response.json()})
//    .then(function(json){
   
//            console.log(json);




           
//            displayApplication(json);
//         });

       
//  function displayApplication(jsonArray)
//         {
//             const app = document.getElementById('movies')

//             // const logo = document.createElement('img')
//             // logo.src = 'logo.png'

//             const container = document.createElement('div')
//             container.setAttribute('class', 'container')

//             //app.appendChild(logo)
//             app.appendChild(container)
//         };
//      })();
//import qs from 'querystring'
////////////////////////////////////////////////////////////////
(function(){     
    serialize = function(obj) {
        var str = [];
        for (var p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
      }

   fetch("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?", {
    method: 'POST',
     headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
     body:serialize({ 
        "f":"json",
        "category":"Coffee Shop",
        "location": "-118.58864,34.06145",
        "outFields": "Place_addr, PlaceName",
        "maxLocations": "30" 
    })
}).then(function(response){return response.json()})
   .then(function(json){
   
           console.log(json);
           displayApplication(json);

})
function displayApplication(jsonArray)
         {
        }



})();
/////////////////////////////////////////////////////////////////
// (function(){
//     //fetch("https://www.mikecaines.com/3inarow/puzzle.php")
//     fetch("https://api.tugo.com/v1/travelsafe/countries/GR/abcdefghijklmnopqrstuvwxy")
//    .then(function(response){return response.json()})
//    .then(function(json){
   
//            console.log(json);
//            displayApplication(json);
//         });

       
//  function displayApplication(jsonArray)
//         {
//         }
// })();