function myFunction(){
    window.addEventListener('load', ()=> {
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
        var city=document.getElementById("ville").value;

        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=>{
                long = position.coords.longitude;
                lat = position.coords.latitude;

                var api = "https://muslimsalat.com/"+city+"/daily.json?key=API_KEY&jsoncallback=";

                fetch(api)
                    .then(resp => {
                        return resp.json();
                    })
                    .then(data =>{
                        console.log(data);
                        const {shurooq,dhuhr,asr,maghrib,isha} = data.items[0];
                        loc.textContent = data.latitude+","+data.longitude;
                        deg.textContent = data.qibla_direction;
                    });
            })
        }
    })
}
