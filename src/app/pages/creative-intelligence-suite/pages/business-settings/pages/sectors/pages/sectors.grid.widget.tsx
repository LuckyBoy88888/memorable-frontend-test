import { FC } from "react";
import { SectorItem } from "src/graphql/client";

interface SectorsGridProps {
  sectors: SectorItem[] | null;
}

const SectorCard: FC<{ item: SectorItem }> = ({ item }) => {
  return (
    <div className="rounded bg-gray-300 p-4 text-center">
      <p>
        <strong>{item.id}</strong>
      </p>
      <p>{item.count}</p>
    </div>
  );
};

const SectorsGridWidget: FC<SectorsGridProps> = ({ sectors }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {sectors?.map((s: SectorItem) => (
        <SectorCard item={s} key={s.id} />
      ))}
    </div>
  );
};

export default SectorsGridWidget;
