const orders = [
  {
    id: 101,
    customer: "John",
    date: "2026-09-01",
    status: "delivered",
    items: [
      { product: "Laptop", category: "Electronics", price: 1200, quantity: 1 },
      { product: "Mouse", category: "Accessories", price: 40, quantity: 2 },
    ],
  },
  {
    id: 102,
    customer: "Sarah",
    date: "2026-09-02",
    status: "pending",
    items: [
      { product: "Phone", category: "Electronics", price: 800, quantity: 1 },
      { product: "Case", category: "Accessories", price: 30, quantity: 1 },
    ],
  },
  {
    id: 103,
    customer: "Mike",
    date: "2026-09-03",
    status: "delivered",
    items: [
      { product: "Monitor", category: "Electronics", price: 400, quantity: 2 },
      { product: "Keyboard", category: "Accessories", price: 80, quantity: 1 },
    ],
  },
  {
    id: 104,
    customer: "John",
    date: "2026-09-05",
    status: "cancelled",
    items: [
      { product: "Tablet", category: "Electronics", price: 600, quantity: 1 },
    ],
  },
  {
    id: 105,
    customer: "David",
    date: "2026-09-06",
    status: "delivered",
    items: [
      { product: "Phone", category: "Electronics", price: 800, quantity: 2 },
      {
        product: "Headphones",
        category: "Accessories",
        price: 150,
        quantity: 1,
      },
    ],
  },
  {
    id: 106,
    customer: "Sarah",
    date: "2026-09-08",
    status: "delivered",
    items: [
      { product: "Laptop", category: "Electronics", price: 1200, quantity: 1 },
    ],
  },
];

export default function LevelTwo() {
  // getTotalValueOfEveryOrder()
  // getTotalRevenueFromDeliveredOrder()
  // getCustomerWithMostSpent()
  // findMostPurchasedProduct();
  // calculateTotalQuantityForProduct()
  // getRevenueByEachProduct()
  // getRevenueByCategory()
  // findCustomerWhoPlacedMostOrders()
  // getCustomersWHoPlacedMoreThanOneOrder()
  
  // getMostExpensiveItemPurchased()
  // getOrderWithHighestValue()
  // getAverageValueForDeliveredOrders()
  // createDashboardObject()
  getProductPurchasedByMoreThanOneCustomer()

  return <div>LevelTwo</div>;
}

// Calculate the total value of every order.

// Return:

// [
//   {
//     id: 101,
//     customer: "John",
//     total: ...
//   },
//   ...
// ]
function getTotalValueOfEveryOrder() {
  const totalValueOfEveryOrder = orders.map((order) => {
    return {
      id: order.id,
      customer: order.customer,
      total: order.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    };
  });

  console.log(totalValueOfEveryOrder);
}

//Calculate the total revenue from delivered orders only.
function getTotalRevenueFromDeliveredOrder() {
  const totalRevenueFromDeliveredOrder = orders.reduce(
    (totalRevenue, order) =>
      totalRevenue +
      (order.status === "delivered"
        ? order.items.reduce(
            (total, item) => total + item.quantity * item.price,
            0,
          )
        : 0),
    0,
  );

  return totalRevenueFromDeliveredOrder;
}

//Find the customer who has spent the most.
function getCustomerWithMostSpent() {
  const customerSpent = orders.reduce((customer, order) => {
    customer[order.customer] =
      (customer[order.customer] || 0) +
      (order.status === "delivered"
        ? order.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
          )
        : 0);
    return customer;
  }, {});

  let highestCustomer = "";
  let spent = 0;

  for (let customer in customerSpent) {
    if (spent < customerSpent[customer]) {
      spent = customerSpent[customer];
      highestCustomer = customer;
    }
  }

  return highestCustomer
}

// Calculate how much each customer has spent.

// {
//   John: ...,
//   Sarah: ...,
//   Mike: ...,
//   David: ...
// }
function calculateEachCustomerSpent() {
  const customerSpent = orders.reduce((customer, order) => {
    customer[order.customer] =
      (customer[order.customer] || 0) +
      (order.status === "delivered"
        ? order.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
          )
        : 0);
    return customer;
  }, {});
}

