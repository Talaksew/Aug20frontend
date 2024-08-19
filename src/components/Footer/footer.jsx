import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="footer-title">About Us</h2>
            <p>
              We offer the best deals and special offers for historical places,
              events, and much more. Discover and explore with us.
            </p>
          </div>


          <div className="footer-section contact">
            <h2 className="footer-title">Contact Us</h2>
            <p>
              <strong>Email:</strong> info@yourwebsite.com
            </p>
            <p>
              <strong>Phone:</strong> +25190980059

            </p>
            <div className="socials">
              <a href="#">
                <FacebookIcon style={{ color: '#3b5998' }} />
              </a>
              <a href="#">
                <TwitterIcon style={{ color: '#00acee' }} />
              </a>
              <a href="#">
                <InstagramIcon style={{ color: '#C13584' }}/>
              </a>
              <a href="#">
                <LinkedInIcon style={{ color: '#0e76a8' }}/>
              </a>
              <a href="#">
                <TelegramIcon style={{ color: '#0088cc' }}/>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
