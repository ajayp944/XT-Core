/** 
 * @descritpion Main js file product list
 * @author Ajay Pratap Singh <ajasingh4@spaient.com>
 */

class Product {

    /**
     * @description constructor function
     * @param {*} ProductList  []
     */

    constructor(ProductList = []) {
        this.ProductList = ProductList;
        this.productUrl = 'http://127.0.0.1:5500/shopping/db.json';
    }

    /**
     * @description fetch product list from server
     * @param {*} url  string
     */

    async loadJson(url) {
        return await fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw new HttpError(response);
                }
            })
    }


    /**
     * @description init function
     */

    getProductList() {
        return this.loadJson(this.productUrl)
            .then(result => {
                this.ProductList = result;
                document.getElementById('total_itms').innerHTML = this.ProductList.list.length;
                document.getElementById('total_itms').innerHTML += this.ProductList.list.length > 1 ? ' items' : ' item';

                console.log(this.productUrl);


                this.ProductList.list.forEach(function (r) {
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

    openModal(id) {
        var item = this.ProductList.list.find(item => item.id === id);
        document.getElementById('modal__title').innerHTML = item.title;
        document.getElementById('modal__price').innerHTML = item.price;
        document.getElementById('modal__image').innerHTML = `<img src='${item.img}' alt="${item.title} image" />`;

        modal.style.display = "block";
    }
}

let product = new Product();

product.getProductList();




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
                    <div onclick="product.openModal(${result.id});" tabindex="0" role="button" aria-pressed="false">Edit</div>
                    <div  tabindex="0" role="button" aria-pressed="false">
                        <span aria-hidden=true>&times;</span> Remove
                    </div>
                    <div tabindex="0" role="button" aria-pressed="false">Save For Later</div>
                </div>
            </div>`;
    document.getElementById('product-list').innerHTML += e1;
}

/**
 * @description HttpError Hadler class
 */


class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.response = response;
    }
}





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
