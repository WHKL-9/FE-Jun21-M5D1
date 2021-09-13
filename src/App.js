import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Company from "./Company";
import SearchedJobs from "./SearchedJobs";

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const endpoint = "https://remotive.io/api/remote-jobs?search=";

  const handleSearchInput = async () => {
    try {
      const response = await fetch(
        endpoint + userInput,
        console.log(endpoint + userInput)
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.jobs, console.log(data.jobs));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearchInput();
  }, []);

  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Link to="/HomePage">
          <Navbar.Brand>DayNight Remote</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) =>
              setUserInput(e.target.value, console.log(userInput))
            }
          />
          <Link to={`/jobs/${userInput}`}>
            <Button
              variant="outline-primary"
              type="button"
              onClick={handleSearchInput}
            >
              Search
            </Button>
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
        <Route
          path="/company/:id"
          exact
          render={(routerProps) => <Company {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
