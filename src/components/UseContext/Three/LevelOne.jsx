// Use createContext and useContext.
// Start with an empty cart.
// Add products without passing cart state through props.
// If a product is added twice, increase its quantity instead of creating a duplicate entry.
// Calculate the total from the cart items rather than storing a separate total state.
// Keep the cart state in CartProvider.

// const products = [
//   { id: 1, name: "Keyboard", price: 15000 },
//   { id: 2, name: "Mouse", price: 8000 },
//   { id: 3, name: "Headphones", price: 22000 },
// ];


// import { createContext, useContext, useState } from "react";

// // 1. Create CartContext
// const CartContext = createContext({
//     cart : [],
//     handleAddToCart : ()=> {},
// })

// function ProductList() {
//   // 2. Read the cart actions from Context
//   // 3. Display products and Add to Cart buttons
//   const {handleAddToCart} = useContext(CartContext)

//   function handleAddItem(name,id, price){
//     handleAddToCart(prev => {
//         let existing = prev.find(p => p.id === id)
//         let newItem = {}
//      if(existing === undefined){
//        newItem = {
//         id,
//         name,
//         price,
//         quantity : 1
//        }
//      }
//      else{
//         return prev.map(m => m.id === id ? {...m, quantity : m.quantity + 1}: m)
//      }

//      return [...prev, newItem]
//     })
//   }
//   return (
//     <div className="flex flex-col gap-4 col-span-2">
//         {
//             products.map(product => <div key={product.id} className="flex items-center justify-between gap-2">
//                 <div className="flex items-center gap-2">
//                     <h3 className="text-sm text-mauve-800">{product.name}</h3>
//                     <span className="text-xs text-mauve-700">{product.price}</span>
//                 </div>
//                 <button onClick={()=> handleAddItem(product.name, product.id, product.price)} className="bg-mauve-900 text-mauve-50 text-xs px-3 py-1 rounded-full">Add to cart</button>
//             </div>)
//         }
//     </div>
//   )
// }

// function Cart() {
//   // 4. Read the cart from Context
//   // 5. Display the items and total
//   const {cart} = useContext(CartContext)
//   if(cart.length === 0){
//     return <p className="text-sm text-center text-mauve-400">Cart is empty</p>
//   }

//   let totalPrice = cart.reduce((total, item) => total + (item.quantity * item.price) ,0)
//   return (
//     <div className="flex flex-col gap-7 divide-y divide-mauve-950">
//   <div className="flex flex-col gap-4">
//     {
//         cart.map(item => <div key={item.id} className="flex items-center justify-between gap-4">
//             <h3 className="text-sm text-mauve-700">{item.name}</h3>
//             <div className="flex items-center gap-2">
//                 <span className="text-xs text-mauve-400">{item.quantity}</span>
//                 <span className="text-xs text-mauve-400">X {item.price}</span>
//             </div>
//         </div>)
//     }
//   </div>
//   <div className="flex items-center justify-between gap-3">
//     <h2 className="text-base text-mauve-900 font-black">Total</h2>
//     <p className="text-base text-mauve-800">{totalPrice}</p>
//   </div>
//   </div>)
// }

// function CartProvider({ children }) {
//   // 6. Own the cart state and provide it
//   const [cart, setCart] = useState([])
//   return <CartContext.Provider value={{
//     cart,
//     handleAddToCart : setCart
//   }}>
//     {children}
//   </CartContext.Provider>
// }

// function ShoppingApp() {
//   // 7. Wrap ProductList and Cart in CartProvider
//   return (
//     <CartProvider>
//     <div className="h-screen bg-mauve-50 px-7 py-10 grid grid-cols-3 gap-10 font-mono">
//         <ProductList/>
//         <Cart/>
//     </div>
//     </CartProvider>
    
//   )
// }

// export default ShoppingApp;


import { createContext, useContext, useState } from "react";

const products = [
  { id: 1, name: "Keyboard", price: 15000 },
  { id: 2, name: "Mouse", price: 8000 },
  { id: 3, name: "Headphones", price: 22000 },
];

const CartContext = createContext(null);

function ProductList() {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-4 col-span-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-sm text-mauve-800">
              {product.name}
            </h3>
            <span className="text-xs text-mauve-700">
              ₦{product.price.toLocaleString()}
            </span>
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            className="bg-mauve-900 text-mauve-50 text-xs px-3 py-1 rounded-full"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const {
    cart,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <p className="text-sm text-center text-mauve-400">
        Cart is empty
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 border-b border-mauve-200 pb-4"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm text-mauve-700">
                {item.name}
              </h3>

              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-xs text-red-600"
              >
                Remove
              </button>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="border border-mauve-300 rounded px-2"
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  −
                </button>

                <span className="text-sm">{item.quantity}</span>

                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="border border-mauve-300 rounded px-2"
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>
              </div>

              <span className="text-sm text-mauve-700">
                ₦{(item.price * item.quantity).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base text-mauve-900 font-black">
          Total
        </h2>

        <p className="text-base text-mauve-800">
          ₦{totalPrice.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function handleRemoveFromCart(id) {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  function handleIncreaseQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function handleDecreaseQuantity(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const value = {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

function ShoppingApp() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-mauve-50 px-7 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 font-mono">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default ShoppingApp;
