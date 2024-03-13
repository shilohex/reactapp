import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";

function App() {
  let name = "Rose";
  return (
    <>
      <div className="design">
        <Card style={{ width: "18rem" }}>
          <Image />
          <Card.Body>
            <Card.Title>
              {" "}
              <Name />{" "}
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Button variant="primary">
              <Price />
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h1>Hello {name ? name : "there"} </h1>
        {name && <Image />}
      </div>
    </>
  );
}

export default App;
