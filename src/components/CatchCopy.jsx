import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 90px 36px 32px;
  text-align: left;
`

const LargeSentence = styled.h2`
  font: normal normal 400 40px / 56px sans-serif;
  letter-spacing: .5px;
  margin: 32px 0 7px;
`

const Sentence = styled.p`
  font: normal normal 400 18px / 24px sans-serif;
  letter-spacing: -.3px;
  margin: 0;
  max-width: 768px;
`

const CatchCopy = () => {
  return (
    <Wrapper>
      <LargeSentence>
        便利なツール系アプリまとめ
      </LargeSentence>
      <Sentence>
        随時追加予定。お友達にもここを教えてあげて下さいね。
      </Sentence>
    </Wrapper>
  )
}

export default CatchCopy