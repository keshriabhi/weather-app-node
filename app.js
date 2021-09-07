const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const URL = 'http://api.weatherstack.com/current?access_key=91e0f748cd2513dedd9adb536727d0fd&query=New%20York';

// request({url : URL, json : true}, (error, response)=>{
//     // console.error('error : ',error);
//     // console.log('Status Code : ',response && response.statusCode);
//     // console.log('Body : ',body);
//     if(error){
//         console.log('There was an error');
//     }else if(response.body.error){
//         console.log('Error code -> '+response.body.error.code);
//     }else{
//         console.log('temperature -> '+response.body.current.temperature);
//     }
// })

geocode('Delhi',(error, data)=>{
    if(error){
        console.log('Error -> '+error)
    }else{
        console.log('Lat = '+data.lattitude);
        console.log('Long = '+data.longitude);
        console.log('Place = '+data.place_name);
    }

})