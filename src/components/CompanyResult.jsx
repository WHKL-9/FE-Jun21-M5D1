import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import { useState,useEffect} from "react";
import { connect } from "react-redux";
import { addCompanyToFavorite } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (companyToAdd) => dispatch(addCompanyToFavorite(companyToAdd)),
});

const CompanyResult = ({ companyResult, selectedCompany, setSelectedCompany }, props) => {
  console.log("I am the results:", companyResult);

  const [favorite, setFavorite] = useState(null);

  // const FavoriteToggle = () => setFavorite(!favorite);

  // useEffect(() => {
  //   handleSearchInput();
  // }, []);

  useEffect(()=>{setFavorite(selectedCompany)}, [selectedCompany])

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
          return (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{result.company_name}</td>
              <td>{result.title}</td>
              <td>
                <Button className="Favorite ml-3" variant="light" onClick={()=>props.addToFavorite(favorite)}>🌟</Button>
              </td>
     
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyResult);
