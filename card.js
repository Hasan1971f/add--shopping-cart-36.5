// const addProduct=()=>{
//     const productField = document.getElementById('product-name')
//     const quantitytField = document.getElementById('product-quantity')

//     const product = productField.value
//     const quantity = quantitytField.value

//     productField.value= ""
//     quantitytField.value= ""
    
    
//     console.log(product, quantity)
//     displayProduct(product, quantity ) 
// }

// const displayProduct = (product, quantity)=>{
//     const ul = document.getElementById("product-container")
//     const li = document.createElement('li')
//     li.innerHTML= `${product}: ${quantity}`
//     ul.appendChild(li)

// }


const addProduct=()=>{
    const productField = document.getElementById("product-name")
    const quantitytField = document.getElementById("product-quantity")

    const product1 = productField.value
    const quantity1 = quantitytField.value
    
    productField.value= ""
    quantitytField.value= ""



    console.log(product1, quantity1)
    displayProduct(product1, quantity1)
 }

 const displayProduct=(product1 , quantity1 )=>{
  const ul = document.getElementById("product-container")
  const li = document.createElement("li")
  li.innerHTML= `${product1} : ${quantity1}`
  ul.appendChild(li)
 }
