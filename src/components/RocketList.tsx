import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import RocketCard from './RocketCard';

export interface Rocket {
  _id: string;
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    feet: number;
    meters: number;
  };
  first_flight: string;
  rocket_name: string;
  rocket_id: string;
  stages: number;
  rocket_type: string;
  mass: {
    kg: number;
    lb: number;
  };
  flickr_images: string[];
  success_rate_pct: number;
  wikipedia: string;
}

const pageSize: number = 10;

const RocketList: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [data, setData] = useState<Rocket[]>([]);

  const getTableData = (pageNo: number) => {
    axios
      .get<Rocket[]>(
        `https://api.spacexdata.com/v3/rockets?limit=${pageSize}&offset=${
          pageNo * pageSize
        }&id=true`
      )
      .then((res) => {
        if (res.data?.length > 0) {
          if (res.data.length === 10) {
            setHasMore(true);
          } else {
            setHasMore(false);
          }

          const newData = [...data, ...res.data];
          setData(newData);
        } else {
          setHasMore(false);
        }
      });
  };

  useEffect(() => {
    getTableData(page);
  }, [page]);

  return (
    <>
      {data?.map((rocket) => (
        <RocketCard key={rocket._id} item={rocket} />
      ))}

      {hasMore && (
        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => setPage(page + 1)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default RocketList;
