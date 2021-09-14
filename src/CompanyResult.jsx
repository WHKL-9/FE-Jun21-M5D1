import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompanyResult = ({ companyResult}) => {
  console.log("I am the results:", companyResult);

  return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.slice(-25).map((result, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{result.title}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
  );
};

export default CompanyResult;
