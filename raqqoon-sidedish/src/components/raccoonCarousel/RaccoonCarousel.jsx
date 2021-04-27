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

  const handleClickLeftButton = () => {
    console.log('left');
  };
  const handleClickRightButton = () => {
    console.log('Right');
  };

  return (
    <Wrapper>
      <DisplayContainer {...{ cardSize, cardMargin, displayCardCount }}>
        <RaccoonCarouselContainer>
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
    `${(cardSize + cardMargin * 2) * displayCardCount}px`};
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
  left: 0;
  outline: 1px solid red;
`;
