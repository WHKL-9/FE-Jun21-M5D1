import { Table, Button } from "react-bootstrap";
import "../App.css";
import { connect } from "react-redux";
import { addCompanyToFavorite } from "../actions";
import { Link } from "react-router-dom";

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
}) => {
  return (
    <>
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
            let isFavorite = favorite.companies.includes(result);
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
                    onClick={() => addToFavorite(result)}
                  >
                    🌟
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/FavoriteCompany">
        <Button variant="primary" className="mt-3 ml-5">
          To Favorite 🚀{" "}
        </Button>
      </Link>{" "}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyResult);
