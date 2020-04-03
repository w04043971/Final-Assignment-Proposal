
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
