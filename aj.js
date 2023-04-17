//Asynchronous Java script 

//Helps in fetching the data simultaneously without interfearing with the existing web page.
// No page reload or refresh needed for the web page
// we can use the XML instead of JSON for data transfer
console.log('ajax') 

let fetchBtn = document.getElementById('fetchBtn')

fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){

    console.log('button is clicked')
    
    // instantiate a xhr object

    const xhr = new XMLHttpRequest();

    // open the object being created 

    // xhr.open('GET', "https://jsonplaceholder.typicode.com/todos/1",true);
    
    // This os used in the case of post request
    
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create',true);
    
    xhr.getResponseHeader('Content-type','application/json')
    
    // GET means we are interested in the data present in the url
    // POST refers that we are fetching the data depending on the input commands that we are providing
    // true refers for asynchronous

    // to track the perform on progress

    xhr.onprogress =function(){

        console.log('on progress');
        
        // The kind of a spinner or a loader animation can be displayed over here .
    
    }

    xhr.onload = function(){

        if(this.status==200)
        {
            console.log(this.responseText)
        }
        else{
            console.error("Some error have been occured ,Pls try later")
        }
    }

    // xhr.onreadystatechange =function(){
    //     console.log('ready state is ',xhr.readyState);
    // }

//     To perform when the data is ready

    params=`{"name":"test@#&&$%9535"," salary ":"123#$%","age":"21"}`;

    xhr.send()
    
    console.log('we are done')
}

let popBtn =document.getElementById('popBtn');

popBtn.addEventListener('click',popHandler)

function popHandler(){

    console.log('popHandler button is clicked')
    
    // instantiate a xhr object

    const xhr = new XMLHttpRequest();

    // open the object being created 

    xhr.open('GET', "https://dummy.restapiexample.com/api/v1/employees",true);
    
    // This os used in the case of post request
    
    // xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create',true);
    
    // xhr.getResponseHeader('Content-type','application/json')
    
    // GET means we are interested in the data present in the url
    // POST refers that we are fetching the data depending on the input commands that we are providing
    // true refers for asynchronous

    // to track the perform on progress

    // xhr.onprogress =function(){

    //     console.log('on progress');
        
    //    The kind of a spinner or a loader animation can be displayed over here .
    
    // }

    xhr.onload = function(){

        if(this.status==200)
        {
           let obj=JSON.parse(this.responseText)
           console.log(obj);
           let list=document.getElementById('list')
           str=" "
           for(key in obj)
           {
            str+=`<li>${obj[key].id}</li>`;
           }
           list.innerHTML=str;
        }
        else{
            console.error("Some error have been occured ,Pls try later")
        }
    }

    // xhr.onreadystatechange =function(){
    //     console.log('ready state is ',xhr.readyState);
    // }

//     To perform when the data is ready

    
    xhr.send()
    
    console.log('we are done to populate the  data')

}