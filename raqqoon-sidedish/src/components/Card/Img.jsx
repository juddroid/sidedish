import { MSG_BOTTOM, MSG_TOP, SIZE_MEDIUM } from 'const';
import { useState } from 'react';
import styled from 'styled-components';

const Img = ({ cardSize }) => {
  const [opacitiy, setOpacity] = useState(0);

  const onToggleOpacity = (opacitiy) => {
    if (opacitiy === 0) return setOpacity(100);
    return setOpacity(0);
  };

  return (
    <ImgDiv
      cardSize={cardSize}
      onMouseEnter={() => onToggleOpacity(opacitiy)}
      onMouseLeave={() => onToggleOpacity(opacitiy)}
    >
      <img
        src="http://public.codesquad.kr/jk/storeapp/data/detail/HBDEF/4cce011a4a352c22cd399a60271b4921.jpg"
        alt="img"
      />
      <HoverText cardSize={cardSize} opacitiy={opacitiy} />
    </ImgDiv>
  );
};

const HoverText = ({ cardSize, opacitiy }) => {
  return (
    <HoverTextBoxDiv cardSize={cardSize} opacitiy={opacitiy}>
      <Text message={MSG_TOP} />
      <Line />
      <Text message={MSG_BOTTOM} />
    </HoverTextBoxDiv>
  );
};

const Text = ({ message }) => {
  return (
    <TextDiv>
      <span>{message}</span>
    </TextDiv>
  );
};
const Line = () => {
  return <LineDiv />;
};

export default Img;

const ImgDiv = styled.div`
  position: relative;
  width: ${(props) => (props.cardSize === SIZE_MEDIUM ? '308px' : '384px')};
  height: ${(props) => (props.cardSize === SIZE_MEDIUM ? '308px' : '384px')};
  display: flex;

  img {
    border-radius: 5px;
  }
`;

const HoverTextBoxDiv = styled.div`
  position: absolute;
  padding: 0px;
  display: flex;
  opacity: ${(props) => props.opacitiy};
  width: ${(props) => (props.cardSize === SIZE_MEDIUM ? '308px' : '384px')};
  height: ${(props) => (props.cardSize === SIZE_MEDIUM ? '308px' : '384px')};
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
`;

const TextDiv = styled.div`
  color: #fff;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  margin: 16px 0;
`;
const LineDiv = styled.div`
  width: 90px;
  height: 1px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;