import './App.css';
import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import product from "./product";
import { Card } from "react-bootstrap";

const App = () => {
  const firstName = "YourFirstName"; // Provide your first name here

  return (
    <div className="Box">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text><Price /></Card.Text>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
    </div>
  );
};

export default App;
