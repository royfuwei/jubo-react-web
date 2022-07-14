import './Footer.scss';
import moment from 'moment';
import { Container, Grid } from '@mui/material';

export const FooterLayout = () => {
  const year = moment().format('Y');
  return (
    <footer>
      <Container sx={{ minWidth: '90vw', marginTop: { xs: '50px', md: '0'}}}>
        {/* Copyright © { year } royfuwei. */}
        <div className='footer'>
          {/* <div className='footer-line'></div>
          <div className='footer-side'>
            © { year } By royfuwei.
          </div> */}
          <div className='footer-line'></div>
          <div className="footer-side">
            <Grid container spacing={{ md: 3, xs: 1}}>
              <Grid item md={4} xs={12}>
                <div className="footer-side-item">
                  <div className="title">
                    Email
                  </div>
                  <div className="value">
                    <a href="mailto:royfuwei@gmail.com">royfuwei@gmail.com</a>
                  </div>
                </div>
              </Grid>
              <Grid item md={4} xs={12}>
                <div className="footer-side-item">
                </div>
              </Grid>
              <Grid item md={4} xs={12}>
                <div className='footer-side-item footer-copyright'>
                  © { year } By royfuwei.
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        
      </Container>
    </footer>
  );
};