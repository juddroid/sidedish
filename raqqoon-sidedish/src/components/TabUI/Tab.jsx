import { ACTIVE } from 'const';
import styled from 'styled-components';

const Tab = ({ title, activeState }) => {
  return (
    <TabBoxDiv activeState={activeState}>
      <span>{title || '할인특가 세트상품'}</span>
    </TabBoxDiv>
  );
};

export default Tab;

const TabBoxDiv = styled.div`
  /* 기획서에서는 양끝만 201px */
  width: 184px;
  height: 58px;
  background: ${(props) =>
    props.activeState === ACTIVE ? `#eef4fa` : `#f5f5f7`};
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  & + div {
    margin-left: 8px;
  }

  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: ${(props) => (props.activeState === ACTIVE ? `#333` : `#828282`)};
  }
`;