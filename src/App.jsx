// Importing CSS files for styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing React Bootstrap components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Importing custom components
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";

// Main function component for the entire application
function App() {
  // Dummy name for demonstration purposes
  let name = "Rose";

  return (
    <>
      <div>
        <div className="design">
          {/* Card component to display product details */}
          <Card style={{ width: "18rem", borderRadius: "10px" }}>
            {/* Custom Image component */}
            <Image />
            <Card.Body id="des">
              {/* Custom Name component */}
              <Card.Title>
                {" "}
                <Name />{" "}
              </Card.Title>
              {/* Custom Description component */}
              <Card.Text>
                {" "}
                <Description />{" "}
              </Card.Text>
              {/* Button to display price using custom Price component */}
              <Button variant="primary">
                {" "}
                <Price />{" "}
              </Button>
            </Card.Body>
          </Card>

          {/* Additional div for demonstration */}
          <div>
            {/* Conditional rendering of name */}
            <h1>Hello {name ? name : "there"} </h1>
            {/* Conditional rendering of image */}
            {name && <Image />}
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the App component as the default export
export default App;
