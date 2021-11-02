import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import LauncherCard from './LauncherCard';

export interface Launcher {
  _id: string;
  details: string;
  flight_number: number;
  is_tentative: boolean;
  launch_date_local: string;
  mission_name: string;
  launch_year: number;
  launch_window: number;
  launch_success: boolean;
  upcoming: boolean;
  launch_site: {
    site_id: string;
    site_name: string;
  };
  ships: string[];
  rocket: {
    rocket_name: string;
  };
  links: {
    mission_patch: string;
    mission_patch_small: string;
    video_link: string;
    article_link: string;
  };
}

const pageSize: number = 10;

const LaunchesList: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [data, setData] = useState<Launcher[]>([]);

  const getTableData = (pageNo: number) => {
    axios
      .get<Launcher[]>(
        `https://api.spacexdata.com/v3/launches?limit=${pageSize}&offset=${
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
      {data?.map((launcher) => (
        <LauncherCard key={launcher._id} item={launcher} />
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

export default LaunchesList;
