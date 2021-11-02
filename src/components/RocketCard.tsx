import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import moment from 'moment';
import { truncate } from 'lodash';
import { Rocket } from './RocketList';
import { useRouter } from 'next/router';

interface PropsInterface {
  item: Rocket;
}

const RocketCard: FC<PropsInterface> = ({ item }) => {
  const router = useRouter();
  return (
    <MainContainer
      className="w-full shadow-md h-48 mb-6 flex rounded-sm cursor-pointer"
      onClick={() => router.push(`/rocket/${item?.rocket_id}`)}
    >
      <div className="w-4/12 p-2">
        <div className="relative flex-1 w-full h-full">
          <Image
            src={item?.flickr_images[0]}
            alt="mission_patch"
            layout="fill"
          />
        </div>
      </div>
      <div className="w-8/12 p-3">
        <h2 className="font-bold text-base text-white">{item?.rocket_name}</h2>
        <p className="text-blue-500 mb-3">
          {moment(item?.first_flight).format('llll')}
        </p>
        <p className="text-gray-500">
          {truncate(item?.description, { separator: '...', length: 170 })}
        </p>
      </div>
    </MainContainer>
  );
};

export default RocketCard;

const MainContainer = styled.div`
  background-color: #2d3748;
`;
