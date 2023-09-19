window.onload = pageReady;
function pageReady(){
    //Output blocks
    var apod = document.getElementById("apod");

    //Get date range
    var today = new Date();
    var date1 = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var apodStartDate = "";
    var apodEndDate = "";
    var monthAlt = "";
    if(date1>10){
        date2 = date1-10;
        apodStartDate = year+"-"+month+"-"+date2;
        apodEndDate = year+"-"+month+"-"+date1;
    }else{
        date2 = date1+10;
        if(month>1){
            monthAlt = month-1;
        }else{
            monthAlt = 12;
        }
        apodStartDate = year+"-"+monthAlt+"-"+date2;
        apodEndDate = year+"-"+month+"-"+date1;
    }

    //Setting APOD key & url
    const apodKEY = "rjZTbSY8DAAfbSFHGvRvi3EqitCnazn5wPVwWYgl";
    const apodUrl = "https://api.nasa.gov/planetary/apod?api_key="+apodKEY+"&start_date="+apodStartDate+"&end_date="+apodEndDate;

    var apodImage = [];
    //Connect API
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.status ===200){
            if(xhr.readyState ===4){
                const data = xhr.response;
                //console.log(data);
                //Get all the images within the range and push them into array
                for(let i=0; i<data.length; i++){
                    if(data[i].media_type === "image"){
                        apodImage.push("url('"+data[i].url+"')");
                    }
                }

                //Change background function
                function apodChangeBG(){
                    var apodbg = apodImage[Math.floor(Math.random()*apodImage.length)]
                    apod.style.backgroundImage = apodbg;
                }
                setInterval(apodChangeBG,3000);
            }else{
                apod.style.backgroundColor = "black";
            }
        }
    }

    xhr.open('GET', apodUrl);
    xhr.responseType = "json";
    xhr.send(null);



    var planetsMainPage = document.getElementById("planets");

    var planetName = ["Uranus","Neptune","Jupiter","Mars","Mercury","Saturn","Earth","Venus"];
    
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

    for(let i=0;i<planetName.length;i++){
        planetsMainPage.innerHTML+="<div class='planets__eachPlanet'><a href='/planets'><img src="+planetImg[i]+" alt="+planetName[i]+" width='200'><p>"+planetName[i]+"</p></a></div>";
    }
}