//Find the most purchased product based on quantity, not number of orders.
function findMostPurchasedProduct() {
  const items = orders
    .filter((order) => order.status === "delivered")
    .flatMap((order) => order.items);
  const mostPurchasedProduct = items.reduce((products, item) => {
    products[item.product] = (products[item.product] || 0) + item.quantity;
    return products;
  }, {});

  return mostPurchasedProduct;
}

// Calculate the total quantity sold for every product.

// {
//   Laptop: 2,
//   Mouse: 2,
//   Phone: 3,
//   ...
// }

function calculateTotalQuantityForProduct() {
  const items = orders
    .filter((order) => order.status === "delivered")
    .flatMap((order) => order.items);
  const mostPurchasedProduct = items.reduce((products, item) => {
    products[item.product] = (products[item.product] || 0) + item.quantity;
    return products;
  }, {});

  console.log(mostPurchasedProduct);
}

// 22.Calculate revenue generated by each product.
function getRevenueByEachProduct(){
const products = orders.filter(order => order.status === 'delivered').flatMap(order => order.items)
const revenueByEachProduct = products.reduce((revenue, product) => {
  revenue[product.product] = (revenue[product.product] || 0) + (product.price * product.quantity)
  return revenue
}, {})

return revenueByEachProduct
}

function getRevenueByCategory(){
const products = orders.filter(order => order.status === 'delivered').flatMap(order => order.items)
const revenueByCategory = products.reduce((revenue, product) => {
  revenue[product.category] = (revenue[product.category] || 0) + (product.quantity * product.price)
  return revenue
}, {})
  console.log(revenueByCategory)
}

// 24.Find the customer who placed the most orders.
function findCustomerWhoPlacedMostOrders(){
const customerOrderCount = orders.reduce((customer, order)=> {
  customer[order.customer] = (customer[order.customer] || 0) + 1
  return customer
},{})

let customerMostOrder = ''
let order = 0

for(let customer in customerOrderCount){
  if(customerOrderCount[customer] > order){
    customerMostOrder = customer
    order = customerOrderCount[customer]
  }
}


console.log(customerMostOrder)
}

// 25.Find customers who have placed more than one order.
function getCustomersWHoPlacedMoreThanOneOrder(){
const customerOrderCount = orders.reduce((customer, order)=> {
  customer[order.customer] = (customer[order.customer] || 0) + 1
  return customer
},{})

let customerWIthMoreThanOneOrder = []

for(let customer in customerOrderCount){
  if(customerOrderCount[customer] > 1){
    customerWIthMoreThanOneOrder.push(customer)
  }
}

console.log(customerWIthMoreThanOneOrder)
}

// 26.Get all products that have been purchased by more than one customer.
function getProductPurchasedByMoreThanOneCustomer(){
let productPurchasedMoreThanOneCustomer = orders.reduce((products, order, idx, orders) => {
  let searchOrders = orders.filter(o => o.id !== order.id)
  let presentProducts = order.items.map(item => item.product)

  for(let i = 0; i< presentProducts.length; i++){
   let isPresent =  searchOrders.some(order => order.items.find(item => item.product === presentProducts[i]))
   if(isPresent && !products.includes(presentProducts[i])) products.push(presentProducts[i])
  }
  return products
},[])

console.log(productPurchasedMoreThanOneCustomer)
}

// 27.Find the most expensive individual item purchased.Not the most expensive order.
function getMostExpensiveItemPurchased(){
const products = orders.filter(order => order.status === 'delivered').flatMap(order => order.items)

let mostExpensiveProduct = products.reduce((expensive, product) => {
 expensive =  ((product.price * product.quantity) > (expensive.price * expensive.quantity ) )? product : expensive
  return expensive
}, products[0])

console.log(mostExpensiveProduct.product)
}

