import './Boxtwo.css'
function Boxtwo() {
    return (
        <div className="box2">
        <div className="container2" >
           <div className="backeddetails row">
               <div className="col-12 col-md-4" >
               <h1>$89,914</h1>
               <p>of $100,000 backed</p>
               </div>
               <div className="col-12 col-md-4" >
               <h1>5,007</h1>
               <p>total backers</p>
               </div>
               <div className="col-12 col-md-4" >
               <h1>56</h1>
               <p>days left</p>
               </div>
           </div>
           <div class="progress">
           <div class="progress-bar progressbar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
       

      </div>
    )
}
export default Boxtwo;