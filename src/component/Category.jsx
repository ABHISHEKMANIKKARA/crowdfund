import './Category.css'
import Modal from'./Modal.jsx'

function Category(props){
    return(
        <div>
       { props.details.slice(1,props.details.length).map(function(item){ return(<div className="typebox">
            <div className="boxhead row">
    <h5 class="col-12 col-md-8">{item.title}</h5>
                <p class="col-12 col-md-4" style={{"font-size":"0.8rem"}}>{item.pledge}</p>
            </div>
            <p style={{fontSize:"0.8rem"}}>{item.detail}</p>
            <div className="boxfoot row">
                <div className="col-12 col-md-8"><h3 >{item.left}<span>left</span></h3></div>
                <div className="col-12 col-md-4 ">{item.left?<button data-toggle="modal" data-target="#exampleModalLong" className="btn button-select">Select Reward</button>:
                <button className="btn button-select" disabled>Out of Stock</button>}</div>
            </div>
        </div>)})}
       
      </div>
    )
}
export default  Category