// 28.Get the order with the highest total value.
function getOrderWithHighestValue(){
let orderWithHigestValue = orders.reduce((highest, order) => {
  let orderTotal = order.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  let highestTotal = highest.items.reduce((total, item) => total + (item.price * item.quantity), 0)

  highest = orderTotal > highestTotal ? order : highest
  return highest
}, orders[0])

console.log(orderWithHigestValue)
}

//29.Calculate the average order value for delivered orders.
function getAverageValueForDeliveredOrders(){
  const products = orders.filter(order => order.status === 'delivered').flatMap(order => order.items)

  const totalValue = products.reduce((total, product) => total + (product.price * product.quantity),0)
  const averageValue = totalValue/ products.length
  return averageValue
}

// 30.Create this dashboard object:
// {
//   totalOrders: 6,
//   deliveredOrders: ...,
//   pendingOrders: ...,
//   cancelledOrders: ...,
//   totalRevenue: ...,
//   averageOrderValue: ...,
//   topCustomer: ...,
//   topProduct: ...
// }

function createDashboardObject(){
  let dashboard = {
    totalOrders : orders.length,
    deliveredOrders : orders.filter(order => order.status === 'delivered').length,
    pendingOrders : orders.filter(order => order.status === 'pending').length,
    cancelledOrders : orders.filter(order => order.status === 'cancelled').length,
    totalRevenue : getTotalRevenueFromDeliveredOrder(),
     averageOrderValue : getAverageValueForDeliveredOrders(),
     topCustomer: getCustomerWithMostSpent(),
     topProduct : findMostPurchasedProduct(),
  }

  console.log(dashboard)
}












// Yes. I reviewed **the entire file**, not just the last few functions. Overall, you're doing well: your main challenge now is less about knowing `map/filter/reduce` and more about **choosing the right data shape and making sure the calculation matches the exact requirement**.

// Your file contains the order dataset and 14 exercises, including aggregation by customer/product/category, finding maximums, averages, and building a dashboard. 

// ## Overall assessment

// I'd put your current data-manipulation level around **solid intermediate**.

// You already understand:

// * `map()` for transforming data
// * `filter()` for selecting data
// * `flatMap()` for flattening nested arrays
// * `reduce()` for aggregation
// * accumulating into objects
// * accumulating into arrays
// * nested `reduce()`
// * using `some()` / `find()`
// * comparing values to find maximums

// The next thing you need to develop is **problem decomposition**:

// > "What exactly am I calculating, and what should my accumulator represent?"

// That's the biggest theme I see throughout your solutions.

// ---

// # 1. `getTotalValueOfEveryOrder()` — ✅ Correct

// Your approach:

// ```js
// const totalValueOfEveryOrder = orders.map((order) => {
//   return {
//     id: order.id,
//     customer: order.customer,
//     total: order.items.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     ),
//   };
// });
// ```

// This is correct. 

// ### Why it's good

// You correctly recognized that there are **two levels of data**:

// ```text
// orders
//    ↓
// each order
//    ↓
// items
//    ↓
// price × quantity
// ```

// So:

// * outer `map()` → one result for each order
// * inner `reduce()` → calculate that order's total

// That's exactly the right mental model.

// ### Expected result

// ```js
// [
//   { id: 101, customer: "John", total: 1280 },
//   { id: 102, customer: "Sarah", total: 830 },
//   { id: 103, customer: "Mike", total: 880 },
//   { id: 104, customer: "John", total: 600 },
//   { id: 105, customer: "David", total: 1750 },
//   { id: 106, customer: "Sarah", total: 1200 }
// ]
// ```

// **Rating: 10/10**

// ---

// # 2. `getTotalRevenueFromDeliveredOrder()` — ✅ Correct

// Your approach is:

// ```js
// orders.reduce(
//   (totalRevenue, order) =>
//     totalRevenue +
//     (order.status === "delivered"
//       ? order.items.reduce(
//           (total, item) => total + item.quantity * item.price,
//           0
//         )
//       : 0),
//   0
// );
// ```



// This is correct.

// You're essentially saying:

// ```text
// for every order:
//     if delivered:
//         calculate order total
//         add it to revenue
//     otherwise:
//         add 0
// ```

// Delivered orders:

