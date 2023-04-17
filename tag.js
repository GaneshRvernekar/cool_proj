const ul = document.querySelectorAll("ul"),
input = document.querySelector("input");

let tags=[]

function createTag()
{
    tags.forEach(tag=>{
        let LiTag =`<li>${tag}<i class="fa-solid fa-xmark"></i></li>`;
        ul.insertAdjacentHTML("afterbegin",LiTag);
    })
}

// function createTag(){
//     ul.querySelectorAll("li").forEach(li => li.remove());
//     tags.slice().reverse().forEach(tag =>{
//         let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
//         ul.insertAdjacentHTML("afterbegin", liTag);
//     });
//     countTags();
// }

function addTag(e){
   if(e.key=="Enter")
   {
    let tag= e.target.value.replace(/\s+/g,' ')
    if(tag.length>1 && !tags.includes(tag)){
        tag.split(',').forEach(tag => {
            tags.push(tag);
            createTag();
        });
    }
   }
}
input.addEventListener("keyup",addTag);

