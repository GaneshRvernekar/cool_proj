console.log("heyy guys ")
let cont = document.getElementById('total')
let p = document.getElementById('p');
let pbar = document.getElementById("pbar")
let r = document.getElementById('r')
let rbar = document.getElementById('rbar')
let t = document.getElementById('t')
let tbar = document.getElementById('tbar')
let button = document.getElementById('button')

pbar.addEventListener("input", e => {
    p.value=pbar.value;
})

rbar.addEventListener("input", e => {
    r.value=rbar.value;   
})

tbar.addEventListener("input", e => {
    t.value=tbar.value;
})

button.addEventListener("click",(e)=>{
let principle =parseInt(p.value);
let pincipl=principle+(principle*(r.value)*(t.value)*(0.01));
let att= document.createElement('div');
console.log(pincipl);
att.setAttribute('id','answer');
att.innerHTML="Total sum will be "+pincipl;
cont.appendChild(att);

})