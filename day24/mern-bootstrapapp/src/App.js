import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import Chart from 'chart.js/auto';
import React, { useEffect } from 'react';

function NavScrollExample() {
    useEffect(() => {
    // Destroy any existing charts on canvas
    const destroyChart = (id) => {
      const canvas = document.getElementById(id);
      if (canvas && canvas.chart) {
        canvas.chart.destroy();
      }
    };

    // Chart.js initialization
    destroyChart("myChart");
    destroyChart("myChart1");
    destroyChart("myChart2");
    destroyChart("myChart3");

    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

    const myChart = new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "World Wide Wine Production 2018"
          }
        }
      }
    });
    document.getElementById("myChart").chart = myChart;

    const xValues1 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    const myChart1 = new Chart("myChart1", {
      type: "line",
      data: {
        labels: xValues1,
        datasets: [
          { data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478], borderColor: "red", fill: false },
          { data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000], borderColor: "green", fill: false },
          { data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100], borderColor: "blue", fill: false }
        ]
      },
      options: {
        plugins: {
          legend: { display: false }
        }
      }
    });
    document.getElementById("myChart1").chart = myChart1;

    const xValues2 = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues2 = [55, 49, 44, 24, 15];
    const barColors2 = ["red", "green", "blue", "orange", "brown"];

    const myChart2 = new Chart("myChart2", {
      type: "bar",
      data: {
        labels: xValues2,
        datasets: [{
          backgroundColor: barColors2,
          data: yValues2
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: "World Wine Production 2018"
          }
        }
      }
    });
    document.getElementById("myChart2").chart = myChart2;

    const xyValues3 = [
      { x: 50, y: 7 },
      { x: 60, y: 8 },
      { x: 70, y: 8 },
      { x: 80, y: 9 },
      { x: 90, y: 9 },
      { x: 100, y: 9 },
      { x: 110, y: 10 },
      { x: 120, y: 11 },
      { x: 130, y: 14 },
      { x: 140, y: 14 },
      { x: 150, y: 15 }
    ];

    const myChart3 = new Chart("myChart3", {
      type: "scatter",
      data: {
        datasets: [{
          pointRadius: 4,
          pointBackgroundColor: "rgb(0,0,255)",
          data: xyValues3
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { min: 40, max: 160 },
          y: { min: 6, max: 16 }
        }
      }
    });
    document.getElementById("myChart3").chart = myChart3;

  }, []);
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">ALBERT EINSTEIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{padding:'30px',margin:'30px',backgroundColor: 'pink',display:'flex',justifycontent:'space-evenly'}}>
    <div>
          <Figure>
      <Figure.Image
        width={600}
        height={500}
        alt="171x180"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUp77he3Ul_4Vf-DmzPizxfFVMnceLwZ_2Nw&s"
      />
      
    </Figure>
    </div>
      <div style={{textAlign:'center',paddingLeft:'100px',backgroundColor: 'white'}}>
       <h3>Pose a thought-provoking question or make a bold claim that prompts the reader
        to consider your perspective and learn more about your story. Example: Is it possible to redefine success
        in a world obsessed with material wealth and social status?"</h3>
        </div>
    </div>
    <div style={{padding:'30px',margin:'30px',backgroundColor: 'plum',display:'flex',justifycontent:'space-evenly'}}>
     <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image         width={300}
        height={300} src="https://m.media-amazon.com/images/I/714P1R0qcdL._AC_UF1000,1000_QL80_.jpg" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image         width={300}
        height={300} src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/03/12/FotoJet-1-2958719057.jpg" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image          width={300}
        height={300} src="https://images.booksense.com/images/519/409/9781690409519.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
    </div>
    <div style={{padding:'30px',margin:'30px',backgroundColor: 'skyblue',display:'flex',justifycontent:'space-evenly'}}>
 <Container>
      <Row>    
        <Col>
     <ListGroup>
      <ListGroup.Item><h1>INVENTIONS OF EINSTEIN</h1></ListGroup.Item>
      <ListGroup.Item variant="primary">Bose-einstein condensate</ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        General relativity
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
        Photoelectric effect
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Brownian Motion
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
        Black Holes
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Cosmological constant
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Einstein field equations
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
        Wave–particle duality
      </ListGroup.Item>
    </ListGroup></Col>
    <Col style={{textAlign:'center',paddingLeft:'100px',paddingTop:'40px'}}>
    
         
                  <Image          width={300}
        height={300} src="https://www.scienceshot.com/wp-content/uploads/2024/03/einstein-1.jpg" thumbnail />
         
      </Col>
    </Row>
    </Container>
    </div>
          <h1 style={{textAlign:'center',backgroundColor: 'white'}}>TOP IQ SCIENTISTS</h1>

    <div style={{padding:'30px',margin:'30px',backgroundColor: 'lavender',display:'flex',justifycontent:'space-evenly'}}>
     <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>SCIENTIST NAME</th>
          <th>LAST NAME</th>
          <th>IQ LEVEL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>ALBERT</td>
          <td>EINSTEIN</td>
          <td>250</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ABDUL</td>
          <td>KALAM</td>
          <td>230</td>
        </tr>
        <tr>
          <td>3</td>
          <td>NICOLAS</td>
          <td>TESLA</td>
          <td>220</td>

        </tr>
           <tr>
          <td>4</td>
          <td>THOMAS</td>
          <td>EDISON ALVA</td>
          <td>200</td>

        </tr>

      </tbody>
    </Table>
  
    </div>
     <h1 style={{ textAlign: 'center',background:'plum' }}>FAMOUS CHARTS OF EINSTEIN EQUATIONS</h1>
     <div style={{padding:'30px',margin:'30px',backgroundColor: 'lavender',display:'flex',justifycontent:'space-evenly'}}>
      
      <div className="container  text-black">
        <div className="row" style={{background:'yellow' }}>
          <div className="col">
            <canvas id="myChart" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
          <div className="col">
            <h1>PHOTOELECTRIC EFFECT</h1>
        <i>A short story is a piece of prose fiction. It 
            can typically be read in a single sitting and focuses 
            on a self-contained incident or series of linked incidents, with the
             intent of evoking a single effect or mood. The short story is one of the oldest 
             types of literature and has existed in the form of legends, mythic tales, folk tales, 
             fairy tales, tall tales, fables, and anecdotes in various ancient communities around the world.
              The modern short story developed in the early century.[1]...</i>
                        </div>
        </div>

        <hr />

        <div className="row" style={{background:'coral' }}>
          <div className="col">
            <h1>BLACK HOLES</h1>
            <i>A short story is a piece of prose Hackspire is a statewide initiative to provide engineering students to solve some of the common problems we face in our daily life, and thus inculcate a culture of product innovation and a mindset of real time problem solving fiction...</i>
          </div>
          <div className="col">
            
              <canvas id="myChart1" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
        </div>

        <hr />
        <div className="row" style={{background:'orange' }}>
          <div className="col">
            <canvas id="myChart2" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
          <div className="col">
            <h1>EINSTEIN EQUATIONS</h1>
            <i>A short story is a piece of prose fiction. It 
            can typically be read in a single sitting and focuses 
            on a self-contained incident or series of linked incidents, with the
             intent of evoking a single effect or mood. The short story is one of the oldest 
             types of literature and has existed in the form of legends, mythic tales, folk tales, 
             fairy tales, tall tales, fables, and anecdotes in various ancient communities around the world.
              The modern short story developed in the early century.[1]...</i>
          </div>
        </div>

        <hr/>
        <div className="row" style={{background:'pink' }}>
          <div className="col">
            <canvas id="myChart3" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
          <div className="col">
            <h1>WAVE EQUAVALENT THEORY</h1>
        <i>A short story is a piece of prose fiction. It 
            can typically be read in a single sitting and focuses 
            on a self-contained incident or series of linked incidents, with the
             intent of evoking a single effect or mood. The short story is one of the oldest 
             types of literature and has existed in the form of legends, mythic tales, folk tales, 
             fairy tales, tall tales, fables, and anecdotes in various ancient communities around the world.
              The modern short story developed in the early century.[1]...</i>
                        </div>
        </div>
      </div>
     </div>
     <h1 style={{ textAlign: 'center',background:'plum' }}>PORFOLIO OF ALBERT EINSTEIN </h1>

          <div style={{padding:'100px',margin:'30px',backgroundColor: 'orange',display:'flex',justifycontent:'space-evenly'}}>
          <Container>
      <Row>
        <Col xs={12} md={8}>
           <Image         width={300}
        height={500} src="https://live-production.wcms.abc-cdn.net.au/7d281cbed1fa6b253e3cb6be00223a50?impolicy=wcms_crop_resize&cropH=562&cropW=1000&xPos=0&yPos=0&width=862&height=485" rounded />
        </Col>
        <Col xs={6} md={4}>
        <Image         width={300}
        height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIey1HsVlKoG5V-gFfS2QgBB9TE38KajPJcA&s" rounded />        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row style={{margin:'50px'}}>
        <Col xs={6} md={4} >
        <Image         width={200}
        height={500} src="https://wp.scoopwhoop.com/wp-content/uploads/2021/10/615551bf8a373a1f9294e9a1_94c699b5-26f0-4677-8e78-334fb47b7f2c.jpg" rounded />        </Col>
        <Col xs={6} md={4} style={{paddingLeft:'50px'}}>
        <Image         width={300}
        height={300} src="https://www.openculture.com/wp-content/uploads/2013/01/einstein-and-gandhi-e1357105119213.png" roundedCircle />        </Col>
        <Col xs={6} md={4} style={{paddingLeft:'70px'}}>
        <Image         width={300}
        height={400} src="https://pbs.twimg.com/media/DXy6x7WWsAIzd6w.jpg:large" rounded />        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row style={{padding:'100px',margin:'50px'}}>
        <Col xs={6}> <Image         width={300}
        height={300} src="https://i.insider.com/560b23929dd7cc10008bdf91?width=600&format=jpeg&auto=webp" roundedCircle /></Col>
        <Col xs={6}> <Image         width={300}
        height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNazHjFzJm4mRjcwd9CG9xyUV_ErhYk4tzWp9JMJs751MZIFozXO4ZheSwLk3pd7ZtCME&usqp=CAU" roundedCircle /></Col>
      </Row>
    </Container>
      </div>
        <div style={{padding:'100px',margin:'30px',backgroundColor: 'teal',display:'flex',justifycontent:'space-evenly'}}>
        <Row>
        <Col>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.0702646119603!2d80.4333332751424!3d16.370382684353594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b23d0f761c1%3A0x38b09fed35a46ce5!2sChalapathi%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1723573566321!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
        <Col>
                 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    </div>
     <div className="container-fluid p-5 my-5" style={{ background: 'black' }}>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{ background: 'black' }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ background: 'black' }}>
          {/* Left */}
          <div className="d-none d-lg-block">
            <span>Get connected with us on our social networks:</span>
          </div>
        </section>

        <section style={{ background: 'white' }}>
          <Container className="text-center text-md-start mt-5">
            {/* Grid row */}
            <Row className="mt-3">
              {/* Grid column */}
              <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
                {/* Content */}
                <img
                  src="data:image/png;base64,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"
                  alt="ByteXL Logo"
                  style={{ width: '200px', height: '100px' }}
                />
                <p>© 2021 Copyright:
                  <a className="text-reset fw-bold" href="https://mdbootstrap.com/">ALBERTEINSTEIN.com</a>
                </p>
              </Col>
              {/* Grid column */}

              {/* Grid column */}
              <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
                {/* Links */}
                <h5 className="text-uppercase fw-bold mb-4" style={{ color: 'orange' }}>ALBERTEINSTEIN@COM</h5>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <i className="fa fa-linkedin-square rounded-circle" aria-hidden="true" style={{ fontSize: '25px' }}></i>&nbsp;
                    <i className="fa fa-twitter rounded-circle" aria-hidden="true" style={{ fontSize: '25px' }}></i>&nbsp;
                    <i className="fa fa-facebook-official rounded-circle" aria-hidden="true" style={{ fontSize: '25px' }}></i>&nbsp;
                    <i className="fa fa-instagram rounded-circle" aria-hidden="true" style={{ fontSize: '25px' }}></i>&nbsp;
                  </small>
                </p>
              </Col>
              {/* Grid column */}

              {/* Grid column */}
              <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'orange' }}>
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Home</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Platform</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Careers</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Blogs</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </Col>
              {/* Grid column */}

              {/* Grid column */}
              <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'orange' }}>HEADQUARTERS</h6>
                <p style={{ color: 'grey' }}>
                  KP2 Associates Inc.,<br />
                  4400 State HWY 121,<br />
                  Suite # 300-0088,<br />
                  Lewisville, TX 75056 USA
                </p>
                <p style={{ color: 'white' }}>,dsdcsd,,</p>
                <p style={{ color: 'grey' }}>
                  <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'orange' }}>REGISTERED OFFICE</h6>
                  KP2 Associates Inc.,<br />
                  4400 State HWY 121,<br />
                  Suite # 300-0088,<br />
                  Lewisville, TX 75056 USA
                </p>
              </Col>
              {/* Grid column */}
            </Row>
            {/* Grid row */}
          </Container>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className="text-center p-4" style={{ background: 'white' }}>
          <p style={{ textAlign: 'center', color: 'black' }}>Designed by SASHIPAVAN</p>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
    </>
)
}

export default NavScrollExample;
