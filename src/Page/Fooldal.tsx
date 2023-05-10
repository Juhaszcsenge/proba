import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';


const Cards = () => {
    return (
      <Container style={{marginTop:"70px", backgroundColor: "#E5F9DB", borderRadius:"10px", padding: " 40px"}}>
        <Row>
          <Col lg='6' md='6'>
            <div style={{ display: 'flex', alignItems: 'center',  justifyContent: 'center'  }}>
              <Card.Img variant="top" src="/mazanyi-judit.jpg" alt='Judit' className="border-0" style={{width: "250px", height:"300px", 
              marginRight: "-5px", marginTop: "20px", marginBottom: "20px", borderRadius: "5px"}} />
            </div>
          </Col>
          <Col lg='6' md='6'>
              <div>
                <Card.Title style={{padding: "5px", marginTop: "20px", marginBottom:"20px"}}>Szakmai életút</Card.Title>
                <Card.Text>
                Az ELTE Bölcsészkarán végeztem pszichológusként 1997-ben, 
                majd 2008-ban szereztem meg a tanácsadó szakpszichológusi végzettséget krízis tanácsadás szakirányon. 
                Főállásban pályaalkalmassági szakterületen dolgozom, itt szupervízori és szakértői feladatokat is ellátok. 
                Emellett  tréning csoportokat vezetek és egyéni tanácsadást tartok.<br></br>
                <Card.Title style={{margin: "10px"}}> További szakmai végzettségek</Card.Title>
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