// * 101 → 1280
// * 103 → 880
// * 105 → 1750
// * 106 → 1200

// Total:

// ```text
// 1280 + 880 + 1750 + 1200 = 5110
// ```

// ### One improvement

// For readability, I would personally do:

// ```js
// const deliveredOrders = orders.filter(
//   order => order.status === "delivered"
// );

// const totalRevenue = deliveredOrders.reduce(...)
// ```

// Your current version isn't wrong. It's just slightly harder to read because you're doing the filtering inside the `reduce()`.

// **Rating: 9/10**

// ---

// # 3. `getCustomerWithMostSpent()` — ✅ Correct, but more complicated than necessary

// Your first reduction creates:

// ```js
// {
//   John: 1280,
//   Sarah: 1200,
//   Mike: 880,
//   David: 1750
// }
// ```



// Then you loop through that object to find the largest value.

// That's logically correct.

// David spent:

// ```text
// 1750
// ```

// so:

// ```js
// "David"
// ```

// is returned.

// ### What's good

// You understood that you need to go through **two stages**:

// ```text
// orders
//  ↓
// total spent per customer
//  ↓
// customer with highest spending
// ```

// That's good data manipulation thinking.

// ### The thing I'd challenge you on

// You could solve the second stage with another `reduce()` instead of:

// ```js
// let highestCustomer = "";
// let spent = 0;

// for (let customer in customerSpent) {
//    ...
// }
// ```

// Since you've been specifically practicing `reduce()`, this is a good place to push yourself.

// For example, conceptually:

// ```js
// Object.entries(customerSpent)
// ```

// turns:

// ```js
// {
//   John: 1280,
//   Sarah: 1200,
//   Mike: 880,
//   David: 1750
// }
// ```

// into:

// ```js
// [
//   ["John", 1280],
//   ["Sarah", 1200],
//   ["Mike", 880],
//   ["David", 1750]
// ]
// ```

// Then you can reduce that.

// **Rating: 9/10**

// ---

// # 4. `calculateEachCustomerSpent()` — ⚠️ Logic is correct, but you forgot to return/log

// Your calculation itself is correct:

// ```js
// const customerSpent = orders.reduce((customer, order) => {
//   customer[order.customer] =
//     (customer[order.customer] || 0) +
//     (...);

//   return customer;
// }, {});
// ```



// But the function ends after creating `customerSpent`.

// You don't have:

// ```js
// return customerSpent;
// ```

// or:

// ```js
// console.log(customerSpent);
// ```

// So calling:

// ```js
// calculateEachCustomerSpent();
// ```

// returns:

// ```js
// undefined
// ```

// ### Fix

// Just:

// ```js
// return customerSpent;
// ```

// ### Expected result

// ```js
// {
//   John: 1280,
//   Sarah: 1200,
//   Mike: 880,
//   David: 1750
// }
// ```

// **Rating: 8/10**

// The actual aggregation logic is good. The mistake is just forgetting to expose the result.

// ---

// # 5. `findMostPurchasedProduct()` — ⚠️ Function name and return value don't completely match

// Your code:

// ```js
// const items = orders
//   .filter(order => order.status === "delivered")
//   .flatMap(order => order.items);

// const mostPurchasedProduct = items.reduce((products, item) => {
//   products[item.product] =
//     (products[item.product] || 0) + item.quantity;

//   return products;
// }, {});
// ```



// The calculation itself produces:

// ```js
// {
//   Laptop: 2,
//   Mouse: 2,
//   Monitor: 2,
//   Keyboard: 1,
//   Phone: 2,
//   Headphones: 1
// }
// ```

// But your function is called:

// ```js
// findMostPurchasedProduct()
// ```

// That sounds like it should return:

// ```js
// "Phone"
// ```

// or whichever product has the highest quantity.

// Instead, you return the **entire quantity object**.

// So your aggregation is correct, but the final step is missing.

// ### Think of it as two problems

// **Problem A:**

// > How many of each product were purchased?

// You've solved this.

// **Problem B:**

// > Which product has the highest quantity?

// You haven't done this yet.

