const url = "http://localhost:3000/";
let form = document.getElementById("form");
form.addEventListener('submit',function(event){
    event.preventDefault();
    let user = {
     bookName : document.getElementById("name").value,
     author : document.getElementById("author").value,
     bookDescription : document.getElementById("desc").value,
     price : document.getElementById("price").value,
     category : document.getElementById("category").value,
     dateControl : document.getElementById("added"),
    }
    let response = fetch(`${url}book-list`,{
        method : 'POST',
        headers : {'Content-Type' : 'application/json;charset=utf-8'},
    body: JSON.stringify(user)
    });
});