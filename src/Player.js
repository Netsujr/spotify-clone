import React from 'react';
import styled from "styled-components";

const Player = ({ spotify }) => {
  return (
    <PlayerContainer>
      <PlayerBody>
        <Sidebar>
          <h1>Im the sidebar</h1>
        </Sidebar>
        <Body>
          <h1>Im the Body</h1>
        </Body>
      </PlayerBody>
      <Footer />
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
  border: 1px solid red;
  flex: 0.8;

  `

const Sidebar = styled.div`
  border: 1px solid black;
  height: 100vh;
  flex: 0.2;

  `
const Footer = styled.div`

  `
