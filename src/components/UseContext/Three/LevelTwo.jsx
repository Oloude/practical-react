import { createContext, useContext, useState } from "react";

const products = [
  { id: 1, name: "Keyboard", price: 15000 },
  { id: 2, name: "Mouse", price: 8000 },
  { id: 3, name: "Headphones", price: 22000 },
];

const CartContext = createContext(null)

function Products(){
    const {handleAddToCart} = useContext(CartContext)
return <div className="flex flex-col gap-4 col-span-2">
   {products.map(product => <div key={product.id} className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-2">
        <h4 className="text-mauve-700 text-sm">{product.name}</h4>
        <span className="text-mauve-600 text-xs">{product.price}</span>
    </div>
    <button onClick={() => handleAddToCart(product)} className="bg-mauve-900 rounded-full px-4 py-1 text-xs text-mauve-50">Add to Cart</button>
   </div>)}
</div>
}

function Cart(){
    const {cart, handleRemoveFromCart, handleIncrement,handleDecrement} = useContext(CartContext)

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity) ,0)
    if(cart.length === 0){
        return <p className="text-sm text-mauve-600 text-center">No item in the cart</p>
    }
    return (
        <div className="flex flex-col gap-5 divide-y divide-mauve-400"> 
        <div className="flex flex-col gap-3 pb-4">{
            cart.map(item=> <div key={item.id} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h5 className="text-sm text-mauve-800">{item.name}</h5>
                    <button onClick={()=>handleRemoveFromCart(item.id)} className="text-xs text-red-600">Remove</button>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <button onClick={() => handleDecrement(item.id)} className="bg-mauve-200 shadow w-5 h-5 rounded-full text-mauve-900 flex items-center justify-center">-</button>
                        <span className="text-xs text-mauve-700">{item.quantity}</span>
                        <button onClick={()=> handleIncrement(item.id)} className="bg-mauve-200 shadow w-5 h-5 rounded-full text-mauve-900 flex items-center justify-center">+</button>
                    </div>
                    <p className="text-sm text-mauve-600">{item.price * item.quantity}</p>
                </div>
            </div>)
        }</div>
        <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm text-mauve-600 font-medium">Total</h3>
            <p className="text-sm text-mauve-600 font-medium">{totalPrice}</p>
        </div>
        </div>
    )
}

function CartProvider({children}){
    const [cart, setCart] = useState([])

    function handleAddToCart({id, price, name}){
      setCart(prev => {
        let existing = prev.find(p => p.id === id)
        if(existing === undefined){
            return [
                ...prev,
                {
                    id,
                    price,
                    name,
                    quantity : 1
                }
            ]
        }else{
            return prev.map(p => p.id === id ? {...p, quantity : p.quantity + 1} : p)
        }
      })
    }

    function handleRemoveFromCart(id){
      setCart(prev => prev.filter(p => p.id !== id))
    }

    function handleIncrement(id){
     setCart(prev => prev.map(p =>  p.id === id ? {...p, quantity : p.quantity + 1} : p) )
    }

    function handleDecrement(id){
       setCart(prev => prev.map(p =>  p.id === id ? {...p, quantity : p.quantity - 1} : p).filter(p => p.quantity > 0 ))
    }

   return <CartContext.Provider value={{
    cart,
    handleAddToCart ,
    handleRemoveFromCart,
    handleIncrement,
    handleDecrement,
   }}>
    {children}
   </CartContext.Provider>
}

function ShoppingApp(){
    return (
        <CartProvider>
            <div className="bg-mauve-50 px-8 py-10 h-screen grid grid-cols-3 gap-8 font-mono">
                <Products/>
                <Cart/>
            </div>
            
        </CartProvider>
    )
}

export default ShoppingApp