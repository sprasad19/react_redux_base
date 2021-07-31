import React from 'react'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {  Container, Nav, Navbar, Row,  } from 'react-bootstrap'
import Main from './Main';
import FaqSections from '../../components/FaqSection/FaqSections';

 const Home = (props) => {
    return (
        <Container fluid className="bg-home">
            <Helmet>
                <title>{"Home"}</title>
                <meta name="description" content="Description of Home" />
            </Helmet>



            <Row>
                <Navbar fixed={"top"}>
                    {/* bg="dark" variant="dark" */}
                    {/* <Container fluid> */}
                    <Navbar.Brand href="#home">Netflix</Navbar.Brand>
                    <Nav className="ms-auto" >
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link> */}
                        <Nav.Item>
                            {/* <Container>
                               <Form.Select size="sm">
    <option>Small select</option>
  </Form.Select>
                               </Container> */}
                        </Nav.Item>
                        <Nav.Item className="nav-login-signup" >
                            {/* <Nav.Link href="#signup">
                                Signup
                            </Nav.Link>/ */}
                            <Nav.Link href="#login">
                                Login
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {/* </Container> */}
                </Navbar>
            </Row>
            <Row>
            <Container className="home-main-center-page">
                <Main />
                </Container>
            </Row>
            <Row>
            <Container className="home-main-center-page">
              
                       <FaqSections />
                   
                </Container>
            </Row>
        </Container>

    )
}

const mapStateToProps = createStructuredSelector({});
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
