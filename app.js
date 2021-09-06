const request = require('request');

const URL = 'http://api.weatherstack.com/current?access_key=91e0f748cd2513dedd9adb536727d0fd&query=New%20York';

request({url : URL, json : true}, (error, response, body)=>{
    // console.error('error : ',error);
    // console.log('Status Code : ',response && response.statusCode);
    // console.log('Body : ',body);
    console.log(body.current.temperature);
})