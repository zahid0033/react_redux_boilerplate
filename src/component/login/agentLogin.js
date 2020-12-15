import React,{Component} from "react";
import {connect} from "react-redux";
import {Form,Button,Jumbotron} from "react-bootstrap";
import {loginAgent} from "../../redux/actions/agentActions";
import {bindActionCreators} from "redux";

class AgentLogin extends Component {
    state = {
        email: "",
        password : ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        const agentData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginAgent(agentData,this.props.history)
    }

    onChange = e => {

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <Jumbotron>
                {this.props.errors}
                <h2 className="text-center">Agent Login</h2>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginAgent
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AgentLogin)