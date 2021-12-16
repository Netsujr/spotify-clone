import React from 'react';
import styled from "styled-components";

const Player = ({ spotify }) => {
  return (
    <PlayerContainer>
      <PlayerBody>
        <Sidebar>
          <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
          <h1>Im the sidebar</h1>
        </Sidebar>
        <Body>
          <h1>Im the Body</h1>
        </Body>
      </PlayerBody>
      <Footer>
        <h1>Im the footer</h1>
      </Footer>
    </PlayerContainer>
  );
};

export default Player;

const PlayerContainer = styled.div`

  `

const PlayerBody = styled.div`
  display: flex;
  `

const Body = styled.div`
  // border: 1px solid red;
  flex: 0.8;
  // background-color: rgb(91, 87, 115);
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  height: 100vh;
  color: white;
  padding: 30px;
  `

const Sidebar = styled.div`
  // border: 1px solid black;
  height: 100vh;
  flex: 0.2;
  background-color: #040404;
  color: white;
  height: 100vh;
  min-width: 230px;
  padding: 0px 10px;

  &:img {
    object-fit: contain;
    height: 70px;
  }
  `
const Footer = styled.div`
  // border: 1px solid blue;
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 20px;

  `