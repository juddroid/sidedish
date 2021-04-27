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
  const [leftArrowButtonState, setLeftArrowButtonState] = useState(false);
  const [rightArrowButtonState, setRightArrowButtonState] = useState(false);
  const [leftSideRestCard, setLeftSideRestCard] = useState(0);
  const [rightSideRestCard, setRightSideRestCard] = useState(
    data.length - displayCardCount
  );

  const eachCardSize = cardSize + cardMargin * 2;
  const displayContainerSize = {
    width: `${
      (cardSize + cardMargin * 2) * displayCardCount - cardMargin * 2
    }px`,
    height: `${cardSize + cardMargin * 4}px`,
  };

  const arrowButtonDisableToggle = (state) => {
    return state ? false : true;
  };

  const handleClickLeftButton = () => {
    if (leftSideRestCard < displayCardCount) {
      const restCardCount = leftSideRestCard % displayCardCount;
      setPosition(position + eachCardSize * restCardCount);
      setLeftSideRestCard(leftSideRestCard - restCardCount);
      setRightSideRestCard(rightSideRestCard + restCardCount);
      leftSideRestCard <= 0 &&
        setLeftArrowButtonState(arrowButtonDisableToggle(leftArrowButtonState));
      return;
    }
    setPosition(position + eachCardSize * displayCardCount);
    setLeftSideRestCard(leftSideRestCard - displayCardCount);
    setRightSideRestCard(rightSideRestCard + displayCardCount);
    setLeftArrowButtonState(arrowButtonDisableToggle());
    leftSideRestCard <= 0 &&
      setLeftArrowButtonState(arrowButtonDisableToggle());
  };

  const handleClickRightButton = () => {
    if (rightSideRestCard < displayCardCount) {
      const restCardCount = rightSideRestCard % displayCardCount;
      setPosition(position - eachCardSize * restCardCount);
      setRightSideRestCard(rightSideRestCard - restCardCount);
      setLeftSideRestCard(leftSideRestCard + restCardCount);
      rightSideRestCard <= 0 &&
        setRightArrowButtonState(
          arrowButtonDisableToggle(rightArrowButtonState)
        );
      return;
    }
    setPosition(position - eachCardSize * displayCardCount);
    setRightSideRestCard(rightSideRestCard - displayCardCount);
    setLeftSideRestCard(leftSideRestCard + displayCardCount);
    rightSideRestCard <= 0 &&
      setRightArrowButtonState(arrowButtonDisableToggle());
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
          leftArrowButtonState,
          rightArrowButtonState,
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
  border: 1px solid rebeccapurple;
  border-radius: 10px;

  margin: 80px;
`;
const RaccoonCarouselContainer = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: ${({ cardMargin }) => `${cardMargin - 1}px`};
  left: ${({ position, cardMargin }) => `${position - cardMargin}px`};
  transition: all ease-in-out 0.4s;
`;
