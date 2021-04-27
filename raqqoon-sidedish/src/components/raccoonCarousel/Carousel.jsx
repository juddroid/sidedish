import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const CarouselCard = ({ cardSize, cardMargin, contents }) => {
  return (
    <CarouselCardStyle {...{ cardSize, cardMargin }}>
      {contents}
    </CarouselCardStyle>
  );
};
const CarouselCardList = ({ cardSize, cardMargin, data }) => {
  return (
    <CarouselCardListStyle>
      {data.map((el) => (
        <CarouselCard
          {...{ cardSize, cardMargin }}
          contents={el.data}
          key={uuidv4()}
        />
      ))}
    </CarouselCardListStyle>
  );
};

const Carousel = ({ cardSize, cardMargin, data }) => {
  return (
    <CarouselWrapper>
      <CarouselCardList {...{ cardSize, cardMargin, data }} />
    </CarouselWrapper>
  );
};

export default Carousel;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  outline: 1px solid blue;
  display: flex;
  justify-content: center;
`;

const CarouselCardListStyle = styled.div`
  display: flex;
  justify-content: space-between;
  outline: 1px solid green;
  width: 100%;
  height: 100%;
`;

const CarouselCardStyle = styled.div`
  width: ${({ cardSize }) => `${cardSize}px`};
  height: ${({ cardSize }) => `${cardSize}px`};
  background: tomato;
  opacity: 50%;
  outline: 1px solid #222;

  margin: ${({ cardMargin }) => `${cardMargin}px`};
`;
