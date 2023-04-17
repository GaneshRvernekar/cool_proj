let btn=document.querySelectorAll("p");
let display =document.getElementById("screen");
let screenVal='';

// if the help of the query selectorAll we will take out all the of it and add the loop into it

for(item of btn)
{
        item.addEventListener("click",(e)=>{
        btnText =e.target.innerText;
        console.log(btnText)
        if(btnText == 'C')
        {
            screenVal="";
            display.value=screenVal;
        }
        else if(btnText=='=')
        {
           display.value=eval();
        }
        else
        {
        screenVal+=btnText;
        display.value=screenVal;
        }
    })
}

function eval()
{
    let text =display.value;
    let flag=1;
    let before=0;
    let sign;
    let after=0;

    // in-order to iterate within the loop of a number ,can be played with its index.

    for(t in text)
    {
        if(text[t]=='-' ||text[t]=='+' ||text[t]=='*' ||text[t]=='%' )
        {
            sign=text[t];
            flag=0;
        }

        else
        {
            if(flag)
            {
                before+=text[t];
            }
            else{
                after+=text[t];
            }
        }
    }
    
    let a=parseInt(before);
    let b=parseInt(after);

    console.log(a);
    console.log(b);
    if(sign=='-' )
    {
           return (a-b);
     }
     else if(sign=='+')
     {
        return (a+b);
     }
     else if(sign=='*')
     {
        return (a*b);
     }
     else if(sign=='%')
     {
        return (a%b);
     }
}