// ফাংশন: প্রোডাক্ট লোকাল স্টোরেজে সংরক্ষণ করা
const saveProductToLocalStorage = (product, quantity) => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || {};
    storedProducts[product] = quantity;
    localStorage.setItem("products", JSON.stringify(storedProducts));
};

// ফাংশন: লোকাল স্টোরেজ থেকে প্রোডাক্টগুলো লোড করা
const loadProductsFromLocalStorage = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || {};
    for (const product in storedProducts) {
        displayProduct(product, storedProducts[product]);
    }
};

// ফাংশন: নতুন প্রোডাক্ট যোগ করা
const addProduct = () => {
    const productField = document.getElementById("product-name");
    const quantityField = document.getElementById("product-quantity");

    const productName = productField.value;
    const quantity = quantityField.value;

    // ইনপুট ফিল্ড খালি করে দেওয়া
    productField.value = "";
    quantityField.value = "";

    // কনসোল লগ এবং লোকাল স্টোরেজে সংরক্ষণ করা
    console.log(productName, quantity);
    displayProduct(productName, quantity);
    saveProductToLocalStorage(productName, quantity);
};

// ফাংশন: প্রোডাক্ট ডাইনামিক্যালি তালিকায় যোগ করা
const displayProduct = (product, quantity) => {
    const ul = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerHTML = `${product} : ${quantity}`;
    ul.appendChild(li);
};

// পেজ রিফ্রেশের পর লোকাল স্টোরেজ থেকে প্রোডাক্টগুলো লোড করা
window.onload = loadProductsFromLocalStorage;
