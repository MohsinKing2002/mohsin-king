//const { json } = require("express/lib/response");

let greetMsg = document.getElementById('greetingMsg');
let currTime = new Date().getHours();

if(currTime >= 5 && currTime < 12){
    greetMsg.innerHTML = 'Good Morning';
}
else if(currTime >= 12 && currTime < 16){
    greetMsg.innerHTML = 'Good Noon';
}
else if(currTime >= 16 && currTime <18){
    greetMsg.innerHTML = 'Good Afternoon';
}
else if(currTime >= 18 && currTime < 20){
    greetMsg.innerHTML = 'Good Evening';
}
else{
    greetMsg.innerHTML = 'Good Night';
}


let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', async(e)=>{
    e.preventDefault();

    const {name, email, phone, message} = user;

    const res = await fetch("/conn", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, email, phone, message
        })
    })

    const data = await res.json();
    if(!data){
        window.alert("invalid submission !!!")
    }
    else{
        window.alert("submission successfull")
    }
})