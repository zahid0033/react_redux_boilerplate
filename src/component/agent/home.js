import React,{Component} from "react";
import {connect} from "react-redux"
import {Jumbotron} from "react-bootstrap";

class Home extends Component {

    render() {
        return(
            <div className="container">
                <Jumbotron className="mt-5">
                    <h1 className="text-center mb-4"> Profile </h1>

                    <div className="row">
                        <div className="col-6">
                            <p><b>Name :</b> Md. Abul Kalam</p>
                            <p><b>Phone :</b> 016384897907</p>
                            <p><b>Address :</b> Mirpur</p>
                        </div>
                        <div className="col-6">
                            <img src="https://picsum.photos/300/200" alt="" className="mb-4"/>
                            <p><b>Name :</b> Md. Abul Kalam</p>
                            <p><b>Phone :</b> 016384897907</p>
                            <p><b>Address :</b> Mirpur</p>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth : state.auth
})


export default connect(mapStateToProps)(Home)