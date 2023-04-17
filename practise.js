// function adam()
// {

//     // in the same way we can do it for get element by the tag name for array kind of a thing 

//     let tag = document.getElementsByTagName("div");

//     Array.from(tag).forEach((e)=>{
//     e.style.background ="rgba(${Math.random()}*255,Math.random()*255,Math.random()*255,1)";
// console.log(Math.random());
//     })

//     // for(var i in tag)
//     // {
//     //     tag[i].style.background ="rgba(Math.random()*255,Math.random()*255,Math.random()*255,1)";
//     // }
//     let x= document.getElementById('kle');
//     let all=x.innerText.split(" ");
//     let len=0;
//     for(var i in all)
//     {
//         len+=all[i].length;
//     }
//    console.log(len)
//    x.innerHTML="Thankyou for submitting";
//    x.style.background ="rgba(Math.random()*255,Math.random()*255,Math.random()*255,1)";
    
// }

console.log("connected");

function func2(){
    let x= document.querySelectorAll(".vehicle");
    let y=document.getElementById("container");
      let arr=[];
        y.innerHTML ="congratulations  ";
        Array.from(x).forEach((e)=>{
            if(e.checked== true)
            {
                y.innerHTML+=`${e.name} `;
            arr.push(e.name);
            }
        })
console.log(arr);
}