// This distinction is important for your data-manipulation skills.

// **Rating: 8/10**

// ---

// # 6. `calculateTotalQuantityForProduct()` — ✅ Correct

// This one is good.

// ```js
// const items = orders
//   .filter(order => order.status === "delivered")
//   .flatMap(order => order.items);

// const mostPurchasedProduct = items.reduce((products, item) => {
//   products[item.product] =
//     (products[item.product] || 0) + item.quantity;

//   return products;
// }, {});
// ```



// Despite the variable name `mostPurchasedProduct`, what you've actually calculated is:

// > total quantity sold for every product

// That's exactly what the question asks.

// I'd rename:

// ```js
// mostPurchasedProduct
// ```

// to:

// ```js
// totalQuantityByProduct
// ```

// because it makes your code much clearer.

// **Rating: 10/10**

// ---

// # 7. `getRevenueByEachProduct()` — ✅ Correct

// This is one of your strongest solutions.

// ```js
// const products = orders
//   .filter(order => order.status === "delivered")
//   .flatMap(order => order.items);

// const revenueByEachProduct = products.reduce((revenue, product) => {
//   revenue[product.product] =
//     (revenue[product.product] || 0) +
//     product.price * product.quantity;

//   return revenue;
// }, {});
// ```



// The resulting object is:

// ```js
// {
//   Laptop: 2400,
//   Mouse: 80,
//   Monitor: 800,
//   Keyboard: 80,
//   Phone: 1600,
//   Headphones: 150
// }
// ```

// Excellent.

// You correctly understand:

// ```js
// revenue[product.product]
// ```

// as a dynamic object key.

// **Rating: 10/10**

// ---

// # 8. `getRevenueByCategory()` — ❌ You're missing a status filter

// Your code:

// ```js
// const products = orders
//   .filter(order => order.status === "delivered")
//   .flatMap(order => order.items);
// ```

// Actually, looking at your uploaded code, **you did include the delivered filter**, so the logic here is correct. 

// Your result should be:

// ```js
// {
//   Electronics: 4800,
//   Accessories: 310
// }
// ```

// Let's verify:

// ### Electronics

// ```text
// Laptop      1200
// Monitor      800
// Phone       1600
// Laptop      1200
//               ↓
//              4800
// ```

// ### Accessories

// ```text
// Mouse        80
// Keyboard     80
// Headphones  150
//              ↓
//             310
// ```

// So this one is **correct**.

// **Rating: 10/10**

// ---

// # 9. `findCustomerWhoPlacedMostOrders()` — ✅ Correct

// You create:

// ```js
// {
//   John: 2,
//   Sarah: 2,
//   Mike: 1,
//   David: 1
// }
// ```



// Then you find the largest.

// Because John appears first and has 2 orders, your function returns:

// ```js
// "John"
// ```

// ### Important detail

// Sarah also has 2 orders.

// So there is a **tie**.

// Your function doesn't return both customers. It returns the first customer that reaches the highest count.

// That's not necessarily wrong because the exercise says:

// > Find the customer who placed the most orders.

// But if the intended behavior is to handle ties, you'd need different logic.

// **Rating: 9/10**

// ---

// # 10. `getCustomersWHoPlacedMoreThanOneOrder()` — ✅ Correct

// You first create:

// ```js
// {
//   John: 2,
//   Sarah: 2,
//   Mike: 1,
//   David: 1
// }
// ```

// Then:

// ```js
// if (customerOrderCount[customer] > 1)
// ```

// gives:

// ```js
// ["John", "Sarah"]
// ```



// Correct.

// ### Minor naming issue

// You have:

// ```js
// customerWIthMoreThanOneOrder
// ```

// I'd use:

// ```js
// customersWithMoreThanOneOrder
// ```

// Also:

// ```js
// getCustomersWHo...
// ```

// should be:

// ```js
// getCustomersWho...
// ```

// These aren't logic problems, just naming/clean-code issues.

// **Rating: 10/10**

// ---

// # 11. `getProductPurchasedByMoreThanOneCustomer()` — ⚠️ Correct idea, but unnecessarily complicated

