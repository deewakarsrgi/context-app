import React, { useContext } from 'react'
import './Cart.css'
import { cartcontext } from '../../context/CartContext'

const Carts = () => {
  const Globlestate=useContext(cartcontext);
  const state =Globlestate.state;
  const dispatch = Globlestate.dispatch
  console.log(state);
  const total = state.reduce ((total , item)=>{
    return total + item.price * item.quantaty
  },0)
  console.log(total);
  
return (
    <div className='contaner-fluid'>
      {state.length===0&& <div className='emptycart'> Cart is Empty </div>}
        
      {state.map((product ,n)=>{
        return (
          <div className='row' key={n} >
            <div className='card '>
              <div className='card-body '>
                <div className=''>
                <div>
                <div>
                  <img className='imagestl' src={product.image}/>
                  
                </div>
                <span>{product.title}</span>
                <p>${product.price}</p>
                </div>
               
              </div>
              <div className='d-flex justify-content-between'>
              
              <div className='d-flex mx-5 butn'>
                <button className='btn btn-info butn' onClick={()=>dispatch({type:"INCREASE" ,payload : product})}>+</button>
                <p className=' btn btn-warning my-2 mx-2'>{product.quantaty}</p>
                <button  className = "btn btn-info mx-2 butn" onClick={()=>{if (product.quantaty > 1){dispatch({type:"DECREASE" , payload:product})}}}> -</button>
              </div>
              <button className=' btn btn-warning' onClick={()=>dispatch({type:"REMOVE", payload:product})}>Remove</button>
              
              
              </div>
              </div>
              
              
            </div>
            
          </div>
        )
      })}
      
     
      {state.length > 0 && (
        <div className="total">
          <h2>Total:-{total}</h2>
        </div>
      )}
      {state.length!==0&& 
      <button>Buy Now</button> }
      
    </div>
  )
}

export default Carts;