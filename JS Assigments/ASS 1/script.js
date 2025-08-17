
let productName = document.getElementById("proName");
let productPrice = document.getElementById("proPrice");
let productCategory = document.getElementById("proCategory");
let productDescription = document.getElementById("proDesc");
let addButton = document.getElementById("btn");
let tbody = document.getElementById("tbody");
let proSearch = document.getElementById("proSearch");

let productCon = [];


if (localStorage.getItem("product") != null) {
  productCon = JSON.parse(localStorage.getItem("product"));
  displayProduct();
}


function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}

function saveToLocalStorage() {
  localStorage.setItem("product", JSON.stringify(productCon));
}

function displayProduct(list = productCon) {
  tbody.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].description}</td>
        <td>
          <button class="btn delete" onclick="deleteProduct(${i})">Delete</button>
          <button class="btn update" onclick="updateProduct(${i})">Update</button>
        </td>
      </tr>
    `;
  }
}

function addProduct() {
  let pro = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDescription.value,
  };
  productCon.push(pro);
  saveToLocalStorage();
  displayProduct();
  clearForm();
}

function updateProduct(index) {
  productName.value = productCon[index].name;
  productPrice.value = productCon[index].price;
  productCategory.value = productCon[index].category;
  productDescription.value = productCon[index].description;

  addButton.innerHTML = "Update Product";
  addButton.onclick = function () {
    productCon[index].name = productName.value;
    productCon[index].price = productPrice.value;
    productCon[index].category = productCategory.value;
    productCon[index].description = productDescription.value;

    saveToLocalStorage();
    displayProduct();
    clearForm();

    addButton.innerHTML = "Add Product";
    addButton.onclick = addProduct;
  };
}

function deleteProduct(index) {
  productCon.splice(index, 1);
  saveToLocalStorage();
  displayProduct();
}

function searchProduct() {
  let searchValue = proSearch.value.toLowerCase();
  let filteredProducts = productCon.filter((pro) =>
    pro.name.toLowerCase().includes(searchValue)
  );
  displayProduct(filteredProducts);
}

addButton.onclick = addProduct;
proSearch.onkeyup = searchProduct;
