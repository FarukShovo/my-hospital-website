import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaHandHoldingHeart } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { handleLogout, user } = useAuth();

  return (
    <div>
      <Navbar variant="dark" bg="primary" expand="md" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <FaHandHoldingHeart></FaHandHoldingHeart> MCGH&DC <span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-3 my-lg-0"
              style={{ maxHeight: "180px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
              <Nav.Link as={Link} to="/book">Book</Nav.Link>
              <Nav.Link as={Link} to="/review">Review</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              {user.email ? (
                <button onClick={handleLogout} className="btn btn-primary">
                  Log out
                </button>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
              <p>{user.displayName}</p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
