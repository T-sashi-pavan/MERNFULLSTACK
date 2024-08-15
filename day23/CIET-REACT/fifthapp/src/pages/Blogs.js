import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Blogs() {
  return (
    <Card style={{ width: '18rem' ,textAlign:'center'}}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg" width="50%" 
 />
      <Card.Body>
        <Card.Title>Peter parker</Card.Title>
        <Card.Text >
                  professionals to help you pursue your personal and professional goals: 'Choose a job you love and you will never have to work a day in your life. ' — Confucius. 'Success is not final, failure is not fatal: it is the courage to continue that counts ... justo odio

        </Card.Text>
        <Button variant="primary">Resume</Button>
      </Card.Body>
    </Card>
  );
}

export default Blogs;
