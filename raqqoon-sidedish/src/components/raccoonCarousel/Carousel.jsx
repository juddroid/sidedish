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
  display: flex;
  justify-content: center;
`;

const CarouselCardListStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const CarouselCardStyle = styled.div`
  width: ${({ cardSize }) => `${cardSize}px`};
  height: ${({ cardSize }) => `${cardSize}px`};
  background: #e5e5e5;
  opacity: 50%;
  border: 1px solid #222;
  border-radius: 10px;
  margin: ${({ cardMargin }) => `${cardMargin}px`};

  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 24px;
  font-weight: 700;
`;
