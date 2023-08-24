import { client } from "../clients/graphql.client";
import {
  Brand,
  CreateBrandInput,
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";
import { CreativeRepository } from "src/domain/creatives/creatives.domain";

export class CreativeBackendRepository implements CreativeRepository {
  async listFolder(
    libFilter: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolder> {
    return client.chain.query.listFolder({ input: libFilter }).get({
      id: 1,
      parentId: 1,
      path: 1,
      createdAt: 1,
      updatedAt: 1,
      __typename: 1,
    });
  }

  async createBrand(input: CreateBrandInput) {
    return client.chain.mutation.createBrand({ input }).get({
      id: 1,
      name: 1,
      sector: 1,
    }) as Promise<Brand>;
  }
}
