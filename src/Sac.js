import React from "react";
import Marquee from "react-fast-marquee"; 
import { SocialIcon } from 'react-social-icons';
import logo from "./vvit.jpeg";
function App(){
    
  
    return(
        
        <div>
           
{/*<div id="mySidenav" className="sidenav">
  <a href="#/" className="closebtn" onclick="closeNav()">&times;</a>
  <a href="#/">About</a>
  <a href="#/">Services</a>
  <a href="#/">Clients</a>
  <a href="#/">Contact</a>
</div>
<span onclick="openNav()">&#9776; open</span>

 /* /* <div class="navbar">
  <a href="#/" >Home</a>
  <a href="#/" >News</a>

  <div class="dropdown">
    <button class="dropbtn">Councils 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/About">CR's</a>
      <a href="/About">Alumni</a>
      <a href="/About">Clubs</a>
      <a href="/About">Sports</a>
      <a href="/About">Others</a>
    </div>
  </div> 
  <a href="/About">About</a>
  <a href="/logout">Logout</a>
  
</div>  */}

<Module/>
<Frame/>
<About/>
    
        </div>
    );
}


const  Module=()=>{
    return(
        <div>
            <h1 style={{padding:"0px", margin:"0px", textAlign:"center", backgroundColor:"#49484d", color:"#ffffff", fontSize:"35px"}}  ><b >College Bodies</b></h1><hr></hr>
       <Marquee style={{color:"red", paddingBottom:"20px", textTransform:"uppercase", transition:"step-start"}}>***  <b> Today Updates   </b>  ***</Marquee>
        </div>
    )
}
const Frame=()=>{
    return(
        <div>
           <fieldset>
            
<iframe src={logo} title="image" width={"100%"} height={"600px"} style={{padding:"5px 0px"}} ></iframe>
           </fieldset>
        </div>
    );
}
const About=()=>{
    return(
        <div>
             <footer class="footer">
             <div class="container">
        
            <div>
            <nav className="main-menu">
            <ul>
                <li>
                    <a href="#/">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                           Home
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a href="#/">
                        <i class="fa fa-globe fa-2x"></i>
                        <span class="nav-text">
                            News
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="#/">
                       <i class="fa fa-comments fa-2x"></i>
                        <span class="nav-text">
                            Sac
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="#/">
                       <i class="fa fa-camera-retro fa-2x"></i>
                        <span class="nav-text">
                         Gallery
                        </span>
                    </a>
                   
                </li>
                {/* <li>
                    <a href="#/">
                        <i class="fa fa-film fa-2x"></i>
                        <span class="nav-text">
                            Surveying Tutorials
                        </span>
                    </a>
                </li> */}
                {/* <li>
                    <a href="#/">
                        <i class="fa fa-book fa-2x"></i>
                        <span class="nav-text">
                           Surveying Jobs
                        </span>
                    </a>
            </li>*/}
                <li>
                   <a href="#/">
                       <i class="fa fa-tasks fa-2x"></i>
                        <span class="nav-text">
                            Events
                        </span>
                    </a>
                </li> 
                <li>
                   <a href="#/">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Locations
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#/">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            About us
                        </span>
                    </a>
                </li>
            </ul>

            <ul className="logout">
                <li>
                   <a href="#/">
                         <i class="fa fa-sign-out fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
            </div>
                 
                 
  	
  	 	<div class="row">
            <p>SAC as a responsive student centred organisation, represents the students voice, aspirations, thoughts, dreams and make them possible by providing excellent services, programs, products and facilities for the entire VVIT family with the support of advisory committee.</p>
  	 		<div class="footer-col">
  	 			<h4>sac</h4>
  	 			<ul>
  	 				<li><a href="#/">about us</a></li>
  	 				<li><a href="#/">our events</a></li>
  	 				<li><a href="#/">privacy policy</a></li>
  	 				<li><a href="#/">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
                   <SocialIcon url="https://twitter.com" />
                   <SocialIcon url="https://facebook.com" />
                   <SocialIcon url="https://instagram.com" />
                   <SocialIcon url="https://linkedin.com" />
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </div>
    );
}


export default App; 