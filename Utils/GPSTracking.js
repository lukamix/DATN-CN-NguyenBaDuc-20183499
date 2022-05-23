import { GeoPosition } from "react-native-geolocation-service";
import { useState } from 'react';
import {PermissionsAndroid} from 'react-native';

var GPSTracking =(function() {
    var instance;
    var currentLongitude;
    var currentLatitude;
    var locationStatus;
    function setCurrentLongitude(text){
      currentLongitude=text;
    }
    function setCurrentLatitude(text){
      currentLatitude=text;
    }
    function setLocationStatus(text){
      locationStatus =text;
    }
    function init(){
        return{
            requestLocationPermission: async () => {
                if (Platform.OS === 'ios') {
                  getOneTimeLocation();
                  subscribeLocationLocation();
                } else {
                  try {
                    const granted = await PermissionsAndroid.request(
                      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                      {
                        title: 'Location Access Required',
                        message: 'This App needs to Access your location',
                      },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                      //To Check, If Permission is granted
                      getOneTimeLocation();
                      subscribeLocationLocation();
                    } else {
                      setLocationStatus('Permission Denied');
                    }
                  } catch (err) {
                    console.warn(err);
                  }
                }
            },
            getOneTimeLocation : () => {
                setLocationStatus('Getting Location ...');
                Geolocation.getCurrentPosition(
                  //Will give you the current location
                  (position) => {
                    setLocationStatus('You are Here');
             
                    //getting the Longitude from the location json
                    const currentLongitude = 
                      JSON.stringify(position.coords.longitude);
             
                    //getting the Latitude from the location json
                    const currentLatitude = 
                      JSON.stringify(position.coords.latitude);
             
                    //Setting Longitude state
                    setCurrentLongitude(currentLongitude);
                    
                    //Setting Longitude state
                    setCurrentLatitude(currentLatitude);
                  },
                  (error) => {
                    setLocationStatus(error.message);
                  },
                  {
                    enableHighAccuracy: false,
                    timeout: 30000,
                    maximumAge: 1000
                  },
                );
            },
            subscribeLocation:() => {
                watchID = Geolocation.watchPosition(
                  (position) => {
                    //Will give you the location on location change
                    
                    setLocationStatus('You are Here');
                    console.log(position);
             
                    //getting the Longitude from the location json        
                    const currentLongitude =
                      JSON.stringify(position.coords.longitude);
             
                    //getting the Latitude from the location json
                    const currentLatitude = 
                      JSON.stringify(position.coords.latitude);
             
                    //Setting Longitude state
                    setCurrentLongitude(currentLongitude);
             
                    //Setting Latitude state
                    setCurrentLatitude(currentLatitude);
                  },
                  (error) => {
                    setLocationStatus(error.message);
                  },
                  {
                    enableHighAccuracy: false,
                    maximumAge: 1000
                  },
                );
              },
            getAddressFromCoordinates({ latitude, longitude }) {
                return new Promise((resolve) => {
                    const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${HERE_API_KEY}&mode=retrieveAddresses&prox=${latitude},${longitude}`
                    fetch(url)
                    .then(res => res.json())
                    .then((resJson) => {
                        // the response had a deeply nested structure :/
                        if (resJson
                        && resJson.Response
                        && resJson.Response.View
                        && resJson.Response.View[0]
                        && resJson.Response.View[0].Result
                        && resJson.Response.View[0].Result[0]) {
                        resolve(resJson.Response.View[0].Result[0].Location.Address.Label)
                        } else {
                        resolve()
                        }
                    })
                    .catch((e) => {
                        console.log('Error in getAddressFromCoordinates', e)
                        resolve()
                    })
                })
            },
        }
    }
    return{
        Instance : function(){
            if(!instance) instance =init();
            return instance;
        }
    }
})();
export default GPSTracking;