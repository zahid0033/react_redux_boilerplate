import React,{Component} from "react";
import {connect} from "react-redux";
import {Form,Button,Jumbotron} from "react-bootstrap";
import {loginAdmin} from "../../redux/actions/adminActions";
import {bindActionCreators} from "redux";

class AdminLogin extends Component {
    state = {
        email: "",
        password : ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        const adminData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginAdmin(adminData,this.props.history)
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
                <h2 className="text-center">Admin Login</h2>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" name="password" onChange={this.onChange} />
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
        loginAdmin
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminLogin)