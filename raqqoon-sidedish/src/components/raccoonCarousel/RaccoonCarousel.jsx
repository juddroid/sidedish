import { useState } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import CarouselButton from './CarouselButton';

const RaccoonCarousel = ({ option, data }) => {
  const {
    cardSize,
    cardMargin,
    displayCardCount,
    buttonType,
    buttonSize,
  } = option;

  const [position, setPosition] = useState(0);
  const [leftSideRestCard, setLeftSideRestCard] = useState(0);
  const [rightSideRestCard, setRightSideRestCard] = useState(
    data.length - displayCardCount
  );

  const eachCardSize = cardSize + cardMargin * 2;
  const displayContainerSize = {
    width: `${
      (cardSize + cardMargin * 2) * displayCardCount - cardMargin * 2
    }px`,
    height: `${cardSize + cardMargin * 2}px`,
  };

  const handleClickLeftButton = () => {
    if (leftSideRestCard <= 0) return console.log('left disabled');
    if (leftSideRestCard < displayCardCount) {
      const restCardCount = leftSideRestCard % displayCardCount;
      setPosition(position + eachCardSize * restCardCount);
      setLeftSideRestCard(leftSideRestCard - restCardCount);
      setRightSideRestCard(rightSideRestCard + restCardCount);
      return;
    }
    setPosition(position + eachCardSize * displayCardCount);
    setLeftSideRestCard(leftSideRestCard - displayCardCount);
    setRightSideRestCard(rightSideRestCard + displayCardCount);
    console.log(leftSideRestCard, rightSideRestCard);
  };
  const handleClickRightButton = () => {
    if (rightSideRestCard <= 0) return console.log('right disabled');
    if (rightSideRestCard < displayCardCount) {
      const restCardCount = rightSideRestCard % displayCardCount;
      setPosition(position - eachCardSize * restCardCount);
      setRightSideRestCard(rightSideRestCard - restCardCount);
      setLeftSideRestCard(leftSideRestCard + restCardCount);
      return;
    }
    setPosition(position - eachCardSize * displayCardCount);
    setRightSideRestCard(rightSideRestCard - displayCardCount);
    setLeftSideRestCard(leftSideRestCard + displayCardCount);
    console.log(leftSideRestCard, rightSideRestCard);
  };

  return (
    <Wrapper>
      <DisplayContainer {...{ displayContainerSize }}>
        <RaccoonCarouselContainer {...{ position, cardMargin }}>
          <Carousel {...{ cardSize, cardMargin, data }} />
        </RaccoonCarouselContainer>
      </DisplayContainer>
      <CarouselButton
        {...{
          buttonType,
          buttonSize,
          cardSize,
          cardMargin,
          displayCardCount,
          handleClickLeftButton,
          handleClickRightButton,
        }}
      />
    </Wrapper>
  );
};

export default RaccoonCarousel;

const Wrapper = styled.div`
  position: relative;
`;

const DisplayContainer = styled.div`
  position: relative;
  width: ${({ displayContainerSize }) => displayContainerSize.width};
  height: ${({ displayContainerSize }) => displayContainerSize.height};
  overflow: hidden;
  outline: 1px solid blue;
  background: yellow;
  margin: 80px;
`;
const RaccoonCarouselContainer = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 0;
  left: ${({ position, cardMargin }) => `${position - cardMargin}px`};
  outline: 1px solid red;
  transition: all ease-in-out 0.4s;
`;
