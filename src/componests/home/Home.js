// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios';
// // const Home = () => {
// //     const [data,setData]= useState([]);
// //     const handleData =()=>{
// //         axios.get("https://fakestoreapi.com/products")
// //         .then((res)=>{
// //           setData(res.data);
// //     console.log(res.data);
// //         })
// //     useEffect(()=>{
// // handleData()
// //     },[]);
// //   return (
// //     <div className="container-fluid">
// //         <div className="row ">
// //             {data.map ((product , n)=>{
// //                 return (
// //                     <div className="col-sm-6 col-md-6 col-lg-4">
// //                     <div className="card my-3 cardstyle">
// //                       <div className='card-body'>
// //                         <div><img className="w-100 imagestyle" src ={product.image}/></div>
// //                         <div>{product.title}</div>
// //                         <div>${product.price}</div>
// //                         <div className='d-flex justify-content-around'>  
// //                         <button className="btn btn-primary btn-sm">add to cart</button>
// //                         <button className="btn btn-info btn-sm" >Details</button>
// //                         </div>
// //                         </div>
                       
//                         </div>
                     
//                       </div>
                
//                 )
//             })}
//         </div>

//     </div>
//   )
// }

// export default Home