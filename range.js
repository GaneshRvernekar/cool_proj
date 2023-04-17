const rangeInput = document.querySelectorAll(".range-input input"),
numInput = document.querySelectorAll(".num-input input"),
progress = document.querySelector(".slider .progress");
let priceGAP =1000;

numInput.forEach(input=>{
    input.addEventListener("input",e=>{
       let minNum= parseInt(numInput[0].value),
       maxNum =parseInt(numInput[1].value);
       if(((maxNum-minNum) >= priceGAP) && maxNum<= rangeInput[1].max)
       {   
            if(e.target.className === "input-min")
            {
                rangeInput[0].value= minNum;
                progress.style.left =((minNum/rangeInput[0].max)*100)+"%";
            }else{
                rangeInput[1].value= maxNum;
                progress.style.right =100-(maxNum/rangeInput[1].max)*100+"%";       
            }
       }
    })
})


rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGAP){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGAP;
            }else{
                rangeInput[1].value = minVal + priceGAP;
            }
        }else{
            numInput[0].value = minVal;
            numInput[1].value = maxVal;
            progress.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});