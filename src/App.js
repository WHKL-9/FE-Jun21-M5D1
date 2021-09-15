import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Company from "./Company";
import SearchedJobs from "./SearchedJobs";

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const endpoint = "https://strive-jobs-api.herokuapp.com/jobs?title=";

  const handleSearchInput = async (event) => {
    if (event){
      event.preventDefault();
    }
    try {
      const response = await fetch(endpoint + userInput);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   handleSearchInput();
  // }, []);

  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Link to="/HomePage">
          <Navbar.Brand>DayNight Remote</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link to="/Company">
            <Nav.Link href="#features">Company</Nav.Link>
          </Link>{" "}
        </Nav>
        <Form onSubmit={handleSearchInput}>
          <FormControl
            type="text"
            placeholder="Tell us your dream job"
            className="mr-sm-2"
            onChange={(e) =>
              setUserInput(e.target.value, console.log(userInput))
            }
          />
          <Link to={`/jobs/${userInput}`}>
            <Button variant="outline-primary">Search</Button>
          </Link>
        </Form>
      </Navbar>

      <Switch>
        <Route
          path="/HomePage"
          exact
          render={(routerProps) => <HomePage {...routerProps} />}
        />
        <Route
          path={`/jobs/:${userInput}`}
          exact
          render={(routerProps) => (
            <SearchedJobs
              {...routerProps}
              searchResults={searchResults}
              userInput={userInput}
            />
          )}
        />
        <Route exact path="/">
          {<Redirect to="/HomePage" />}
        </Route>
        <Route
          path="/Company/"
          exact
          render={(routerProps) => <Company {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
