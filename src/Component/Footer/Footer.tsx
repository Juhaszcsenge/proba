import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor: "#F7FFE5"}} className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Egyéni konzultációk</h5>
            <li>FELNŐTTEKNEK</li>
            <li>EGYEDÜLÁLLÓKNAK</li>
            <li>FÉRFIAKNAK</li>
            <li>KAMASZOKNAK</li>
            <li>FÜGGŐSÉGEKRE</li>
          </MDBCol>

          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Páros konzultációk</h5>
            <li>(NEM CSAK) ESKÜVŐ ELŐTT</li>
            <li>KONZULTÁCIÓ PÁRKAPCSOLATI PROBLÉMÁKRA</li>
            <li>KONZULTÁCIÓ MEGCSALÁSRA</li>
            <li>KONZULTÁCIÓ VÁLÁSNÁL ÉS PATCHWORK CSALÁDOKNAK</li>
          </MDBCol>

          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Kurzusok</h5>
            <li>ONLINE KURZUSOK</li>
            <li>EGYEDÜLÁLLÓKNAK</li>
            <li>PÁROKNAK</li>
          </MDBCol>

          
          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Kapcsolat</h5>
            <li>1037 Budapest, Remete köz 20.</li>
            <li>Tel.: +3670 298 3298</li>
            <li>faakeemail@fake.com</li>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}