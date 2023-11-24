import axios from 'axios';
const axios2 = require('axios');




const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");




btn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  axios.post("https://reqres.in/api/login", {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
    });
});

async function login() {
    alert("Please enter your");
   // axios.get("https://json-server-vercel-liart.vercel.app/usuario")
    
    try {
        const response = await axios.get('https://json-server-vercel-liart.vercel.app/usuario');
        console.log(response);
        alert(response);
      } catch (error) {
        console.error(error);
      }
    
}
