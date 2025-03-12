const request=require('request');

const openWeatherMap={
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY:"f5baebeb5bba6f10053a1760fd638cb9"
}

const weatherData=(address,callback)=>{
    const url=openWeatherMap.BASE_URL + encodeURI(address) + "&APPID=" + openWeatherMap.SECRET_KEY;
    console.log(url);

    request({url , json:true},(error,data)=>{
        if(error){
            callback(true, "unable to fetch the data" + error);

        }
        callback(false,data?.body);
    });


};

module.exports=weatherData;

