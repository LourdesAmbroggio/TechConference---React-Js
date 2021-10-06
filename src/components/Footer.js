import React from 'react';
import { Link } from "react-router-dom";


import "../assets/sass/Navbar.css";

class Footer extends React.Component {
   render() {
       return(
          
           <div className="Navbar2">
         {/*   <div className="container-fluid">
            <Link className="Navbar__brand" to="/"> 
            </Link>
           </div> */}
           <span className="font-weight-bolg">TechLove<strong>Conf</strong> </span>
           <span className="font-weight-light">2021 © Todos los derechos reservados. </span>

           <span className="copy"> <a href="https://www.lourdesambroggio.com.ar">Designed with ❤ by LourdesAmbroggio</a>  </span>
           </div>
       
           
       );
   }


}



export default Footer;