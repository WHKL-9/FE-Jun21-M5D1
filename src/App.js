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
import HomePage from "./components/HomePage";
import Company from "./components/Company";
import SearchedJobs from "./components/SearchedJobs";
import FavoriteCompany from "./components/FavoriteCompany";
import { fillSearchResults } from "./actions";
import { connect } from "react-redux";
import SearchResults from "./components/SearchResults";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  fetchResults: (search) => dispatch(fillSearchResults(search)),
});

const App = ({ fetchResults }) => {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/jobs");
  };

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
        <Form className="d-flex flex-column">
          <FormControl
            type="text"
            placeholder="Tell us your dream job"
            className="mr-sm-2"
            onChange={(e) => {
              if (e.target.value.length > 3) {
                fetchResults(e.target.value);
              }
            }}
            onEnter={handleRoute}
          />
          <SearchResults />

          <Link to={`/jobs/`}>
            <Button variant="outline-primary" type="button">
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
          path={`/jobs`}
          exact
          render={(routerProps) => (
            <SearchedJobs
              {...routerProps}
              // searchResults={searchResults}
              // userInput={userInput}
            />
          )}
        />
        <Route exact path="/">
          {<Redirect to="/HomePage" />}
        </Route>
        <Route
          path="/Company"
          exact
          render={(routerProps) => <Company {...routerProps} />}
        />
        <Route
          path="/FavoriteCompany"
          exact
          render={(routerProps) => <FavoriteCompany {...routerProps} />}
        />
      </Switch>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
