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
      <div>
        <div className="design">
          <Card style={{ width: "18rem", borderRadius: "10px" }}>
            <Image />
            <Card.Body id="des">
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

          <div className="design">
            <h1>Hello {name ? name : "there"} </h1>
            {name && <Image />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
