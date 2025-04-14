const socket=io(); 
// console.log("helooooooooo")


//check gelocation exist in brower or not 
if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
        const{latitude,longitude}=position.coords
   socket.emit("send-location",{latitude,longitude}) // emit event from frontend and sent to backend

},(error)=>{
    console.log(error);
},
{
    enableHighAccuracy:true,
    timeout:5000,
    maximumAge:0

}
);
}

// intialise the map with center coordinates [0,0]
const map=L.map("map").setView([0,0],16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"Vikash Kuswhaha"
}).addTo(map)

const makers={}


socket.on("recive-location",(data)=>{
    const {id ,latitude,longitude}=data;
    map.setView([latitude,longitude]);


    if(makers[id]){
        makers[id].setLatLng([latitude,longitude]);
    }
    else{
      makers[id]=L.marker([latitude,longitude]).addTo(map)
    }
})

socket.on("user-disconnect",(id)=>{
    if(makers[id]){
        map.removeLayer(makers[id])
        delete makers[id];
    }
})