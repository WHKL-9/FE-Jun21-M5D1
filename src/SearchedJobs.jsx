import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchJobs = ({ searchResults, userInput }) => {
  console.log("I am the results:", searchResults);

  return (
    <Container fluid className="p-3">
      <h4>Search Results for: {userInput}</h4>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.slice(-25).map((result, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{result.company_name}</td>
                <td>{result.title}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

    </Container>
  );
};

export default SearchJobs;
