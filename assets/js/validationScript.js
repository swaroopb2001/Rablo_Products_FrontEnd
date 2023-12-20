var addbtn = document.getElementById('addbtn');

var nameField = document.getElementById('name');
var price = document.getElementById('price');
var featured = document.getElementById('featured');
var rating = document.getElementById('rating');
var company = document.getElementById('company');

addbtn.addEventListener('click',(e)=>{
    ValidationForm();
})

function ValidationForm(){
    if(nameField.value == '' || price.value == '' || featured.value == '' || rating.value == '' || company.value == ''){
        window.alert("Fields Cannot be empty");
        return;
    }
    if(isNaN(price.value) || isNaN(rating.value)){
        window.alert("Price or rating should be in number");
        return;
    }
    var res = Object();
    res["prod_id"]=Math.floor(1000000 + Math.random() * 900000);
    res.name=nameField.value;
    res.price=price.value;
    if(featured.value.toUpperCase()=="YES"){
        res.featured=true;
    }
    else{
        res.featured=false;
    }
    res.rating=rating.value;
    res.company=company.value;
    var objDate = new Date()
    res.createdAt=`${objDate.getFullYear()}/${objDate.getMonth()+1}/${objDate.getDate()}`;
    addProduct(res);
}

function addProduct(res){
    fetch("https://rablo.unistart.online/products/create-product",{method:"POST",headers: {'Content-Type': 'application/json'},body: JSON.stringify(res)})
    .then(result=>result.json())
    .then((data)=>{
        displayToast("Successfully Inserted go back to products page");
        document.getElementById("addProductForm").reset();
    })
    .catch((err)=>{
        console.log("Error in insertion");
        displayToast("Error in insertion");
    })
}

function displayToast(message){
    alert(message);
}