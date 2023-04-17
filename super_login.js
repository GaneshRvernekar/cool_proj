const signinBtn =document.querySelector('.signinBtn');
const signupBtn =document.querySelector('.signupBtn');
const formBx    =document.querySelector('.formBx');
const body      =document.querySelector('body');

// .classlist.add("something") is the wonderfull element when the design aspect of the something is already being defined in the css 

signupBtn.onclick = function(){
    formBx.classList.add("active");
    body.classList.add('active');
}

signinBtn.onclick =function(){
    formBx.classList.remove("active");
    body.classList.remove('active');
}
