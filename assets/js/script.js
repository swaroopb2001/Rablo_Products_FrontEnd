var productElement = document.getElementById('products')

function initilize(){
    fetch("https://rabloproductsapiserver.up.railway.app/products",{method:'GET'})
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
                                        <p class="card-text">Rating : ${resEle[i].rating["$numberDecimal"]}</p>
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



