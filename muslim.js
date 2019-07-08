
function myFunction(){
    
}

    window.addEventListener('click', ()=> {
        let long;
        let lat;
        let loc = document.querySelector('.coord');
        let deg = document.querySelector('.quibla');
        let cite = document.querySelector('.city');
        let s = document.querySelector('.sobh');
        let d = document.querySelector('.dhuhr');
        let a = document.querySelector('.asr');
        let m = document.querySelector('.maghrib');
        let i = document.querySelector('.isha');
        var city = document.getElementById("ville").value;
        var api = "https://muslimsalat.com/"+city+"/daily.json?key=API_KEY&jsoncallback=";
        
            fetch(api)
                .then(resp => {
                    return resp.json();
                })
                .then(data =>{
                    console.log(data);
                    const {shurooq,dhuhr,asr,maghrib,isha} = data.items[0];
                    loc.textContent = "coordinates : "+data.latitude+","+data.longitude;
                    deg.textContent = "quibla direction : "+data.qibla_direction;
                    s.textContent = "sobh : "+shurooq;
                    d.textContent = "dhuhr : "+dhuhr;
                    a.textContent = "asr : "+asr;
                    m.textContent = "maghrib : "+maghrib;
                    i.textContent = "isha : "+isha;
                    });
            })

        