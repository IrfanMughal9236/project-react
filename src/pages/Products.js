import React from 'react'
import productData from './Productslist'
import { Link } from 'react-router-dom'

 


const Products = () => {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12'>
      <h1>Products</h1>

{
    productData.map(x=>{
        return(
            <div className='col-lg-3 col-md-6 col-sm-12'>

<div className="card" style={{width: '18rem'}}>
   <Link  to={`/products/${x.id}`}>
  <img src={x.image} className="card-img-top" alt="..." />
   </Link>
  <div className="card-body">
    <h5 className="card-title">{x.title}</h5>
    <p className="card-text"> {x.price}...</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
        )
    })
}

    </div>
  )
}

export default Products
