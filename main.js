let container=document.createElement('div');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

container.classList.add('container');

let body=document.querySelector('body');

for(let x=0;x<256;x++){
    let div=document.createElement('div');
    div.classList.add('gridbox');
    div.classList.add('cleardiv');
    div.addEventListener('mouseenter',()=>{
        div.style.backgroundColor="black";
    })
    container.appendChild(div);
}
body.appendChild(container);

const button =document.querySelector('.dimension');
function getsize(){
    const y=prompt("Type Size of Grid Less than or equal to 100--");
    while(y>100){
        alert("value should be less than 100");
        return;
    }
    container.innerHTML="";
    const width=688/y;
    const height=688/y;

    for(let x=0;x<y*y;x++){
        let div=document.createElement('div');
        div.classList.add('cleardiv');
        div.setAttribute('style',`height:${height}px;width:${width}px;border: 1px solid black;box-sizing: border-box;
        cursor: pointer;`);
        div.addEventListener('mouseenter',()=>{
            div.style.backgroundColor="black";    
            console.log("hello");     
        })
        container.appendChild(div);
    }

}
button.addEventListener('click',getsize);

const clear=document.querySelector('.clear');
function cleargrid(){
    const divs=document.querySelectorAll('.cleardiv');
    divs.forEach(div=>{
        div.style.backgroundColor="rgba(0,0,0,0)";
    });
}
clear.addEventListener('click',cleargrid);

const rainbow=document.querySelector('.Rainbow');
rainbow.addEventListener('click',()=>{
    const divs=document.querySelectorAll('.cleardiv');
    divs.forEach(div=>{
        div.addEventListener('mouseenter',()=>{
            div.style.backgroundColor=getRandomColor();       
        })
    });
})
const input=document.querySelector('#head');
input.addEventListener('change',(e)=>{
    const divs=document.querySelectorAll('.cleardiv');
    divs.forEach(div=>{
        div.addEventListener('mouseenter',()=>{
            div.style.backgroundColor=e.target.value;        
        })
    });
})