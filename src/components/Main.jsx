import React from 'react'
import styled from 'styled-components'
import CatchCopy from './CatchCopy'
import ItemArea from './ItemArea'


const Wrapper = styled.main`
  
`

const Main = () => {
  return (
    <Wrapper>
      <CatchCopy />
      <ItemArea />
      <ItemArea />
      <ItemArea />
    </Wrapper>
  )
}

export default Main