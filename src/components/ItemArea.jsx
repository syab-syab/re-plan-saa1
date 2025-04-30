import React from 'react'
import styled from 'styled-components'

// 横スクロールにする
// overflow-x: auto;
// display: flex;

const AllWrapper = styled.div`
  margin: 3vw 0;
  padding: 0 1vw 0 4vw;
  position: relative;
  z-index: 1;
  transition: all 1s ease-in;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;
`

const Title = styled.h3`
  font-weight: normal;
  font-size: 27px;
`

const ScrollWrapper = styled.div`
  border: 1px solid transparent;
`

const ItemUl = styled.div`
  overflow-x: auto;
  align-items: center;
  display: flex;
`

const Card = styled.div`
margin-left: 48px;
  width: 200px;
  height: 288px;
  padding: 20px;
  position: relative;
  border: 1px solid black;
  border-radius: 8px;
`

const Icon = styled.img`
  height: 92px;
  margin-bottom: 24px;
`

const CardTitle = styled.h4`
  font: normal normal 400 18px / 24px sans-serif;
  color: #202124;
  margin: 0 0 8px;
  padding: 0;
  height: 72px;
  overflow: hidden;
`

const CardSentence = styled.div`
  padding-left: 0;

  font: normal normal 400 12px / 18px sans-serif;
  color: var(--label-color);
  display: flex;
  width: -moz-fit-content;
  width: fit-content;
}
`

const array = [
  1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
]

const ItemArea = () => {
  return (
    <AllWrapper>
      <TitleWrapper>
        <Title>
          コンテンツ
        </Title>
      </TitleWrapper>
      <ScrollWrapper>
        <ItemUl>
          {
            array.map((a) => {
              return (
            <Card key={a}>
              {/* imgにアイコンとかを入れる */}
              <Icon src="./icon.png" alt="" />
              <CardTitle>Card Title</CardTitle>
              <div>
                <CardSentence>
                  Card Sentence
                </CardSentence>
              </div>
            </Card>
              )
            } )
          }

        </ItemUl>
      </ScrollWrapper>
    </AllWrapper>
  )
}

export default ItemArea