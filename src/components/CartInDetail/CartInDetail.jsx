import React from 'react'
import { Link } from 'react-router-dom'
import CartContainer from '../CartContainer/CartContainer'


const CartInDetail = () => {
  return (
    <div style={{
        marginTop: '4%',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(7, 114, 255',
        display: 'absolute',
        float: 'right',
        borderRadius: 15,
        color: 'white'
    }}>
        <div>
           <CartContainer/>
        </div>
        <button className='btn btn-success' style={{margin: 20}}><Link to="/cart" style={{color: 'white'}}>Completar la compra</Link></button>
    </div>
  )
}

export default CartInDetail