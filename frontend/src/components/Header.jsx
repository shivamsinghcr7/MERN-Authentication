import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { useNavigate } from "react-router-dom";
import { logoutCredentials } from "../slices/authSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logoutCredentials());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const profileHandler = async () => {
    try {
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">MERN Auth App</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id="username">
                    <Nav.Link href="/profile">
                      <NavDropdown.Item onClick={profileHandler}>
                        Profile
                      </NavDropdown.Item>
                    </Nav.Link>
                    <Nav.Link href="/logout">
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </Nav.Link>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">
                    <FaSignInAlt className="me-2" />
                    Sign In
                  </Nav.Link>

                  <Nav.Link href="/register">
                    <FaSignOutAlt className="me-2" />
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
