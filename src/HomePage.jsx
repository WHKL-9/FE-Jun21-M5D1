import {Container} from "react-bootstrap"
import "./App.css"

const HomePage = () => {
  return (
    <Container className="p-3">
      <h3>You are one click away from your dream job. Of course, remotely.</h3>
      <img className="HomePageImage" src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" />
    </Container>
  );
};

export default HomePage;