// This is probably the most interesting function in your file.

// You do:

// ```js
// let searchOrders = orders.filter(o => o.id !== order.id);
// let presentProducts = order.items.map(item => item.product);
// ```

// then:

// ```js
// searchOrders.some(...)
// ```

// and:

// ```js
// order.items.find(...)
// ```



// ### What you're trying to do

// For each order:

// > "Take its products and check whether those products appear in another order."

// That's a valid approach.

// ### Your result

// The products purchased by more than one customer are:

// ```js
// [
//   "Laptop",
//   "Mouse"? 
// ]
// ```

// But let's carefully distinguish **more than one customer** from **more than one order**.

// Laptop:

// * John
// * Sarah

// Actually Sarah bought Laptop in order 106, so Laptop qualifies.

// Phone:

// * Sarah
// * David

// So Phone qualifies.

// Therefore the important expected result is:

// ```js
// ["Laptop", "Phone"]
// ```

// Your algorithm checks **other orders**, not explicitly **other customers**.

// That distinction matters.

// For example, if John bought the same product in two different orders, your current algorithm could consider that product "purchased by more than one" even though only **one customer** bought it.

// Your current dataset happens not to expose that problem for every product, but the algorithm doesn't exactly match the requirement.

// ### Better mental model

// The question is:

// ```text
// product → customers
// ```

// not:

// ```text
// product → orders
// ```

// You want something like:

// ```js
// {
//   Laptop: ["John", "Sarah"],
//   Phone: ["Sarah", "David"],
//   Mouse: ["John"],
//   ...
// }
// ```

// Then find products whose customer list has length > 1.

// This is an excellent exercise for you because it teaches you to identify the **relationship you're actually trying to model**.

// **Rating: 7/10**

// Good problem-solving attempt, but the data relationship should be customer-based.

// ---

// # 12. `getMostExpensiveItemPurchased()` — ❌ Wrong comparison

// Your code:

// ```js
// expensive =
//   (product.price * product.quantity) >
//   (expensive.price * expensive.quantity)
//     ? product
//     : expensive;
// ```



// The question says:

// > Find the most expensive **individual item purchased**.

// That means you compare:

// ```js
// product.price
// ```

// not:

// ```js
// product.price * product.quantity
// ```

// ### Example

// Suppose:

// ```js
// {
//   product: "Monitor",
//   price: 400,
//   quantity: 2
// }
// ```

// and:

// ```js
// {
//   product: "Laptop",
//   price: 1200,
//   quantity: 1
// }
// ```

// The Monitor's total is:

// ```text
// 400 × 2 = 800
// ```

// but one Laptop costs:

// ```text
// 1200
// ```

// So the Laptop is the more expensive **individual item**.

// Your current comparison is actually finding something closer to:

// > Which product line has the highest total purchase value?

// That's a different question.

// ### Correct concept

// Compare:

// ```js
// product.price
// ```

// **Rating: 6/10**

// Your `reduce()` structure is good. The mistake is understanding exactly what value should be compared.

// ---

// # 13. `getOrderWithHighestValue()` — ✅ Correct

// This is good:

// ```js
// const orderTotal = order.items.reduce(
//   (total, item) => total + item.price * item.quantity,
//   0
// );

// const highestTotal = highest.items.reduce(
//   (total, item) => total + item.price * item.quantity,
//   0
// );

// highest = orderTotal > highestTotal ? order : highest;
// ```



// The highest order is:

// ```text
// Order 105
// ```

// with:

// ```text
// Phone       800 × 2 = 1600
// Headphones  150 × 1 = 150
//                          ----
//                          1750
// ```

// Correct.

// ### One thing to improve

// You're calculating the totals repeatedly.

// A more advanced approach would be to have a reusable function:

// ```js
// getOrderTotal(order)
// ```

// Then use it everywhere.

// That's not necessary yet, but it's the kind of refactoring you'll eventually want in production code.

// **Rating: 9/10**

// ---

// # 14. `getAverageValueForDeliveredOrders()` — ❌ This is the biggest logic error

// Your code:

