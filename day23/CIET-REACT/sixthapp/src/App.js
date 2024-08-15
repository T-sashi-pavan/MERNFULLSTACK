import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col> <form id="registerForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2><br />
        <div style={{ display: 'grid', justifyContent: 'space-evenly',border:'10px solid',  padding: '10px 10px 10px 15px' }}>
          <div style={{ borderStyle: 'ridge', padding: '40px' }}>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required /><br /><br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={() => this.login()}>Login</button>
            </div>
          </div>
        </div>
      </form></Col>
        <Col><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30624.73226259782!2d80.41114541544641!3d16.36929899866637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b1f4c4f0ca5%3A0x3512417a63906027!2sLam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1723099614150!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;