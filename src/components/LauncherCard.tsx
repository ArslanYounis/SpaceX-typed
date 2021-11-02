import { FC } from 'react';
import Image from 'next/image';
import { Launcher } from './LaunchesList';
import styled from 'styled-components';
import moment from 'moment';
import { truncate } from 'lodash';
import { useRouter } from 'next/router';

interface PropsInterface {
  item: Launcher;
}

const LauncherCard: FC<PropsInterface> = ({ item }) => {
  const router = useRouter();
  return (
    <MainContainer
      className="w-full shadow-md h-48 min-h-full mb-6 flex rounded-sm cursor-pointer"
      onClick={() => router.push(`/launcher/${item.flight_number}`)}
    >
      <div className="w-4/12 p-2">
        <div className="relative flex-1 w-full h-full">
          <Image
            src={item?.links?.mission_patch}
            alt="mission_patch"
            layout="fill"
          />
        </div>
      </div>
      <div className="w-8/12 p-3">
        <h2 className="font-bold text-base text-white">{item?.mission_name}</h2>
        <p className="text-blue-500 mb-3">
          {moment(item?.launch_date_local).format('llll')}
        </p>
        <p className="text-gray-500">
          {truncate(item?.details, { separator: '...', length: 170 })}
        </p>
      </div>
    </MainContainer>
  );
};

export default LauncherCard;

const MainContainer = styled.div`
  background-color: #2d3748;
`;
