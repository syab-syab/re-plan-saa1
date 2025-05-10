import React from 'react'
import styled from 'styled-components'

// 横長の画面では2カラムにする
// 右にプロフィールとかで左に記事

// 上のmarginをある程度取らないとヘッダーに被る
const Wrapper = styled.main`
  margin-top: 90px;
  color: white;
`

export const Article = () => {
  return (
    <Wrapper>
      <p>test</p>
    </Wrapper>
  )
}
