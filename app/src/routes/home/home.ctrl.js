"use strict";

const hello = (req,res)=>{
    // 기능
    res.render("home/index");
};

const login = (req,res)=>{
    res.render("home/login");
};

// hello랑 login을 index.js에서 사용할수있도록
module.exports = {
    hello,
    login,
};
// 원래 오브젝터는 key:value로 되어있는데 
// 저렇게 key만 적어주면
// hello:hello 이렇게 key:key 한 것과 같음

