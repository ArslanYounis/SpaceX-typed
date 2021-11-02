import axios from 'axios';
import moment from 'moment';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { CrossIcon, TickIcon } from '../../../components/icons';
import { Launcher } from '../../../components/LaunchesList';
import { Rocket } from '../../../components/RocketList';

interface PropsType {
  launcher: Launcher;
}

const RocketDetail: FC<PropsType> = ({ launcher }) => {
  return (
    <MainContainer>
      <ImageContainer>
        <Image
          className="object-contain"
          src={launcher?.links?.mission_patch}
          layout="fill"
          alt="rocket-image"
        />
      </ImageContainer>
      <div className="flex items-center justify-center">
        <div className="container py-10 px-2">
          <div>
            <div className="flex items-center">
              <h2 className="font-bold text-2xl text-white">
                {launcher?.mission_name}
              </h2>

              <a
                className="text-blue-500 font-normal text-sm hover:underline ml-3"
                href={launcher.links?.article_link}
                target="_blank"
              >
                Article Link
              </a>
            </div>

            <p className="text-blue-500 mb-3">
              {moment(launcher?.launch_date_local).format('llll')}
            </p>
          </div>
          <p className="text-gray-500">{launcher?.details}</p>
          <div className="mt-10 flex w-full items-center justify-center">
            <div className="w-full md:w-9/12 lg:w-7/12">
              <h2 className="font-bold text-2xl text-white mb-4">
                Specifications
              </h2>
              <div className="w-full border border-black rounded-lg flex flex-col">
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Mission Name
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {launcher?.mission_name}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Launch Success
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    {launcher?.launch_success ? (
                      <TickIcon className="w-6 h-6 text-green-900" />
                    ) : (
                      <CrossIcon className="w-6 h-6 text-red-900" />
                    )}
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Launch Year
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {launcher?.launch_year}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Launch Window
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {launcher?.launch_window}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Launch Site
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {launcher?.launch_site?.site_name}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">Ships</p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {launcher?.ships?.toString()}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Rocket Name
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {launcher?.rocket?.rocket_name}
                    </p>
                  </div>
                </div>
                <div className="w-full flex ">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Flight Number
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {launcher?.flight_number}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default RocketDetail;

const MainContainer = styled.div`
  width: 100%;
  background-color: #2d3748;
  min-height: 100vh;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  background-color: white;
  object-fit: contain;
`;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get<Rocket>(
    `https://api.spacexdata.com/v3/launches/${params?.id}`
  );

  return { props: { launcher: res.data } };
};
