import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-light' style={{color: "white"}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-light'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>
                <MDBIcon icon="gem" className="me-3" />
                Ciyana
              </h6>
              <p className='text-light'>
              From fashion to lifestyle essentials, we provide top-notch items at affordable prices, ensuring a seamless shopping experience for every customer.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Useful links</h6>
              <p>
                <a href='#!' className='text-light'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                Categories
                </a>
              </p>
              <p>
                <a href='#!' className='text-light'>
                About Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Contact</h6>
              <p className='text-light'>
                <MDBIcon icon="home" className="me-2" />
                Addis Ababa , Ethiopia
              </p>
              <p className='text-light'>
                <MDBIcon icon="envelope" className="me-3" />
                Email :
              </p>
              <p className='text-light'>
                <MDBIcon icon="phone" className="me-3" /> Phone Number : +251 911 616 158
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: "white" }}>
        © 2024 Copyright : Ciyana
      </div>
    </MDBFooter>
  );
}
