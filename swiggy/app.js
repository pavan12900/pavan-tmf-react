import React from "react";
import ReactDOM from "react-dom/client"


var  root = document.getElementById ("root");
var  root1 =ReactDOM.createRoot( root);

 const Header =() => {
    return (
<div className="restuarant">
   <div className="navbar">
        
            <div className="logo-container">
               <img src ="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"/>

            </div>
            <div className ="navitems">
                <input type ="text" placeholder="search for restuarant and food"></input>
               
            </div>
          <div className='profile'>
            <i class=" fas fa-user"></i>
          </div>
    </div> 

     <div className="restuarant2">
     
     <div><h1>Restuarant Near <br/>Me</h1></div>
      
      <div>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"/>
      </div>
     </div>
  <div className="carousel1">     
      
        <div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"  alt="biryani"/>
        </div>
        <div>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"  alt="..."/>
        </div>
        <div>
         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"  alt="..."/>
        </div>
        <div>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"/>
        </div>
        <div>
        
  </div>
  
</div>
</div>
 


    );
 };
 root1.render(<Header/>)