import {
  InputGroup,
  FormControl,
  Form,
  Button,
  Link,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";

const Company = () => {
  const [searchedCompany, setSearchedCompany] = useState([]);
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} sm={8} md={4}></Col>
        <Col xs={12} sm={8} md={4}>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Company"
              className="mr-sm-2"
              onChange={(e) =>
                setSearchedCompany(e.target.value, console.log(searchedCompany))
              }
            />
            <Button variant="outline-primary" type="button">
              Search
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={8} md={4}></Col>
      </Row>
    </Container>
  );
};

export default Company;
