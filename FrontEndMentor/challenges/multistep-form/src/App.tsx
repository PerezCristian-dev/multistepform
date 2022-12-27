
import { useState } from 'react'
import { AppRouter } from './Routes/AppRouter'
import { addons, OrderContext, OrderState, plans } from './store/OrderContext'



const initialState:OrderState= {
  client:{name:"", email:"", phone:""},
  plans:[...plans],
  monthly:false,
  addons: [...addons],
  total:0,
}




function App() {
  
  const [orderState, setOrderState] = useState<OrderState>(initialState)

  return (
    <OrderContext.Provider value={{order:{...orderState}, setOrder: setOrderState}}>
      <AppRouter />
    </OrderContext.Provider>
  )
}

export default App
