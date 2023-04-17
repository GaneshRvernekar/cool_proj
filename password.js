let psd= document.getElementById('passwd')
let togBtn=document.getElementById('toggleBtn')
let lowercase= document.getElementById('lower')
let uppercase =document.getElementById('upper')
let Number1 =document.getElementById('number')
let spl = document.getElementById('special')
let len =document.getElementById('length')

// setAttribute is a special fucntion by which we can change the type of the attribute which it belongs to

togBtn.addEventListener('click',()=>{
    if(psd.type === 'password')
    {
        psd.setAttribute('type','text');
        togBtn.classList.add('hide');
    }else{
        psd.setAttribute('type','password');
        togBtn.classList.remove('hide')
    }
 })

 function checkPass(data)
 {
    const lower= new RegExp('(?=.*[a-z])')
    const upper=new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special= new RegExp('(?=.*[!@#\$%\^&\*])')
    const length=new RegExp('(?=.{8,})')

    if(lower.test(data)){
        lowercase.classList.add('valid')
    }else{
        lowercase.classList.remove('valid')
    }

    if(upper.test(data)){
        uppercase.classList.add('valid')
    }else{
        uppercase.classList.remove('valid')
    }

    if(number.test(data)){
        Number1.classList.add('valid')
    }else{
        Number1.classList.remove('valid')
    }

    if(special.test(data)){
        spl.classList.add('valid')
    }else{
        spl.classList.remove('valid')
    }

    if(length.test(data)){
        len.classList.add('valid')
    }else{
        len.classList.remove('valid')
    }
 }