import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import styled from 'styled-components';

const DefaultButton = ({
  buttonSize,
  cardSize,
  cardMargin,
  displayCardCount,
  handleClickLeftButton,
  handleClickRightButton,
  leftArrowButtonState,
  rightArrowButtonState,
}) => {
  return (
    <>
      <LeftButtonDiv
        {...{ cardSize, cardMargin, displayCardCount, buttonSize }}
        onClick={handleClickLeftButton}
        disabled={leftArrowButtonState}
      >
        <IoChevronBackOutline size={buttonSize} color={'rebeccapurple'} />
      </LeftButtonDiv>
      <RightButtonDiv
        {...{ cardSize, cardMargin, displayCardCount, buttonSize }}
        onClick={handleClickRightButton}
        disabled={rightArrowButtonState}
      >
        <IoChevronForwardOutline size={buttonSize} color={'rebeccapurple'} />
      </RightButtonDiv>
    </>
  );
};
const CustomButton = () => {
  return <div></div>;
};

const CarouselButton = ({
  buttonType,
  buttonSize,
  cardSize,
  cardMargin,
  displayCardCount,
  handleClickLeftButton,
  handleClickRightButton,
  leftArrowButtonState,
  rightArrowButtonState,
}) => {
  return {
    default: (
      <DefaultButton
        {...{
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
    ),
    custom: <CustomButton />,
  }[buttonType];
};

export default CarouselButton;

const StyledArrowButton = styled.button`
  position: absolute;
  top: ${({ cardSize, cardMargin }) =>
    `${(cardSize + cardMargin * 2) / 2 - 20}px`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ buttonSize }) => `${buttonSize + 10}px`};
  height: ${({ buttonSize }) => `${buttonSize + 10}px`};
  border-radius: 10px;
  border: none;
  background: none;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: all ease-in-out 0.4s;
  }
  &:disabled {
    opacity: 50%;
    background: none;
  }
`;

const LeftButtonDiv = styled(StyledArrowButton)`
  left: 40px;
`;

const RightButtonDiv = styled(StyledArrowButton)`
  left: ${({ cardSize, cardMargin, displayCardCount }) =>
    `${
      45 + 40 + (cardSize + cardMargin * 2) * displayCardCount - cardMargin * 2
    }px`};
`;
