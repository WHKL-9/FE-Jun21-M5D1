import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import CompanyResult from "./CompanyResult";

const Company = () => {
  const [searchedCompany, setSearchedCompany] = useState("");
  const [companyResult, setCompanyResult] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const endpoint = "https://strive-jobs-api.herokuapp.com/jobs?company=";

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (searchedCompany.length > 3) {
      try {
        const response = await fetch(endpoint + searchedCompany);
        if (response.ok) {
          const data = await response.json();
          setCompanyResult(data.data);
          // console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} sm={8} md={4}></Col>
        <Col xs={12} sm={8} md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Company"
                onChange={(e) =>
                  setSearchedCompany(
                    e.target.value,
                    console.log(searchedCompany)
                  )
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Search{" "}
            </Button>
          </Form>
        </Col>
        <Col xs={12} sm={8} md={4}></Col>
      </Row>
      <Row>
        <CompanyResult
          companyResult={companyResult}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      </Row>
    </Container>
  );
};

export default Company;
