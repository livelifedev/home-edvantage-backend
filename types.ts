import { KeystoneGraphQLAPI, KeystoneListsAPI } from '@keystone-next/types';

// NOTE -- these types are commented out in master because they aren't generated by the build (yet)
// To get full List and GraphQL API type support, uncomment them here and use them below
// import type { KeystoneListsTypeInfo } from './.keystone/schema-types';

// import type { Permission } from './schemas/fields';
// export type { Permission } from './schemas/fields';

export type Session = {
  itemId: string;
  listKey: string;
  data: {
    name: string;
  };
};

export type ListsAPI = KeystoneListsAPI<any /* KeystoneListsTypeInfo */>;
export type GraphqlAPI = KeystoneGraphQLAPI<any /* KeystoneListsTypeInfo */>;

export type AccessArgs = {
  session?: Session;
  item?: any;
};

export type AccessControl = {
  [key: string]: (args: AccessArgs) => any;
};

export type ListAccessArgs = {
  itemId?: string;
  session?: Session;
};
