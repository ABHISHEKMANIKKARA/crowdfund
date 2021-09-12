import './Modal.css'
import Boxthree from './Boxthree.jsx'
import { useState } from 'react'

function Modal(){
    var [pledge,setPledge]=useState()
    var [amount,setAmount]=useState(0)
    var detail=[{title:"Pledge with no reward",pledge:"",pledgevalue:0,left:"",detail:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."},
    {title:"Bamboo Stand ",pledge:"Pledge $25 or more",pledgevalue:25,left:"101",detail:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list. "},
    {title:"Black Edition Stand",pledge:"Pledge $75 or more",pledgevalue:75,left:"64",detail:"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."},
    {title:" Mahogany Special Edition",pledge:"Pledge $200 or more",pledgevalue:200,left:0,detail:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."}]
     
    var [details,changeDetails]=useState(detail)
    function pledgefunc(value){
        setPledge(value)
        console.log("called")
      }

    function decrease(index){
          details[index].left=details[index].left-1
          changeDetails([...details])
    }
    
    
    return(
        <div>
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
           <div class="modal-dialog" role="document">
               <div class="modal-content">
                      <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLongTitle">Back this project</h5>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                         </div>
                       <div class="modal-body">
                       <p style={{fontSize:"0.7rem"}}>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                      {details.map(function(item,i){ return (<div className="modalbox">
                           <div className="form-check">
                           <input class="form-check-input" onChange={()=>{pledgefunc(i)}} type="radio" name="flexRadioDefault" id={`flexRadioDefault${i}`} />
                          
                           <div className="row">
                           <label class="form-check-label col-12 col-md-4" for={`flexRadioDefault${i}`}><h6 style={{fontSize:"0.75rem"}}>{item.title}</h6></label>
                           <p className="col-12 col-md-5" style={{fontSize:"0.75rem", color:"hsl(176, 50%, 47%)"}}>{item.pledge}</p>
                           <h3 class="col-12 col-md-3" style={{fontSize:"0.85rem"}}>{item.left}<span>left</span></h3>
                           </div>
                           </div>
                              <p style={{fontSize:"0.7rem"}}>{item.detail}</p>
                           {pledge==i?<div className="enterpledge">
                             <div className="row">
                                <p className="col-12 col-md-6" style={{fontSize:"0.75rem",color:"grey"}}>enter your pledge</p>
                                <div className="col-6 col-md-3"><input className="pledgebox" type="text" onChange={(event)=>{setAmount(parseInt(event.target.value))}} placeholder={`$${item.pledgevalue}`} /></div>
                                <div className="col-6 col-md-3"><button data-toggle="modal" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>{decrease(i)}} data-target="#myModal" className="btn-sm button-continue" disabled={amount>=item.pledgevalue?false:true} >Continue</button></div>
                             </div> 
                             {amount>=item.pledgevalue?"":<p style={{fontSize:"0.65rem",color:"red"}}>`Enter amount above ${item.pledgevalue}!`</p>}    
                           </div>:""}
                          
                       </div>)})}
                      </div>
              </div>
             </div>
           </div>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body" style={{textAlign:"center"}}>
          <img src="https://drive.google.com/uc?export=view&id=1uieR3O8JiapyKR_Xn96RUUINXds3uHG0"/>
          <h5 style={{marginTop:"1.5rem"}}>Thanks for your support! 
            <p style={{color:"darkgray",fontSize:"0.95rem",marginTop:"1.5rem"}}>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
          </h5>
          <button class="btn" data-dismiss="modal" style={{backgroundColor:"hsl(176, 72%, 28%)",color:"white",borderRadius:"1rem",marginTop:"1.5rem"}} type="submit">Got it!</button>
        </div>
      </div>
      
    </div>
  </div>
  <Boxthree details={details} />
  
  </div>
    )
}

export default Modal;
