import { Container } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  companies: state.favorite.companies,
});

const FavoriteCompany = ({companies}) => {
  console.log(companies);
  return (
    <Container fluid className="p-3">
      test
      {companies.map((company, i) => (
        <p key={i}>{company._id}</p>
      ))}
      {/* <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Title</th>
            <th ><span className="Favorite mx-auto text-center">🌟</span></th>
          </tr>
        </thead>
      </Table> */}
    </Container>
  );
};

export default connect(mapStateToProps)(FavoriteCompany);