// ```js
// const products = orders
//   .filter(order => order.status === "delivered")
//   .flatMap(order => order.items);

// const totalValue = products.reduce(
//   (total, product) => total + product.price * product.quantity,
//   0
// );

// const averageValue = totalValue / products.length;
// ```



// The problem is:

// ```js
// products.length
// ```

// is the number of **items**, not the number of **orders**.

// Delivered orders:

// ```text
// 101
// 103
// 105
// 106
// ```

// That's **4 orders**.

// But flattened products:

// ```text
// Laptop
// Mouse
// Monitor
// Keyboard
// Phone
// Headphones
// Laptop
// ```

// That's **7 item entries**.

// You're calculating:

// ```text
// 5110 / 7
// ```

// which is approximately:

// ```text
// 730
// ```

// But the question asks for the **average order value**.

// So you need:

// ```text
// total delivered revenue / number of delivered orders
// ```

// Therefore:

// ```text
// 5110 / 4 = 1277.5
// ```

// ### This is an important lesson

// Before writing code, ask:

// > "What is the denominator supposed to represent?"

// That's often where data-manipulation bugs happen.

// **Rating: 5/10**

// The total calculation is right. The denominator represents the wrong entity.

// ---

// # 15. `createDashboardObject()` — ⚠️ Mostly correct, but `topProduct` is wrong

// Your object:

// ```js
// let dashboard = {
//   totalOrders: orders.length,
//   deliveredOrders: orders.filter(
//     order => order.status === "delivered"
//   ).length,
//   pendingOrders: orders.filter(
//     order => order.status === "pending"
//   ).length,
//   cancelledOrders: orders.filter(
//     order => order.status === "cancelled"
//   ).length,
//   totalRevenue: getTotalRevenueFromDeliveredOrder(),
//   averageOrderValue: getAverageValueForDeliveredOrders(),
//   topCustomer: getCustomerWithMostSpent(),
//   topProduct: findMostPurchasedProduct(),
// };
// ```



// Everything except `topProduct` is conceptually okay.

// ### `totalOrders`

// ```js
// 6
// ```

// Correct.

// ### `deliveredOrders`

// ```js
// 4
// ```

// Correct.

// ### `pendingOrders`

// ```js
// 1
// ```

// Correct.

// ### `cancelledOrders`

// ```js
// 1
// ```

// Correct.

// ### `totalRevenue`

// ```js
// 5110
// ```

// Correct.

// ### `averageOrderValue`

// Your function currently gives the wrong result because of the issue above.

// It should be:

// ```js
// 1277.5
// ```

// ### `topCustomer`

// ```js
// "David"
// ```

// Correct.

// ### `topProduct`

// This is where the problem is.

// Your:

// ```js
// findMostPurchasedProduct()
// ```

// returns the entire object:

// ```js
// {
//   Laptop: 2,
//   Mouse: 2,
//   Monitor: 2,
//   Keyboard: 1,
//   Phone: 2,
//   Headphones: 1
// }
// ```

// But `topProduct` suggests you want:

// ```js
// " Laptop "
// ```

// or another single product.

// There's also a **tie** here:

// ```text
// Laptop 2
// Mouse 2
// Monitor 2
// Phone 2
// ```

// So you need to decide how your function handles ties.

// That is actually a good advanced question for you.

// **Rating: 7/10**

// ---

// # Your results summary

