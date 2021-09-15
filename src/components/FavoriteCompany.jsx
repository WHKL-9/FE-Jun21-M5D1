import { Table, Container } from "react-bootstrap";

export const FavoriteCompany = () => {
  return (
    <Container fluid className="p-3">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Title</th>
            <th ><span className="Favorite mx-auto text-center">🌟</span></th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};
