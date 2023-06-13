import "./Course.scss";


import Product from "./Json";

import { useNavigate } from "react-router-dom";


const Course = () => {

  

  let navigate = useNavigate(); 
 
    return <div className="shop-by-category">
    <div className="categories">

      {
        Product.map((Item)=>{
          return(
            <div className="category" key={Item.userid} >
            <img src={Item.student} alt="" onClick={()=>navigate(Item.component)}/>
            </div>
          )
        })
      }
       

      
    </div>
    </div>;
};

export default Course;
