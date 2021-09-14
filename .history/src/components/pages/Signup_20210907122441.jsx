import React from "react";
import "./signup.scss";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import SignImg from "../../assets/images/signup.png";

function Signup() {
    getInitialState: function(){
  return{file: []}
}

_onChange: (event)=>{
    this.setState({
        imgs: event.target.files
    })
},
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <Card className="signup-card">
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
                <input
                  ref="file"
                  type="file"
                  name="user[image]"
                  multiple="true"
                  onChange={this._onChange}
                />
              </Row>
            </Form>
          </Card>
        </Col>
        <Col>
          <img src={SignImg} alt="signup" className="signup" />
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
