import styled from 'styled-components';
import Img from 'components/card/Img';
import Info from 'components/card/Info';
import Price from 'components/card/Price';

const CarouselCard = ({
  cardSize,
  item,
  setModalState,
  modalData,
  setModalData,
  detail_hash,
}) => {
  console.log(item);

  return (
    <CardBoxDiv>
      <Img
        {...{
          cardSize,
          setModalData,
          setModalState,
          modalData,
          detail_hash,
        }}
        image={item}
      />
      <Info name={null} body={null} />
      <Price normal={null} discount={null} />
    </CardBoxDiv>
  );
};

export default CarouselCard;

const CardBoxDiv = styled.div`
  width: fit-content;
  margin: 10px 5px;

  &:first-child {
    margin-left: 10px;
  }

  &:last-child {
    margin-right: 10px;
  }
`;

const TagBoxDiv = styled.div`
  display: flex;
`;
