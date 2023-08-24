import { FC, useEffect, useState } from "react";
import { useSessionFeature } from "src/app/features/session/session.feature";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useCreativesDomain } from "src/domain/creatives/creatives.domain";
import { CreativeLibraryFolder } from "src/graphql/client";
import { CreativeTableWidget } from "./creative.table.widget";

const CreativeLibraryPage: FC = () => {
  const [folder, setFolder] = useState<CreativeLibraryFolder | null>(null);
  const [hasCreatives, setHasCreatives] = useState(false);
  const { currentBrand } = useSessionFeature();
  const { listFolder } = useCreativesDomain();
  useEffect(() => {
    if (currentBrand?.id) {
      listFolder({ brandId: currentBrand.id })
        .then((res) => {
          setFolder(res);
          if (res.creatives?.length) {
            setHasCreatives(true);
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  }, [currentBrand]);

  return (
    <CardPageUI>
      <header
        className="mb-4 flex gap-4"
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "12",
          background: "white",
          padding: "13px 0",
        }}
      >
        <SearchInputUI />
      </header>
      {hasCreatives ? (
        <CreativeTableWidget data={folder?.creatives} />
      ) : (
        <EmptyCreateUI description="You don't have any creatives yet." />
      )}
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
