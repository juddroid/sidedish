import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Arrow from 'components/icons/Arrow';

const Carousel = ({ dishList, options: { panelCount, time } }) => {
  const [position, setPosition] = useState(0);
  const outBoxRef = useRef();
  const [restCardCount, setRestCardCount] = useState(null);

  const handleClickArrowBtn = ({ currentTarget }) => {
    const direction = currentTarget.getAttribute('direction');
    const outBoxWidth = outBoxRef.current.clientWidth;
    if (direction === 'RIGHT') return moveRight(outBoxWidth);
    if (direction === 'LEFT') return moveLeft(outBoxWidth);
  };

  const moveRight = (outBoxWidth) => {
    if (restCardCount === 0) return;
    if (restCardCount < panelCount) {
      setRestCardCount(0);
      return setPosition(position - (outBoxWidth / panelCount) * restCardCount);
    }
    setRestCardCount((cardCount) => cardCount - panelCount);
    setPosition(position - outBoxWidth);
  };

  const moveLeft = (outBoxWidth) => {
    if (position >= 0) return;
    const defaultCardCount = dishList.length - panelCount;
    if (restCardCount + panelCount > defaultCardCount) {
      setRestCardCount(defaultCardCount);
      return setPosition(0);
    }
    setRestCardCount((cardCount) => cardCount + panelCount);
    setPosition(position + outBoxWidth);
  };

  useEffect(() => {
    if (restCardCount !== null) return;
    dishList && setRestCardCount(dishList.length - panelCount);
  }, [dishList, panelCount, restCardCount]);

  return dishList ? (
    <>
      <OutBox ref={outBoxRef}>
        <Items position={position} time={time}>
          {dishList}
        </Items>
      </OutBox>
      <Arrow
        size={'L'}
        direction={'RIGHT'}
        onClick={(e) => handleClickArrowBtn(e)}
      />
      <Arrow
        size={'L'}
        direction={'LEFT'}
        onClick={(e) => handleClickArrowBtn(e)}
      />
    </>
  ) : (
    <div>로딩중입니다!!!!!!!</div>
  );
};

export default Carousel;

const OutBox = styled.div`
  margin-top: 2rem;
  overflow: hidden;
  position: relative;
`;

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: ${({ time }) => `transform ${time}s ease-in-out`};
  transform: ${({ position }) => `translateX(${position}px)`};
`;
