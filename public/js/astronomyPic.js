window.onload = pageReady;

function pageReady(){
    //Output blocks
    var apodOutput = document.getElementById("apod__apiOutput");
    var apodIntro = document.getElementById("apod__apiIntro");
    var userDate = document.getElementById("userDate");
    var dateBtn = document.getElementById("submitBtn");


    //Get date range
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var apodDate = year+"-"+month+"-"+date;

    userDate.setAttribute('max',today.toISOString().split('T')[0]);

    //Setting APOD key & url
    const apodKEY = "rjZTbSY8DAAfbSFHGvRvi3EqitCnazn5wPVwWYgl";
    var apodUrl = "https://api.nasa.gov/planetary/apod?api_key="+apodKEY+"&date="+apodDate;

    //Connect API
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = findApi;
    function findApi(){
        if(xhr.status===200){
            if(xhr.readyState===4){
                var data = xhr.response;
                console.log(data);
                if(data.media_type === "image"){
                    apodOutput.innerHTML = "<img src='"+data.url+"' width='100%' max-width='700px'>";
                }else if(data.media_type === "video"){
                    apodOutput.innerHTML = "<iframe src='"+data.url+"' width='960' height='540' style='border:1px solid black;'></iframe>";
                }
                apodIntro.innerHTML = "<h2>"+data.title+"</h2><p>"+data.date+"</p><p>"+data.explanation+"</p>";
            }
        }
    }

    xhr.open('GET',apodUrl);
    xhr.responseType = "json";
    xhr.send(null);

    //recall the API after user chose the date
    dateBtn.onclick = getUserDate;
    function getUserDate(){
        apodDate=userDate.value;
        console.log(apodDate);
        apodUrl = "https://api.nasa.gov/planetary/apod?api_key="+apodKEY+"&date="+apodDate;
        console.log(apodUrl);
        
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = findApi;
        xhr.open('GET',apodUrl);
        xhr.responseType = "json";
        xhr.send(null);
    }


}