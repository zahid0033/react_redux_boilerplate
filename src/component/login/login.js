import React,{Component} from 'react';
import {connect} from "react-redux";
import * as authActions from '../../redux/actions/authActions'
import {Link} from "react-router-dom";
import {Tabs,Tab} from "react-bootstrap"
import AgentLogin from "./agentLogin";
import AdminLogin from "./adminLogin";

class Login extends Component {
    componentDidMount() {
        // this.props.setUsers()
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <h1 className="text-center">Login - {this.props.data.action}</h1>
                {/*<Link to={"/agent"} >Agent Home </Link>*/}
                <br/>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Admin">
                        <AdminLogin {...this.props}/>
                    </Tab>
                    <Tab eventKey="profile" title="Agent">
                        <AgentLogin {...this.props}/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.auth
    }
}

export default connect(mapStateToProps,authActions)(Login);