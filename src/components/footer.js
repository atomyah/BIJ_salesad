import { Link } from "gatsby"
import React from "react"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-solid-svg-icons'

import Twitter_Logo_Blue from '../images/Twitter_Logo_Blue.svg'
import Facebook_Logo from '../images/facebook-6.svg'
import YouTube_Logo from '../images/youtube-logo.svg'

const Footer = () => (
    <>
    <style type="text/css">
    {`
    .bg-snow {
      background-color: #eeeeee;
      color: black;
      padding: 20;
    }
    .box {
      padding-right: 5px;
    }
    .box img {
      _vertical-align: middle; /* 画像を垂直に */
    }
    .nav-item.nav-link {
      background-color: aqua;
    }
    `}
    </style>
  <footer className="bg-snow">
    <Container style={{ paddingTop: `1.2rem`, paddingBottom: `0rem` }}>
      <Navbar expand="md">
        <Nav>
            <Nav.Item>
              <div className="box">
                <a href="https://twitter.com/benzoinfojapan" target="_blank" rel="noreferrer noopener">
                  Twitter
                  <img src={Twitter_Logo_Blue} width={28} alt={'Twitter'} />
                </a>
                {`　`}
              </div>
            </Nav.Item>
            <Nav.Item>
              <div className="box">
                <a href="https://www.youtube.com/channel/UCkZs4B_mj2ffOLFWO2TrAbg" target="_blank" rel="noreferrer noopener">
                  YouTube{` `}
                  <img src={YouTube_Logo} width={32} alt={'YouTube'} />          
                </a>
                {`　`}          
              </div>
            </Nav.Item>
            <Nav.Item>
                <Link to="/contact">お問い合わせ（Contact）</Link>
                {`　`} 
            </Nav.Item>
            <Nav.Item>
                <Link to="/privacypolicy">プライバシーポリシー</Link>
            </Nav.Item>
        </Nav>
      </Navbar>
      <Navbar>
          <Nav className="ml-auto">
                © {new Date().getFullYear()}, ベンゾジアゼピン情報センター 
          </Nav>
      </Navbar>
    </Container>
  </footer>
  </>
)


export default Footer
