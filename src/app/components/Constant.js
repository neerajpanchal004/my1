"use client"
import axios from "axios"
import  { useContext, useState} from 'react'
import { UserContext } from "../context/Contextapi";


// POST REQUEST

export async function  postUsers(data){
    try {
        let response = await axios.post( "/authdata", data);
    } catch (error) {
       console.log(error) 
    }
}

// POST REQUEST

// GET REQUEST

export async function  getUsers(){
    // const {setLogindata} = useContext(UserContext)

    try {
        let response = await axios.get( "/authdata");
         setLogindata(response.data)
    } catch (error) {
       console.log(error) 
    }
}

// GET REQUEST FOR SHOES





// GET REQUEST FOR MOBILES




export async function getData(apipoint, data){

    try {
        let response = await axios.get(apipoint);
         data(response.data)
    } catch (error) {
       console.log(error) 
    }
}




