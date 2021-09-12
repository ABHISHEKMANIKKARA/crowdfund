import './Boxthree.css'
import Category from './Category.jsx'
function Boxthree(props){

    return (
        <div className="box3">
           <div className="container3">
             <h5>About this project</h5>
             <p style={{marginTop:"2rem",fontSize:"0.8rem"}}>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. 
               Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay
              focused on the task at hand. </p>
              <p style={{fontSize:"0.8rem"}}>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow
               notepads, pens, and USB sticks to be stored under the stand.</p>
               <div className="categ">
                   {console.log(props)}
                   <Category details={props.details}/>
                  
               </div>
           </div>
        </div>
    )
}
export default Boxthree;