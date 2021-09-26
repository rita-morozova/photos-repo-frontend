import React from "react";
import {
  Form,
  Button,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";
import "../login/loginForm.css";

class SignupForm extends React.Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signup-page">
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header
              as="h2"
              textAlign="center"
              style={{ color: "#FA396F", marginTop: "20px" }}
            >
              SIGNUP
            </Header>
            <Form
              className="signup-form"
              size="large"
              onSubmit={this.handleSubmit}
              noValidate
            >
              <Segment stacked>
                <Form.Input
                  fluid
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <br />
                <Form.Input
                  fluid
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <br />
                <Form.Input
                  fluid
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
                <br />
                <Button
                  fluid
                  size="large"
                  style={{ backgroundColor: "#FA396F", color: "white" }}
                >
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message style={{ color: "#FA396F" }}>
              Already registered?{" "}
              <a style={{ color: "#e8b8c7" }} href="/login">
                Log In{" "}
              </a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignupForm;
