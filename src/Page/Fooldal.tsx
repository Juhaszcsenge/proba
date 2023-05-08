import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';


const Cards = () => {
    return (
      <Container style={{padding:"40px", backgroundColor: "#E5F9DB"}}>
        <Row>
          <Col lg='6' md='6'>
            <div>
              <Card.Img variant="top" src="/mazanyi-judit.jpg" alt='Judit' style={{width: "200px", height:"290px"}} />
            </div>
          </Col>
          <Col lg='6' md='6'>
              <div>
                <Card.Title style={{padding: "5px"}}>Szakmai életút</Card.Title>
                <Card.Text>
                Az ELTE Bölcsészkarán végeztem pszichológusként 1997-ben, 
                majd 2008-ban szereztem meg a tanácsadó szakpszichológusi végzettséget krízis tanácsadás szakirányon. 
                Főállásban pályaalkalmassági szakterületen dolgozom, itt szupervízori és szakértői feladatokat is ellátok. 
                Emellett  tréning csoportokat vezetek és egyéni tanácsadást tartok.<br></br>
                <Card.Title style={{padding: "10px"}}> További szakmai végzettségek</Card.Title>
                <ul>
                    <li>autogén tréning képzés</li>
                    <li>pszichoterapeuta képzés</li>
                    <li>relaxáció-meditáció-imagináció képzés</li>
                </ul>
                </Card.Text>
                </div>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Cards;