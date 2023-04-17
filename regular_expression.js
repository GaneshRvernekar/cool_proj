// let reg= /great/g;  // here g refers to the global symbol which signifies to check within the whole string array 

// // i refers that search in such a fashion that case of a letter does not effect the searching 

// console.log(reg)

// console.log(reg.source)

// // function to match the expression .

// let s="This is a great ganesh second This  ";

// 1 . exec() ->this function will return an array for match or null for no match

// we can use the multiple exec with the help of global flag being set 
// let result =reg.exec(s);
// console.log(result)
// result =reg.exec(s);
// console.log(result)
//  result =reg.exec(s);
// console.log(result)

// 2 ) Return's true or false 

// result = reg.test(s);

// console.log(result) // this will only print if reg is present ikn the string 

// 3. match() ->it will return an array of result or null

// let result3 = s.match(reg)

// console.log(result3)

//  4. search() returns the index of the first match else returns -1

// let result4 =s.search(reg)

// console.log(result4)

// // 5.  replace() -> returns the new string with all the replacements done i.e f

// let results5 =s.replace(reg,'TENDULKAR')

// console.log(results5)

// metacharacter's in Java Script 

// let regex=/aaru/;

// regex=/^aa/;//search for the regular expression starting with the aa
// regex =/ry$/ //For the regular expression ends with the chacters ry 
// regex=/g.nesh/ //here any of the character may be matched in the dot space
// regex= /ga*sh/ //matches any 0 or more number of characters 
// regex=/ha?rri?/ //in the regular expression i and a are said to be optional
// regex=/ga\*nesh / //here * is not the meta character * but is a usual * 

// let str ="aaru is the worst ediot in the world said by aaru";

// let result = regex.exec(str)

// console.log("The result from the exec is ",result)

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expressions with it `);
// }else{
//     console.log('Does not matches the expressions with it .')
// }

// const regex =/h[a-zA-Z]rry/;//This may hold any character between a to z 
// const reg=/h[arf]rry/       // may hold the value's between arf 
// const reg2=/h[arf]rry/      //^should not  hold the value's between arf 
// reg=/har{2}y/;              //it can have exactly  2 character of r 
// reg=/har{0,2}y/;            // Number of r can be between 0 to 2 

// //grouping within the characters 

// // reg= /(reg){2}([0-9]r)3/ reg should be repeated 2 times and numbers between 0-9 and three times 

// const str = "harry bhai";

// let result = reg.exec(str);

// console.log(result)

// let regex =/\w ar/; //->word character _ or alphabet or numerical one 

// regex= /\w+ abu/; //-> \w+ means one or more word characters and ends with abu

//  regex = /\W/   //non word character should be matched here  $%^&*()

// regex =/\W+ bhai/ // one or more non word characters may be present ending with bhai

// regex= /number \d +999/ ///d means the presence of digits d+ represents the presence of more than one appereance of d

// D refers to matching of non-digit characters in the regular expression 

// regex = /\s +ka number / // presence of back slash within the number (white space )

// capital letters of the respective characters represents the non appearence of that character in the regular expression

// regex= /h(?=y)/;

// str="There present the character y after the presence of y hy"

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expressions with it `);
// }else{
//     console.log('Does not matches the expressions with it .')
// }

// regex= /h(?!y)/ // There can be any number after h but it should not contain y
// // in the regular expression


// const name1 = document.getElementById('name1');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// let validphone  =false;
// let validuser =false;
// let validemail=false;
// // console.log(name ,email ,phone)

// name1.addEventListener('blur',()=>{

//     console.log('name is blurred ');

//     let regex=/^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
//     let str= name1.value;
//     console.log(regex,str)
//     if(regex.test(str))
//     {
//         validuser=true;
//         console.log("Successfully it had matched ")
//         name1.classList.remove('is-invalid');
//     }else{
//         console.log("Ooops it did not matched try later ")
//         name1.classList.add('is-invalid');
//     }
// })

//     email.addEventListener('blur',()=>{
//     console.log('mail is blurred ');
    
//     let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;  // -> \. actual dot  
//     let str= email.value;
//     console.log(regex,str)
//     if(regex.test(str))
//     {
//         validemail=true;
//         console.log("Successfully it had matched ")
//         email.classList.remove('is-invalid');
//     }else{
//         console.log("Ooops it did not matched try later ")
//         email.classList.add('is-invalid');
//     }
// })

// phone.addEventListener('blur',()=>{
//     console.log('phone is blurred ');
//     let regex=/([0-9]){10}/;
//     let str= phone.value;
//     console.log(regex,str);
//     if(regex.test(str))
//     {
//         validphone=true;
//         console.log("Successfully phone had matched ")
//         phone.classList.remove('is-invalid');
//     }else{
//         console.log("Ooops it did not matched phone number >>> try later ")
//         phone.classList.add('is-invalid');
//     }
    
// })

// let submit =document.getElementById('submit');

// submit.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('You have successfully submitted the form .');
//     if(validphone &&validuser && validemail)
//     {
//         let failure = document.getElementById('failure');
//         let success = document.getElementById('success');
//         $('#failure').hide();
//         success.classList.add('show');      
//     }
//     else{
//         let success = document.getElementById('success');
//         let failure = document.getElementById('failure');
//         failure.classList.add('show')
//         $('#success').hide();
//     }

    
// })

