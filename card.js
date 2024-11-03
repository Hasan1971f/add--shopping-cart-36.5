const addProduct=()=>{
    const productField = document.getElementById('product-name')
    const quantitytField = document.getElementById('product-quantity')

    const product = productField.value
    const quantity = quantitytField.value

    productField.value= ""
    quantitytField.value= ""
    
    
    console.log(product, quantity)
    displayProduct(product, quantity )
    
    saveProductToLocalStorage(product, quantity )
}

const displayProduct = (product, quantity)=>{
    const ul = document.getElementById("product-container")
    const li = document.createElement('li')
    li.innerHTML= `${product}: ${quantity}`
    ul.appendChild(li)

}

const getStoredShoppingCart=()=>{
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    
    if(storedCart){
       cart = JSON.parse(storedCart)
    }
    return cart
}

const saveProductToLocalStorage =(product, quantity)=>{
  const cart = getStoredShoppingCart()
  cart [product] = quantity
  const cartStrinfy = JSON.stringify(cart)
  localStorage.setItem('cart', cartStrinfy)
}

const displayProductFromLocalStorage = ()=>{
    const saveCart =  getStoredShoppingCart()
    console.log(saveCart)
    for(const product in saveCart){
        const quantity = saveCart[product]
        
        console.log(product, quantity)
        displayProduct (product, quantity)
    }
}
displayProductFromLocalStorage ()