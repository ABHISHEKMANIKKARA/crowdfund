import './Header.css'
import Boxtwo from './Boxtwo.jsx'
import Boxthree from './Boxthree.jsx'
import Modal from './Modal.jsx'
import { useState } from 'react'


function Header(){
var [bookmark,setBookmark]=useState(true)
  return(
    <div className="header"> 
       <div className="title">crowdfund</div>
        
          <div className="section-box">
            <div>
                <ul className="sections">
                  <li >About</li>
                  <li>Discover</li>
                  <li>Get Started</li>
                </ul>
            </div>
           
  </div>
          <div className="box1">
            <div className="master-logo">
                 <img src="https://drive.google.com/uc?export=view&id=1CXFQsKGoxIOrptNVbI7Q8vRypy9noNfg" />
            </div>
            <div className="cardtext">
            <h5>Mastercraft Bamboo Monitor Riser</h5> 
            <p style={{fontSize:"16px","fontFamily":"commissioner",color:"darkgray"}}>A Beautiful & handcrafted monitor stand to reduce neck and eye strain</p> 
            </div >
            <div>
            <div class="container1">
              <div className="box1buttons">
                <button class=" btn button-backThisProject" data-toggle="modal" data-target="#exampleModalLong">Back this project</button>
                <div>
          
                 {window.innerWidth>500?<button onClick={()=>{setBookmark(!bookmark)}} class=" btn button-bookmarked" ><img style={{height:"5vh",width:"5vh",display:"inline"}}src="https://drive.google.com/uc?export=view&id=1lp2ip-YbTW_Ogm5g7mqjpO21b25KEZVv"/><span  style={{margin:"1vw"}}>{bookmark?"Bookmarked":"Bookmark"}</span></button>:<img style={{height:"5vh",width:"5vh",display:"inline"}}src="https://drive.google.com/uc?export=view&id=1lp2ip-YbTW_Ogm5g7mqjpO21b25KEZVv"/>}
                </div>
              </div>
            </div>
            </div> 
          </div>

        <Boxtwo /> 
        
        <Modal />       
</div>
  )
}
export default Header;