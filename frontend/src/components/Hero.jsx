import { Container, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
//className='d-flex justify-content-center'
const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-item-center hero-card bg-light w-75 border border-dark border-2">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            This is boilerplate for MERN authentication that stores a JWT in an
            HTTP-Only cookie. It also uses Redux Toolkit and the React Bootstrap
            library.
          </p>

          {/* {!userInfo.name && !userInfo.email ? ( */}
            <div className="d-flex justify-content-center">
              <Button className="me-3" variant="primary" href="/login">
                Sign In
              </Button>

              <Button className="me-3" variant="secondary" href="/register">
                Register
              </Button>
            </div>
           {/* ) : (
             <div className="d-flex justify-content-center p-2 border text-bg-primary fw-bold">
               Hello, {userInfo.name}
             </div>
           )} */}
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
