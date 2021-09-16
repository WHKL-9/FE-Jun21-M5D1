import { Container, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { removeCompanyFromFavorite } from "../actions";

const mapStateToProps = (state) => ({
  companies: state.favorite.companies,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (index) => dispatch(removeCompanyFromFavorite(index)),
});

const FavoriteCompany = ({ companies, removeFromFavorite }) => {
  console.log(companies);
  return (
    <Container fluid className="p-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Title</th>
            <th>Favorite 👍</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{company.company_name}</td>
              <td>{company.title}</td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => removeFromFavorite(index)}
                >
                  <BsFillTrashFill />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCompany);
