import type { NextPage } from 'next';
import { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import LaunchesList from '../components/LaunchesList';
import RocketList from '../components/RocketList';

const Home: NextPage = () => {
  const [active, setActive] = useState('launches');
  return (
    <MainContainer>
      <nav className="fixed top-0 left-0 w-full px-8 pt-2 shadow-md z-20">
        <div className="-mb-px flex justify-center">
          <div
            onClick={() => setActive('launches')}
            className={clsx(
              active === 'launches' ? 'border-red-900' : 'border-transparent',
              'no-underline text-white border-b-2 uppercase tracking-wide font-bold text-xs py-3 mr-8 cursor-pointer'
            )}
          >
            Launches
          </div>
          <div
            onClick={() => setActive('rockets')}
            className={clsx(
              active === 'rockets' ? 'border-red-900' : 'border-transparent',
              'no-underline text-white border-b-2 uppercase tracking-wide font-bold text-xs py-3 mr-8 cursor-pointer'
            )}
          >
            Rockets
          </div>
        </div>
      </nav>
      <div className="w-full flex items-center justify-center p-2 md:p-8 pt-20">
        <div className="w-full md:w-8/12 lg:w-6/12 min-h-screen rounded-lg p-0 md:p-6">
          {active === 'launches' ? <LaunchesList /> : <RocketList />}
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  background-color: #1a202c;

  nav {
    background-color: #1a202c;
  }
`;
