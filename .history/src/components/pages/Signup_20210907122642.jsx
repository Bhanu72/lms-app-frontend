import React from "react";
import "./signup.scss";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import SignImg from "../../assets/images/signup.png";

function Signup() {
    const React = require('react')
class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
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
                <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
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
