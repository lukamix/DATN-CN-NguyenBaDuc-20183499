"use strict";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const FetchAPI = {};

FetchAPI.post = async (route, res) => {
  return fetch(route, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(res),
  })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .catch((error) => {
      console.error(error);
      Alert.alert("Thông báo",String(error))
    });
};

FetchAPI.get = async (route) => {
  // console.log(token)
  return fetch(route, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .catch((error) => {
      console.error(error);
      Alert.alert("Thông báo",String(error))
    });
};

module.exports = FetchAPI;