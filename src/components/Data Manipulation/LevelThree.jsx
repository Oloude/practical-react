const products = [
  {
    id: 1,
    name: "Laptop",
    category: "electronics",
    price: 1200,
    stock: 5,
  },
  {
    id: 2,
    name: "Phone",
    category: "electronics",
    price: 800,
    stock: 10,
  },
  {
    id: 3,
    name: "Headphones",
    category: "electronics",
    price: 150,
    stock: 20,
  },
  {
    id: 4,
    name: "Desk",
    category: "furniture",
    price: 400,
    stock: 3,
  },
  {
    id: 5,
    name: "Chair",
    category: "furniture",
    price: 250,
    stock: 7,
  },
  {
    id: 6,
    name: "Notebook",
    category: "stationery",
    price: 10,
    stock: 50,
  },
  {
    id: 7,
    name: "Pen",
    category: "stationery",
    price: 5,
    stock: 100,
  },
];

function LevelThree() {
//   getElectronics();
// getProductUnder300()
// getLowStockProduct()
// getTotalStockValue()
// getMostExpensiveProduct()
// getCheapestProduct()
// getTotalStockQuantity()
// getTotalValueElectronics()
// groupProductByCategory()
getTotalStockByCategory()
  return <div>LevelThree</div>;
}

function getElectronics() {
  const allElectronics = products.filter(
    (product) => product.category === "electronics",
  );
  console.log(allElectronics);
}

function getProductUnder300(){
    const productUnder300 = products.filter(product => product.price < 300)
    console.log(productUnder300)
}

function getLowStockProduct(){
    const lowStock = products.filter(product => product.stock < 10)
    console.log(lowStock)
}

function getTotalStockValue(){
    const totalStockValue = products.reduce((total, product) => total + (product.price * product.stock) ,0)
    console.log(totalStockValue)
}

function getMostExpensiveProduct(){
    const mostExpensiveProduct = products[0]

    for(let i = 1; i<products.length; i++){
     if(mostExpensiveProduct.price < products[i].price) mostExpensiveProduct= products[i]
    }

   console.log(mostExpensiveProduct.name) 
}

function getCheapestProduct(){
    let cheapestProduct = products[0]

    for(let i = 1; i<products.length; i++){
     if(cheapestProduct.price > products[i].price) cheapestProduct= products[i]
    }
console.log(cheapestProduct.name)
}

function getTotalStockQuantity(){
    const totalStockQuanity = products.reduce((total, product) => total + product.stock ,0)
    console.log(totalStockQuanity)
}

function getTotalValueElectronics(){
    const totalElectronicsValue = products.filter(
    (product) => product.category === "electronics",
  ).reduce((total, product) => total + (product.price * product.stock ),0)
  console.log(totalElectronicsValue)
}

function groupProductByCategory(){
    // const groupedProducts = products.reduce((group, product, currentI, products) => {
    //     let arr = 
    //     group[product.category]  = group[product.category] ? [...group[product.category],products[currentI].category === product.category && product ] : [products[currentI].category === product.category && product ]
    //     return group
    // },{})

     const groupedProducts = products.reduce((group, product) => {
        if(!group[product.category]){
          group[product.category] = []
        }
        group[product.category].push(product.name)
        return group
    },{})
    
    console.log(groupedProducts)
}

function getTotalStockByCategory(){
    // const totalStockByCategory = products.reduce((totalStock, product, cI, products)=>{
    //     totalStock[product.category] = (totalStock[product.category] || 0) + products[cI].category === product.category || product.price * product.stock 
    //     return totalStock
    // } , {})

    const totalStockByCategory = products.reduce((group, product) => {
      group[product.category] = (group[product.category] || 0) + product.price * product.stock
      return group
    },{})

    console.log(totalStockByCategory)
}
export default LevelThree;
