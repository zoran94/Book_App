import React, {Component} from "react";
import M from "materialize-css";

class CreatePost extends Component{
    constructor(props){
        super(props)
        this.state ={}

    }
    
    componentDidMount(){
        const createModals = document.querySelectorAll(".modal");
        const instances = M.Modal.init(createModals)

        
        const actionButton = document.querySelector('.fixed-action-btn');
        const instancesOfActionButton = M.FloatingActionButton.init(actionButton, {
            direction: "right"
        });

    }

    

render(){

    //  const triggerText = <i className="fa fa-circle post"></i>
     // const triggerImage = <i className="fa fa-circle image"></i>
     // const triggerVideo = <i className="fa fa-circle video"></i>

        return (
            <>
                <div className="fixed-action-button buttons">

             <button className="btn-floating btn-large red">
                        <i className="large material-icons">+</i>
                    </button>

                <ul>
                <li>
                    <button data-target="modalPost" className="btn modal-trigger btn-floating blue">
            <i className="fa fa-circle post"></i>
            </button>
            </li>
            <li>
                    <button data-target="modalImage" className="btn modal-trigger btn-floating green">
            <i className="fa fa-circle post"></i>
            </button>
            </li>
<li>
                    <button data-target="modalVideo" className="btn modal-trigger btn-floating red">
            <i className="fa fa-circle post"></i>
            </button>        
            </li>    
            </ul>
            </div>

        

         <div id="modalPost" className="modal">
                    <h3>New post</h3>
                    <span>Post content</span>
                    <div>
                        <textarea className="materialize-textarea" onChange={this.props.onChangeText}></textarea>
                        <button onClick={this.props.onPostText} 
                        disabled={this.props.disabledText}
                        className="modal-close btn" >Post</button>
                    </div>
    
                </div>

                <div id="modalImage" className="modal">
                    <h3>New image post</h3>
                    <span>Post image url</span>
                    <div>
                        <input type="text"  onChange={this.props.onCreateImg}/>
                        <p id="errorMes"></p>
                    </div>
                    <br />
                    <button id="buttImg" onClick={this.props.onPostImage}
                        disabled={this.props.disabledImage}
                    className="btn" >Post</button>
    
                </div>
    
                <div id="modalVideo" className="modal">
                    <h3>New video post</h3>
                    <span>YouTube video link</span>
                    <div>
                        <input type="text" onChange={this.props.onCreateVid}/>
                        <button onClick={this.props.onPostVideo} 
                        //disabled={props.disabledVideo} ne funkcionise disabled digme
                        className="modal-close btn">Post</button>
                    </div>
                </div>
            </>
        )



    }
    
}

export default CreatePost;