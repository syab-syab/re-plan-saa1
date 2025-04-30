import React from 'react'
import styled from 'styled-components';

const Header = styled.header`
  background: #edfffb;
  margin: 0;
  height: 64px;
  box-shadow: 0 2px 6px #0000001f;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`

const TitleWrapper = styled.div`
  padding: 22px 48px 18px 24px;
`

const Title = styled.h1`
  font: normal normal 500 20px / 28px sans-serif;
  letter-spacing: -.8px;
  word-spacing: -3px;
  color: #686c71;
  margin: 0;
`

const HeaderBar = () => {
  return (
    <Header>
      <TitleWrapper>
        <Title>
          Swiss Army Apps
        </Title>        
      </TitleWrapper>

    </Header>
  )
}

export default HeaderBar