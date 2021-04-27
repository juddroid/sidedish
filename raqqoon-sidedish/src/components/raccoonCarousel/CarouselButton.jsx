import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import styled from 'styled-components';

const DefaultButton = ({
  buttonSize,
  cardSize,
  cardMargin,
  displayCardCount,
  handleClickLeftButton,
  handleClickRightButton,
}) => {
  return (
    <>
      <LeftButtonDiv
        {...{ cardSize, cardMargin, displayCardCount }}
        onClick={handleClickLeftButton}
      >
        <IoChevronBackOutline size={buttonSize} />
      </LeftButtonDiv>
      <RightButtonDiv
        {...{ cardSize, cardMargin, displayCardCount }}
        onClick={handleClickRightButton}
      >
        <IoChevronForwardOutline size={buttonSize} />
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
        }}
      />
    ),
    custom: <CustomButton />,
  }[buttonType];
};

export default CarouselButton;

const LeftButtonDiv = styled.div`
  position: absolute;
  top: ${({ cardSize, cardMargin }) =>
    `${(cardSize + cardMargin * 2) / 2 - 20}px`};
  left: 40px;
  cursor: pointer;
`;

const RightButtonDiv = styled.div`
  position: absolute;
  top: ${({ cardSize, cardMargin }) =>
    `${(cardSize + cardMargin * 2) / 2 - 20}px`};
  left: ${({ cardSize, cardMargin, displayCardCount }) =>
    `${40 * 2 + 5 + (cardSize + cardMargin * 2) * displayCardCount}px`};
  cursor: pointer;
`;
