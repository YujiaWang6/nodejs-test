/*const url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getIss(){
    var response = await fetch(
        url,
        {
            method: "get",
            headers:{
                "Content-Type": "application/json"
            }
        }
    );
    return await response.json();
}

module.exports = {
    getIss
}*/
window.onload = pageReady;
function pageReady(){
    var issMap = document.getElementById("issMap");
    var issInfo = document.getElementById("issInfo");

    var latitude;
    var longitude;


    //call Where ISS is API
    const issUrl = "https://api.wheretheiss.at/v1/satellites/25544";
    const googleKey = "AIzaSyA0Ev3Rx2Q17hqzfo6N2hy7wJre0Bj25U8";

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.status===200){
            if(xhr.readyState===4){
                const issdata = xhr.response;
                console.log(issdata);
                latitude = issdata.latitude;
                longitude = issdata.longitude;
                var altitude = issdata.altitude.toFixed(2);
                var velocity = issdata.velocity.toFixed(2);
                var visibility = issdata.visibility;
                var visibilityResult;
                if(visibility==="daylight"){
                    visibilityResult = "Yes";
                }else{
                    visibilityResult = "No";
                }
                var time = issdata.timestamp;
                var timeTransfer = new Date(time*1000);
                issInfo.innerHTML = '<h2>Information about ISS</h2><p>Time Now: '+timeTransfer+'</p><p>Altitude: '+altitude+' km</p><p>Velocity: '+velocity+' km/h</p><p>Visibility: '+visibilityResult+'</p>';
                //using latitute & longitude to call google API
                const googleUrl = "https://www.google.com/maps/embed/v1/place?key=" + googleKey + "&q=" + latitude + "," + longitude+"&zoom=4";
                issMap.innerHTML ='<iframe width="800" height="600" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="' + googleUrl + '"></iframe>';
                
            }
        }
    }
    xhr.open('GET',issUrl);
    xhr.responseType="json";
    xhr.send(null);

}
