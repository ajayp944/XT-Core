

var ProductList = [];



class Product {

    constructor(result) {
        this.result = result;
    }

    getData() {
        async function loadJson(url) {
            return await fetch(url)
                .then(response => {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        throw new HttpError(response);
                    }
                })
        }
    }


    demoGithubUser() {

        return loadJson(`http://127.0.0.1:5500/shopping/db.json`)
            .then(result => {
                this.result = result;
                document.getElementById('total_itms').innerHTML = ProductList.list.length;
                document.getElementById('total_itms').innerHTML += ProductList.list.length > 1 ? ' items' : ' item';

                result.list.forEach(function (r) {
                    displayRecord(r);
                });
            })
            .catch(err => {
                if (err instanceof HttpError && err.response.status == 404) {
                    console.log("No record found.");
                } else {
                    throw err;
                }
            });
    }
}

let product = new Product();
// product.demoGithubUser();






class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.response = response;
    }
}

async function loadJson(url) {
    return await fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}

function demoGithubUser() {

    return loadJson(`http://127.0.0.1:5500/shopping/db.json`)
        .then(result => {
            ProductList = result;
            document.getElementById('total_itms').innerHTML = ProductList.list.length;
            document.getElementById('total_itms').innerHTML += ProductList.list.length > 1 ? ' items' : ' item';

            result.list.forEach(function (r) {
                displayRecord(r);
            });
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("No record found.");
            } else {
                throw err;
            }
        });
}

function displayRecord(result) {
    var e1 = `
    <div class="box">
                <div class="col-3 col-sm-6">
                    <img src="${result.img}" class="img" alt="Black tshirt">
                </div>
                <div class="col-6">
                    <h5>${result.title}</h5>
                    <p>Style #: ${result.style}</p>
                    <p role="contentinfo" >Color: ${result.color}</p>
                </div>
                <div class="desktop-view">
                    <div class="col-1">
                        <p>${result.size}</p>
                    </div>
                    <div class="col-1">
                        <input type="text" name="qty" value="${result.qty}">
                    </div>
                    <div class="col-1">
                        <p>$${result.price}</p>
                    </div>
                </div>
                <div class="mobile-view">
                    <div class="col-sm-12">
                        <p>Size: ${result.size}</p>
                    </div>
                    <div class="col-sm-12">
                        <p>QTY: <input type="text" name="qty" value="${result.qty}"></p>
                    </div>
                    <div class="col-sm-12">
                        <p><strong>$${result.price}</strong></p>
                    </div>
                </div>
                <div class="col-6 col-sm-12 action-section">
                    <div onclick="openModal(${result.id});" tabindex="0" role="button" aria-pressed="false">Edit</div>
                    <div  tabindex="0" role="button" aria-pressed="false">
                        <span aria-hidden=true>&times;</span> Remove
                    </div>
                    <div tabindex="0" role="button" aria-pressed="false">Save For Later</div>
                </div>
            </div>`;
    document.getElementById('product-list').innerHTML += e1;
}

demoGithubUser();




// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openModal(id) {
    var item = ProductList.list.find(item => item.id === id);
    document.getElementById('modal__title').innerHTML = item.title;
    document.getElementById('modal__price').innerHTML = item.price;
    document.getElementById('modal__image').innerHTML = `<img src='${item.img}' alt="${item.title} image" />`;

    modal.style.display = "block";
}