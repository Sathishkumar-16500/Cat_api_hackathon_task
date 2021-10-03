{/* <body onload="showallcats()"></body> */}
const header=document.createElement("div");
header.className="header";
header.innerHTML=`<h1 class="heading">Welcome to the Cataas API..!!</h1>
                <h3 class="heading1">Say Meoww...!!!! To your Cats..!!</h3>`
document.body.append(header);

const searcharea=document.createElement("div");
searcharea.className="searcharea";
searcharea.innerHTML=`<input class="tagfilter" onkeyup="getfiltertxt()" onkeydown="getfiltertxt()" type='text' placeholder='search for your cat'></input>
<button class="filterbtn" onclick="filtercats(tagdata);showfiltercats()">Search</button>`
document.body.append(searcharea);

const container=document.createElement("div");
container.className="container";
document.body.append(container);

let catglobal;
let filtercatglobal;
var tagdata;
let catcard;
function getfiltertxt(){
    let tag=document.querySelector(".tagfilter").value;
    // console.log(tag);
    tagdata=tag
    // return tagdata;
}
let filtertag=getfiltertxt();
console.log(filtertag);

async function getallcats(){
    const catdata= await fetch("https://cataas.com/api/cats");
    const cat= await catdata.json()
    catglobal=cat;
    // console.log(catglobal);
    return catglobal;
}

async function filtercats(tags){
    const catdata= await fetch("https://cataas.com/api/cats?tags="+tags);
    const cat= await catdata.json()
    filtercatglobal=cat;
    // console.log(filtercatglobal);
    return filtercatglobal;
}
getallcats();
// filtercats("cute");

catcontainer=document.querySelector(".container")

function showallcats(){
    setTimeout(function(){
        console.log(catglobal);
        catcontainer=document.querySelector(".container");
        catcontainer.innerHTML="";
        catglobal.forEach((element) =>{
            const cardElement=cardgenerator(element);
            catcontainer.append(cardElement);
        });}, 1000);
}

function showfiltercats(){
    setTimeout(function(){
        console.log(filtercatglobal);
        catcontainer=document.querySelector(".container");
        catcontainer.innerHTML="";
        filtercatglobal.forEach((element) =>{
            const cardElement=filtercardgenerator(element);
            catcontainer.append(cardElement);
        });}, 1000);
}

if(tagdata==''){
    showallcats();
}else{
    showfiltercats();
}



catcontainer=document.querySelector(".container");
const cardgenerator=({id,created_at,tags})=>{
    catcard=document.createElement("div");
    catcard.className="catcard";
    img_link="https://cataas.com/cat/"+id;
    catcard.innerHTML=`<img class='cat-image'src=${img_link}>
                   <div class='cat-info'>
                   <p>Created_at=${created_at}</p>
                   <p>Tags=${tags}</p>
                   </div>`;
    return catcard;
};
const filtercardgenerator=({id,created_at,tags})=>{
    catcard=document.createElement("div");
    catcard.className="catcard";
    img_link="https://cataas.com/cat/"+id;
    catcard.innerHTML=`<img class='cat-image'src=${img_link}>
                   <div class='cat-info'>
                   <p>Created_at=${created_at}</p>
                   <p>Tags=${tags}</p>
                   </div>`;
    return catcard;
};

function showmode(){
    if(tagdata==''){
        showallcats();
    }
    else{
        showfiltercats();
        console.log('ok');
    }
}