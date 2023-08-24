import { Spin } from "antd";
import { FC, useEffect, useState } from "react";
import {
  sectorsNames,
  transformedArray,
} from "src/app/features/mocks/sectors.mocks";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SectorItem } from "src/graphql/client";
import SectorsGridWidget from "./pages/sectors.grid.widget";

const SectorsPage: FC = () => {
  const [sectors, setSectors] = useState<SectorItem[]>([]);

  const fetchNames = async (): Promise<SectorItem[]> => {
    return new Promise<SectorItem[]>((resolve) => {
      setTimeout(() => {
        resolve(sectorsNames);
      }, 300);
    });
  };

  const fetchCounts = async (): Promise<SectorItem[]> => {
    return new Promise<SectorItem[]>((resolve) => {
      setTimeout(() => {
        resolve(transformedArray);
      }, 1000);
    });
  };

  useEffect(() => {
    fetchNames()
      .then((names: SectorItem[]) => {
        fetchCounts()
          .then((counts: SectorItem[]) => {
            const mergedSectors = names.reduce(
              (acc, x) => ({ ...acc, [x.id]: x }),
              {},
            );
            counts.forEach((c) => {
              mergedSectors[c.id] = { ...mergedSectors[c.id], count: c.count };
            });
            setSectors(Object.values(mergedSectors));
          })
          .catch((err) => {
            throw new Error(err);
          });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <CardPageUI>
      {sectors.length > 0 ? <SectorsGridWidget sectors={sectors} /> : <Spin />}
    </CardPageUI>
  );
};

export default SectorsPage;
