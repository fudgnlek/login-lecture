"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

// console.log(id);

loginBtn.addEventListener("click",login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    // 전달할 데이터가 req
    // console.log(req);

    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    });
}