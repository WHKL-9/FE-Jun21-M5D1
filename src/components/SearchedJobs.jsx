import { Table, Container, Spinner, Alert } from "react-bootstrap";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  results: state.search.results.data,
  loading: state.search.loading,
  error: state.search.error,
});

const SearchJobs = ({ results, loading, error }) => {
  // console.log("I am the results:", searchResults);

  return (
    <>
      {error ? (
        <Alert variant="danger">Something went wrong!</Alert>
      ) : loading ? (
        <div className="text-center mt-3">
          <Spinner animation="grow" />
          <h4>Loading</h4>
        </div>
      ) : (
        <Container fluid className="p-3">
          <h4>Search Results: </h4>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Company</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {results.slice(-25).map((result, index) => {
                return (
                  <tr key={result._id}>
                    <td>{index + 1}</td>
                    <td>{result.company_name}</td>
                    <td>{result.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};

export default connect(mapStateToProps)(SearchJobs);
