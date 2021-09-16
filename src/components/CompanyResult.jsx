import { Table, Button } from "react-bootstrap";
import "../App.css";
import { connect } from "react-redux";
import { addCompanyToFavorite } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (companyToAdd) => dispatch(addCompanyToFavorite(companyToAdd)),
});

const CompanyResult = ({
  companyResult,
  selectedCompany,
  setSelectedCompany,
  addToFavorite,
  favorite,
  ...restProps
}) => {
  console.log("I am the results:", companyResult);

  console.log({ restProps });

  return (
    <Table striped bordered hover variant="dark" className="mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Company</th>
          <th>Title</th>
          <th>Add to Favorite 🌟</th>
        </tr>
      </thead>
      <tbody>
        {companyResult.slice(-25).map((result, index) => {
          let isFavorite = favorite.companies.includes(result._id);
          return (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td style={{ color: isFavorite ? "red" : "white" }}>
                {result.company_name}
              </td>
              <td>{result.title}</td>
              <td>
                <Button
                  className="Favorite ml-3"
                  variant="light"
                  type="button"
                  onClick={() => addToFavorite(result._id)} 
                >
                  🌟
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyResult);
