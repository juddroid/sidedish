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
  const eachCardSize = cardSize + cardMargin * 2;

  const handleClickLeftButton = () => {
    setPosition(position + eachCardSize * displayCardCount);
  };
  const handleClickRightButton = () => {
    setPosition(position - eachCardSize * displayCardCount);
  };

  return (
    <Wrapper>
      <DisplayContainer {...{ cardSize, cardMargin, displayCardCount }}>
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
  width: ${({ cardSize, cardMargin, displayCardCount }) =>
    `${(cardSize + cardMargin * 2) * displayCardCount - cardMargin * 2}px`};
  height: ${({ cardSize, cardMargin }) => `${cardSize + cardMargin * 2}px`};
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
