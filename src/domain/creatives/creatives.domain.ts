import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";

export interface CreativeRepository {
  listFolder(libFilter: CreativeLibraryFilter): Promise<CreativeLibraryFolder>;
}

export const useCreativesDomain = (repoId = "CreativeRepository") => {
  const { repository } = useRepositoryFeature<CreativeRepository>(repoId);

  const listFolder = (libFilter: CreativeLibraryFilter) => {
    return repository.listFolder(libFilter);
  };

  return {
    listFolder,
  };
};
