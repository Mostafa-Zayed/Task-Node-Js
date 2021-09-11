
const divData = document.getElementById('data');
const ul = divData.firstElementChild;

(async function getData() {
    let response = await fetch("http://localhost:3000/todos");
    let fetchData = await response.json();
    let data = fetchData.slice(0, 10)
    data.forEach(function(item){
        ul.appendChild(createElement(item.title));
    });
   
})();

function createElement(name)
{
    let li = document.createElement('li');
    let button = createTagElement('button','Delete',['btn','btn-danger']);
    li.classList.add("list-group-item");
    li.classList.add("d-flex");
    li.classList.add("justify-content-between");
    li.classList.add("align-items-start");
    let firstDiv = li.appendChild(document.createElement('div'));
    firstDiv.classList.add('ms-2');
    firstDiv.classList.add('me-auto');
    firstDiv.textContent = name;
    li.appendChild(button);
    button.addEventListener('click',function(){
        console.log(this.parentElement.remove());
    });
    return li;
}

function createTagElement(name,content,classes)
{
    let tag = document.createElement(name);
    if (classes.length > 0) {
        classes.forEach((item) => {
            tag.classList.add(item);
        });
    } 
    tag.textContent = content;
    return tag;
    
}


var form = document.getElementById('myForm');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('form submitted');
    var inputValue = document.getElementById('addInput').value;
    ul.appendChild(createElement(inputValue));

});
