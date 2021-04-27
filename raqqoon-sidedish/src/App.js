import Header from 'components/Header';
import Main from 'components/Main';
import './reset.css';
import styled from 'styled-components';
import Detail from 'components/detail/Detail';
import { useState } from 'react';
import { NONE } from './const';
import RaccoonCarousel from 'components/raccoonCarousel/RaccoonCarousel';

const App = () => {
  const [modalState, setModalState] = useState(NONE);
  const [modalData, setModalData] = useState({
    hash: ``,
    title: ``,
  });

  const carouselList = [
    { data: '1' },
    { data: '2' },
    { data: '3' },
    { data: '4' },
    { data: '5' },
    { data: '6' },
    { data: '7' },
    { data: '8' },
    { data: '9' },
    { data: '10' },
  ];
  const option = {
    cardSize: 200,
    cardMargin: 10,
    displayCardCount: 3,
    buttonType: 'default',
    buttonSize: 36,
  };
  return (
    <AppContainer className="App">
      <Header />
      <Main {...{ modalData, setModalState, setModalData }} />
      <Detail {...{ modalData, modalState, setModalState, setModalData }} />
      <RaccoonCarousel option={option} data={carouselList} />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
`;
