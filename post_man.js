console.log("Ganesh is a  good boy")

// utility function to get DOM element from the string 

function getElementFromString(string)
{
    let div =document.createElement('div');
    div.innerHTML =string;
    return div.firstElementChild;
}

// hide the parameters box initially 

// Initialize the number of parameters 

let paramCount =0;

let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display='none';

// If the user clicks on the params hide the json box

let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click',()=>{
    document.getElementById('requestJsonBox').style.display='none';
    document.getElementById('parameterBox').style.display='block';
})

let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click',()=>{
    document.getElementById('requestJsonBox').style.display='block';
    document.getElementById('parameterBox').style.display='none';    
})

// if the user click's on the plus button add more parameters 

let addParam = document.getElementById('addParam');
addParam.addEventListener('click',()=>{

    let param = document.getElementById('params');
    let string = ` <div class="form-row my-2">
        <label for="URL" class="col-sm-2 col-form-label">Parameter ${paramCount+2}</label>
        <div class=" col-md-4">
            <input type="text" class="form-control" id="parameterKey1" placeholder="Enter parameter ${paramCount+2} key ">
        </div>
        <div class="col-md-4">
            
            <input type="text" class="form-control" id="parameterValue ${paramCount+2}"
                placeholder="Enter Parameter ${paramCount+2} value ">
        </div>
    <button  class="btn btn-primary deleteParam">-</button>
</div>`;

// convert the string to dom element

let paramElement =getElementFromString(string);

param.appendChild(paramElement);
// Add an event listener to remove the element when clicked -

let delete_param= document.getElementsByClassName('deleteParam');

for( item of delete_param){
    item.addEventListener('click',(e)=>{
        e.target.parentElement.remove();
    })
}
paramCount++;
})

// if the user clicks on the submit button 

let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{

    // show please wait in the respone box to make the user to wait 
    document.getElementById('responceJsonText').value="Please wait .. Your responce has been submitted ..!!";

    // fetch all the values entered by the users 

    let url = document.getElementById('urlField').value;

    let requestType =document.querySelector("input[name='requestType']:checked").value;
    let ContentType =document.querySelector("input[name='contentType']:checked").value;

    // log all the values in the console for debugging 
let data={};

    if(ContentType=='params')
    {
        data={};
        for( i=0;i<paramCount+1;i++){
            if(document.getElementById('parameterKey'+(i+1))!=undefined){
            let key = document.getElementById('parameterKey'+(i+1)).value;
            let value = document.getElementById('parameterValue'+(i+1)).value;
            data[key]=value;
            }
            data=JSON.stringify(data);
        }
    }
    else{
        data=document.getElementById('requestJsonText').value;

    }
    console.log('Url is ',url);
    console.log('Request type is',requestType);
    console.log('Content type is ',ContentType);
    console.log(typeof data)

    // if the request type is post invoke the fetch api to create a post request 

    if(requestType=='GET')
    {
        fetch(url,{
            method:'GET',
        })
        .then(responce=>responce.text())
        .then((text)=>{
            document.getElementById('responceJsonText').value =text;
        })
    }else{

        fetch(url,{
            method:'POST',
            body:data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(responce=>responce.text())
        .then((text)=>{
            document.getElementById('responceJsonText').value =text;
        });

    }

})
