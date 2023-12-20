var productElement = document.getElementById('products')


window.addEventListener('click',(e)=>{
    if(e.target.dataset.click == 'delete'){
        deleteProduct(e.target.dataset.id);
    }
});

function deleteProduct(id){
    var res = {
        prod_id:id
    }
    fetch("https://rablo.unistart.online/products",{method:"DELETE",headers: {'Content-Type': 'application/json'},body: JSON.stringify(res)})
    .then(result=>result.json())
    .then((data)=>{
        displayToast("Product Deleted Successfully");
        initilize();
    })
    .catch((err)=>{
        console.log("Error in insertion");
        displayToast("Error in insertion");
    })
}

function displayToast(message){
    alert(message);
}

function initilize(){
    productElement.innerHTML='';
    fetch("https://rablo.unistart.online/products",{method:'GET'})
    .then(result=>result.json())
    .then((data)=>{
        var resEle = data.data;
        for(let i=0;i<resEle.length;i++)
        {
            var divele = document.createElement('div');
            divele.innerHTML = `<div class="card float-start m-3" style="width: 18rem;" id=${resEle[i].prod_id}>
                                    <div class="card-body">
                                        <h5 class="card-title">${resEle[i].name}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${resEle[i].company}</h6>
                                        <p class="card-text">Price : ${"&#8377;"+resEle[i].price}</p>
                                        <p class="card-text">
                                            Rating : ${resEle[i].rating["$numberDecimal"]}
                                            <button type="button" class="btn btn-light deletebtn" data-click="delete" data-id=${resEle[i].prod_id}>
                                                <i class="fa-solid fa-trash" data-click="delete" data-id=${resEle[i].prod_id}></i>
                                            </button>
                                        </p>
                                    </div>
                                </div>`;
            productElement.append(divele);
        }
    })
    .catch((err)=>{
        var hele = document.createElement('h1');
        hele.innerHTML="Error in Fetch";
        hele.style.color="red";
        productElement.append(hele);
    })
}

initilize();



