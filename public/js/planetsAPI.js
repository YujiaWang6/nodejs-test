const urlBase = "https://api.le-systeme-solaire.net/rest/bodies/";

var planetId = ["uranus","neptune","jupiter","mars","mercure","saturne","terre","venus"];

//var planetName = ["Uranus","Neptune","Jupiter","Mars","Mercury","Saturn","Earth","Venus"];

var planetImg = [
    "https://images-assets.nasa.gov/image/PIA18182/PIA18182~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg",
    "https://images-assets.nasa.gov/image/PIA00343/PIA00343~orig.jpg",
    "https://images-assets.nasa.gov/image/PIA03276/PIA03276~orig.jpg",
    "https://sos.noaa.gov/ftp_mirror/astronomy/mercury/colorized/media/thumbnail_big.jpg",
    "https://images.squarespace-cdn.com/content/v1/5fa5ec79661ee904d2973ca0/1678740394793-H2ZM9W2E8WFYUOCVFDHY/saturn.png",
    "https://solarsystem.nasa.gov/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSXBObVU0WmpReE5HRXROakJpTlMwMFpHRTBMVGxoWm1VdE9ETTRabU01WW1WaVlUa3hCam9HUlZRNkVHUnBjM0J2YzJsMGFXOXVTU0pWYVc1c2FXNWxPeUJtYVd4bGJtRnRaVDBpTVMxaWJIVmxiV0Z5WW14bFgzZGxjM1F1YW5Cbklqc2dabWxzWlc1aGJXVXFQVlZVUmkwNEp5Y3hMV0pzZFdWdFlYSmliR1ZmZDJWemRDNXFjR2NHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc5cGJXRm5aUzlxY0dWbkJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--8545a4087813f858805880e50b42901aeebcf322/1-bluemarble_west.jpg",
    "https://solarsystem.nasa.gov/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSXBNR001TTJNeU9EY3RNR1U0TmkwME56RTJMV0V4TVRndFpqVTJZVEJoTlRVNE9USTNCam9HUlZRNkVHUnBjM0J2YzJsMGFXOXVTU0pSYVc1c2FXNWxPeUJtYVd4bGJtRnRaVDBpVUVsQk1EQXlOekZmWkdWMFlXbHNMbXB3WnlJN0lHWnBiR1Z1WVcxbEtqMVZWRVl0T0NjblVFbEJNREF5TnpGZlpHVjBZV2xzTG1wd1p3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEMmx0WVdkbEwycHdaV2NHT3daVU9oRnpaWEoyYVdObFgyNWhiV1U2Q214dlkyRnMiLCJleHAiOm51bGwsInB1ciI6ImJsb2Jfa2V5In19--bf050cb042af9ed2b85d4fae128e9139ac5eb95a/PIA00271_detail.jpg"
];

async function getPlanetsInfo(){
    var planetResult = [];
    for(let i=0;i<planetId.length;i++){
        let eachPlanet = planetId[i];
        let requrl = `${urlBase}${eachPlanet}`;
        //console.log(requrl);
        var response = await fetch(
            requrl,
            {
                method: "get",
                headers:{
                    "Content-Type": "application/json"
                }
            }
        );
        var data = await response.json();
        data.imageLink = planetImg[i];
        planetResult.push(data);
    }
    return planetResult;
}

module.exports = {
    getPlanetsInfo
}

