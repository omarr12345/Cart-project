import React from 'react'
import '../Api/Products.json'
import apiProduct from '../Api/products'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'

function FinalCart () {

  const params=useParams();
  const id=params.id;
 
  const[reducer,setReducer]=useState({

    loading:true,
    product:[],

  }); 


  useEffect(() => {

    apiProduct.getProduct(parseInt(id)).then(

      product=>{
        setTimeout(()=>{setReducer({
          product:product,
          loading:false

       })},2000)
         


    }
      )

     
  
    });

    if(reducer.loading){
      return 'loading ..'
   }


   
   

  
    return (
      
       
  <div>
 

  <div className={'row'}  >
  
  <div className='col-md-6'>
  <img src={"../imgs/Cat"+params.id+".jpg"} className="card-img-top" alt="..."/>
  </div>
  <div className='col-md-6'>
  <div className="card-body">
  <h5 className="card-title">{reducer.product.name}</h5>
  <br/>
  <p className="card-text"> Quantity : {reducer.product.id}</p>
  <p className="card-text">Price : {reducer.product.price}</p>
  <p className="card-text">Total Price : 100$</p>

  <button className="btn btn-primary" > Pay Now</button>

  </div>
  </div>
  
  </div>
  </div>
    )
}

export default FinalCart
