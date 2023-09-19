window.onload=getPlanetsInfo;

async function getPlanetsInfo(){
    var planetContainer= document.getElementById("planetContainer");

    
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

    //var planetResult = [];

    for(let i=0; i<planetId.length;i++){
        let requrl=urlBase+planetId[i];
        let xhr=new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.status===200){
                if(xhr.readyState===4){
                        const data=xhr.response;
                        
                        data.imageLink=planetImg[i];
                        console.log(data.id);
                        planetContainer.innerHTML+= "<div class='planetContainer__eachplanet'><img src="+data.imageLink+" alt="+data.englishName+" width='300'><div class='eachplanet__intro'><p>Name: "+data.englishName+"</p><p>Mass: "+(data.mass.massValue).toFixed(2)+" x 10<sup>"+data.mass.massExponent+"</sup> kg</p><p>Volume: "+(data.vol.volValue).toFixed(2)+" x 10<sup>"+data.vol.volExponent+"</sup> km<sup>3</sup></p><p>Distance To The Sun: "+((data.semimajorAxis)/1000000).toFixed(2)+" x 10<sup>6</sup> km</p><p>Mean Radius: "+data.meanRadius+" km</p><p>Average Temperature: "+((data.avgTemp)-273.15).toFixed(2)+" &deg;C</p><p>Escape Velocity: "+data.escape+" m/s</p></div></div>";
                        //planetResult.push(data);

                        
                }
            }
        }
        xhr.open('GET', requrl);
        xhr.responseType="json";
        xhr.send(null);


    }
    

}


