import React from 'react'
import { useParams } from 'react-router-dom'
import productData from './Productslist'


const SinglePage = () => {
 const param =  useParams()
   let data =  productData.find(x=>x.id==param.id)
  return (
    <div>
      
      <div className="container">
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">{data.title}</h3>
      <h6 className="card-subtitle">globe type chair for rest</h6>
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-6">
          <div className="white-box text-center"><img src= {data.image} height={400} width={390} className="img-responsive" /></div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-6">
          <h4 className="box-title mt-5">Product description</h4>
          <p>Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don't look even slightly believable.but the majority have suffered alteration in some form,by injected humour</p>
          <h2 className="mt-5">
            $153<small className="text-success">(36%off)</small>
          </h2>
          <button className="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title data-original-title="Add to cart">
            <i className="fa fa-shopping-cart" />
          </button>
          <button className="btn btn-primary btn-rounded">Buy Now</button>
          <h3 className="box-title mt-5">Key Highlights</h3>
          <ul className="list-unstyled">
            <li><i className="fa fa-check text-success" />Sturdy structure</li>
            <li><i className="fa fa-check text-success" />Designed to foster easy portability</li>
            <li><i className="fa fa-check text-success" />Perfect furniture to flaunt your wonderful collectibles</li>
          </ul>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3 className="box-title mt-5">General Info</h3>
          <div className="table-responsive">
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default SinglePage
