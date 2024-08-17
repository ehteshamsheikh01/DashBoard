import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth, db } from "./config.js";


import {  collection , addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


// import { getfirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
const form = document.querySelector("form");
const inputOne = document.querySelector("#placeholder");
const inputTwo = document.querySelector("#mind");
const RenDerDiv = document.querySelector('.render')




form.addEventListener("submit" , async (event)=>{
  event.preventDefault();
console.log(placeholder.value);
console.log(mind.value);


let arr = []


let obj ={
  placeholder: placeholder.value,
  mind: mind.value
  }

arr.push(obj)
console.log(arr);
renderblogs()

})



function renderblogs(){
RenDerDiv.innerHTML="";
arr.ma
}


















