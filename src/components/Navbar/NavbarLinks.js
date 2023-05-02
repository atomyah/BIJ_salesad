import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faComments,faCamera,faUserMd,faHeart,faBookMedical } from '@fortawesome/free-solid-svg-icons'


const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1.5vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/basics"><FontAwesomeIcon icon={faBookMedical} /> 一般情報</NavItem>
      <NavItem to="/patients"><FontAwesomeIcon icon={faHeart} /> 患者の方へ</NavItem>
      <NavItem to="/doctors"><FontAwesomeIcon icon={faUserMd} /> 医師の方へ</NavItem>
      <NavItem to="/medias"><FontAwesomeIcon icon={faCamera} /> メディアの方へ</NavItem>
      <a href="https://benzofaq.com" target="_blank" rel="noreferrer noopener"
         style={{ width:`120px`, fontSize: `0.9em`}}> 質問フォーラム</a>
    </>
  )
}

export default NavbarLinks