import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FerlunLogo from "../../images/ferlun-logo.png";
import styles from "./NavigationBar.module.scss";
import { Link } from "react-router-dom";
import { navItems } from "../../constant/navItems";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={FerlunLogo}
                className={`${styles["logo"]}`}
                alt="page logo, cat-man sleeping on huge cat"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {navItems.map((item) => (
                <Nav.Link as={Link} to={item.path}>
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
