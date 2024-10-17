import axios from "axios";
import { Bars } from 'react-loader-spinner';
import { useQuery } from "react-query";
import toast  from 'react-hot-toast';
import React from "react";
export default function Home() {


async function getProducts(){

    const response = await  axios.get("https://fakestoreapi.com/products").catch((err)=> toast.error(err.message));
    console.log(response.data)
    return response ; 
 }

    const {data, isLoading} = useQuery("products", getProducts); 
    console.log(data?.data);
    
    

 

  return<>
 <div className="home  my-5 mt-5 ">
 
    <div className=" container">
        <h1 className="text-center text-secondary ">Fake Store Products</h1>
        <div className="products row">
        {isLoading ? <div className='vh-100 d-flex justify-content-center align-items-center'>
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div> : data?.data.map((product)=>(
            <div className="product col-md-4  g-4 p-5 " key={product.id}>
                <div className="text-center">
                <img className="mb-3 w-100" style={{width:"250px" , height:"350px"}}  src={product.image} alt={product.title}/>
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
                <div className="rating  d-flex justify-content-center align-items-center ">      
                <i className="fa-solid fa-star  me-2"></i>
                <h4 className="mb-0">{product.rating.rate}</h4>
                </div>

                </div>
            </div>
        ))}
        
        </div>
    </div>

 </div>
</>
}