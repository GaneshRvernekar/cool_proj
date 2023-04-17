const fileInput   = document.querySelector('.file-input'),
    filterOptions = document.querySelectorAll('.filter button'),
    filterName    = document.querySelector('.filter-info .name'),
    filterValue   = document.querySelector('.filter-info .value'),
    filterSlider  = document.querySelector(".slider input"),
    chooseImg     = document.querySelector('.chose-img'),
    previewImg    = document.querySelector('.preview-img img'),
    rotateOptions = document.querySelectorAll('.rotate button'),
    resetFilterBtn   = document.querySelector('.reset-filters'),
    saveImgBtn   = document.querySelector('.save-img')


let brightness = "100", saturation = "100", inversion = "0", grayscale = "0";
let rotate=0,filpHorizaontal=1,flipVertical=1;
const applyFilters = ()=>{
    // applying the selected filters to the image 
    previewImg.style.filter=`brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    previewImg.style.transform=`rotate(${rotate}deg) scale(${filpHorizaontal},${flipVertical})`;

}

const loadImage = () => {
    let file = fileInput.files[0];
    if (!file) {
        return;
    }
    // preview Image is the container , we can add to it with the help of URL.createObjectURL by which we are supposed to pass the file into it 

    previewImg.src = URL.createObjectURL(file);
    //    once the image being loaded only the every options become freely available 

    previewImg.addEventListener("load", () => {
        document.querySelector(".container").classList.remove("disable")
    })

}

fileInput.addEventListener("change", loadImage);
chooseImg.addEventListener("click", () => fileInput.click())

filterOptions.forEach(options => {
    options.addEventListener("click", () => {

        // removing all the active elements if there initially and adding the active elements only for the clicked options 
        document.querySelector(".filter .active").classList.remove("active");
        options.classList.add("active");
    
        filterName.innerText = options.innerText;
        if (options.id === "brightness") {
           filterSlider.max="200";
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`;
        } else if (options.id === "saturation"){
            filterSlider.max="200";
            filterSlider.value =saturation ;
            filterValue.innerText = `${saturation}%`;
        } else if (options.id === "inversion"){
           filterSlider.max="100";
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}%`;
        } else if (options.id === "grayscale"){
            filterSlider.max="100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }       
    })
})

const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`;
    const secondFilter = document.querySelector(".filter .active");
    if (secondFilter.id === 'brightness') {
        brightness = filterSlider.value;
    } else if (secondFilter.id === 'saturation') {
        saturation = filterSlider.value;
        
    } else if (secondFilter.id === 'inversion') {
        inversion = filterSlider.value;
    
    } else {
        grayscale = filterSlider.value;
    }
    applyFilters();
}

filterSlider.addEventListener("input", updateFilter);

rotateOptions.forEach(options=>{
    options.addEventListener("click",()=>{
       if(options.id=='left'){
// changing the values of the rotate parameter present as a local variable in the preimage.style.filter 
rotate-="90";

       }else if(options.id=='right')
       {
rotate+="90";
       }else if(options.id=='horizontal')
       {
        filpHorizaontal=filpHorizaontal===1 ?-1:1;
       }else if(options.id=='vertical')
       {
        flipVertical=flipVertical===1?-1:1;
       }
       applyFilters();
    })
    
})

const resetFilter = () => {
    brightness = "100"; saturation = "100"; inversion = "0"; grayscale = "0";
    rotate = 0; filpHorizaontal = 1; flipVertical = 1;
    applyFilters();
}

const saveImages = () =>{
    console.log("saving the image");
    const canvas= document.createElement("canvas");//create a element of the type of a canvas 
    const ctx = canvas.getContext("2d");//returns a drawing context of a canvas to ctx
    canvas.width=previewImg.naturalWidth;
    canvas.height= previewImg.naturalHeight;
    ctx.filter=`brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.translate(canvas.width/2,canvas.height/2);
    if(rotate!==0){
        ctx.rotate(rotate*Math.PI/180);
    }
    ctx.scale(filpHorizaontal,flipVertical);
    ctx.drawImage(previewImg,-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);//using the drawing context of the image to proceede with 
    const link = document.createElement("a");
    link.download = "image.jpg";//passing a tag to download the image being created .
    link.href=canvas.toDataURL();//passing the a tag href value to the canvas data url
    link.click();//clicking the link tag so that the image is downloaded 

}

resetFilterBtn .addEventListener("click", resetFilter);
saveImgBtn.addEventListener("click",saveImages);