// | Function                                     | Review                                                               |
// | -------------------------------------------- | -------------------------------------------------------------------- |
// | `getTotalValueOfEveryOrder()`                | ✅ Correct                                                            |
// | `getTotalRevenueFromDeliveredOrder()`        | ✅ Correct                                                            |
// | `getCustomerWithMostSpent()`                 | ✅ Correct                                                            |
// | `calculateEachCustomerSpent()`               | ⚠️ Missing return                                                    |
// | `findMostPurchasedProduct()`                 | ⚠️ Aggregates but doesn't find the product                           |
// | `calculateTotalQuantityForProduct()`         | ✅ Correct                                                            |
// | `getRevenueByEachProduct()`                  | ✅ Correct                                                            |
// | `getRevenueByCategory()`                     | ✅ Correct                                                            |
// | `findCustomerWhoPlacedMostOrders()`          | ✅ Correct, tie not handled                                           |
// | `getCustomersWHoPlacedMoreThanOneOrder()`    | ✅ Correct                                                            |
// | `getProductPurchasedByMoreThanOneCustomer()` | ⚠️ Logic is more complicated and tracks orders rather than customers |
// | `getMostExpensiveItemPurchased()`            | ❌ Comparing total line value instead of individual price             |
// | `getOrderWithHighestValue()`                 | ✅ Correct                                                            |
// | `getAverageValueForDeliveredOrders()`        | ❌ Dividing by number of items instead of orders                      |
// | `createDashboardObject()`                    | ⚠️ Mostly correct; depends on previous functions                     |

// ---

// # The biggest pattern I see in your code

// You are actually **very comfortable with aggregation**.

// For example, this:

// ```js
// products[product.product] =
//   (products[product.product] || 0) +
//   product.quantity;
// ```

// is becoming natural for you. You've used the same pattern several times. 

// That's good.

// But you're sometimes stopping **one step too early**.

// You do:

// ```text
// raw data
//    ↓
// aggregate
//    ↓
// STOP
// ```

// when the question requires:

// ```text
// raw data
//    ↓
// aggregate
//    ↓
// compare/search aggregate
//    ↓
// final answer
// ```

// For example:

// ### `findMostPurchasedProduct`

// You successfully get:

// ```js
// {
//   Laptop: 2,
//   Mouse: 2,
//   Monitor: 2,
//   Phone: 2
// }
// ```

// But the actual question asks:

// ```text
// Which one?
// ```

// So you need another operation.

// ---

// # Another important pattern: identify the "unit"

// This is the biggest thing I'd want you to practice next.

// When you see:

// > average order value

// Think:

// ```text
// ORDER
// ```

// When you see:

// > total quantity for every product

// Think:

// ```text
// PRODUCT
// ```

// When you see:

// > customers who bought a product

// Think:

// ```text
// CUSTOMER
// ```

// When you see:

// > most expensive individual item

// Think:

// ```text
// ITEM PRICE
// ```

// When you see:

// > highest order value

// Think:

// ```text
// ORDER TOTAL
// ```

// Those distinctions determine **what you reduce over and what you divide by**.

// ---

// # Your `reduce()` level

// I'd specifically say you're now beyond basic:

// ```js
// numbers.reduce((total, number) => total + number, 0)
// ```

// You're comfortably using **nested data aggregation**, which is a significant step up.

// The next level for you should be:

// ### Level 1 — Aggregate

// ```text
// product → quantity
// ```

// ### Level 2 — Aggregate by another dimension

// ```text
// category → revenue
// customer → spending
// ```

// ### Level 3 — Aggregate then find

// ```text
// customer → spending
//           ↓
//        highest
// ```

// ### Level 4 — Build relationships

// ```text
// product → customers
// product → categories
// customer → products
// ```

// ### Level 5 — Multiple requirements

// ```text
// dashboard {
//    totalOrders,
//    revenue,
//    average,
//    topCustomer,
//    topProduct
// }
// ```

// You're currently moving from **Level 2 → Level 3/4**.

// That's exactly where I would keep practicing.

// ---

// ## One thing I would NOT do yet

// Don't immediately jump into huge datasets or complicated algorithms.

// Instead, take this **same `orders` dataset** and redo the 5 functions you got wrong/partially wrong:

// 1. `calculateEachCustomerSpent()`
// 2. `findMostPurchasedProduct()`
// 3. `getProductPurchasedByMoreThanOneCustomer()`
// 4. `getMostExpensiveItemPurchased()`
// 5. `getAverageValueForDeliveredOrders()`

// But **don't look for solutions**.

// For each one, write down first:

// ```text
// What is my unit?
// What should my accumulator contain?
// What exactly should the final return value be?
// ```

// That exercise will improve your data manipulation much more than simply memorizing another `reduce()` pattern.

