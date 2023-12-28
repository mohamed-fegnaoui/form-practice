// select elements 
let mail = document.querySelector(".email");
let submit = document.querySelector(".submit");
let msg = document.querySelector(".msg");
let sendMsg = document.querySelector(".send");


// add event 
submit.addEventListener("click", showMsg);

// show msg 
function showMsg() {
    if (mail.value == "") {
        msg.style.display = "block";
    };
};


/// hide msg

mail.addEventListener("focus" , hideMsg)
function hideMsg() {
    msg.style.display  = "none"
};

// show send msg

submit.addEventListener("click", showSendMsg);

function showSendMsg() {
    if (mail.value !== "") {
        sendMsg.style.display = "flex";
    };
    mail.value = "";
};

// second hide msg

mail.addEventListener("focus" , hideSendMsg)
function hideSendMsg() {
    sendMsg.style.display = "none";
};



 





