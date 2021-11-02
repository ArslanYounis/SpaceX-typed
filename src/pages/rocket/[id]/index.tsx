import axios from 'axios';
import moment from 'moment';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { CrossIcon, TickIcon } from '../../../components/icons';
import { Rocket } from '../../../components/RocketList';

interface PropsType {
  rocket: Rocket;
}

const RocketDetail: FC<PropsType> = ({ rocket }) => {
  return (
    <MainContainer>
      <ImageContainer>
        <Image
          src={rocket?.flickr_images[0]}
          layout="fill"
          alt="rocket-image"
        />
      </ImageContainer>
      <div className="flex items-center justify-center">
        <div className="container py-10 px-2">
          <div>
            <div className="flex items-center">
              <h2 className="font-bold text-2xl text-white">
                {rocket?.rocket_name}
              </h2>

              <a
                className="text-blue-500 font-normal text-sm hover:underline ml-3"
                href={rocket?.wikipedia}
                target="_blank"
              >
                wikipedia Link
              </a>
            </div>

            <p className="text-blue-500 mb-3">
              {moment(rocket?.first_flight).format('llll')}
            </p>
          </div>
          <p className="text-gray-500">{rocket?.description}</p>
          <div className="mt-10 flex w-full items-center justify-center">
            <div className="w-full md:w-9/12 lg:w-7/12">
              <h2 className="font-bold text-2xl text-white mb-4">
                Specifications
              </h2>
              <div className="w-full border border-black rounded-lg flex flex-col">
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">Company</p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {rocket?.company}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">Active</p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    {rocket?.active ? (
                      <TickIcon className="w-6 h-6 text-green-900" />
                    ) : (
                      <CrossIcon className="w-6 h-6 text-red-900" />
                    )}
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Rocket Type
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {rocket?.rocket_type}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">Stages</p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {rocket?.stages}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Boosters
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {rocket?.boosters}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Cost Per Launch
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {rocket?.cost_per_launch.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Success Rate
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {`${rocket?.success_rate_pct} %`}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">Country</p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {rocket?.country}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      First Flight
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {rocket?.first_flight}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">Height</p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {`${rocket?.height?.meters} meter`}
                    </p>
                  </div>
                </div>
                <div className="w-full flex border-b border-black">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">
                      Diameter
                    </p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {`${rocket?.diameter?.meters} meter`}
                    </p>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="px-3 py-2 w-6/12 border-r border-black">
                    <p className="font-bold text-blue-500 text-base">Mass</p>
                  </div>
                  <div className="px-3 py-2 w-6/12 flex items-center justify-center">
                    <p className="font-bold text-white text-base">
                      {`${rocket?.mass?.kg} Kg`}
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
`;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get<Rocket>(
    `https://api.spacexdata.com/v3/rockets/${params?.id}`
  );

  return { props: { rocket: res.data } };
};
