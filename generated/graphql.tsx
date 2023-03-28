import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateMapInput = {
  author: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  spots: Scalars['Int'];
};

export type CreateMapPoolInput = {
  name: Scalars['String'];
};

export type CreateMapPoolResponse = {
  __typename?: 'CreateMapPoolResponse';
  mapPools: Array<MapPool>;
};

export type CreateMapResponse = {
  __typename?: 'CreateMapResponse';
  maps: Array<Map>;
};

export type Map = {
  __typename?: 'Map';
  author: Scalars['String'];
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
  mapPools?: Maybe<Array<MapPool>>;
  name: Scalars['String'];
  spots: Scalars['Int'];
};

export type MapPool = {
  __typename?: 'MapPool';
  id: Scalars['Int'];
  maps?: Maybe<Array<Map>>;
  name: Scalars['String'];
};

export enum MapPoolSortOption {
  ById = 'by_id'
}

export type MapPoolsOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MapPoolSortOption>;
};

export type MapPoolsResponse = {
  __typename?: 'MapPoolsResponse';
  data: Array<Maybe<MapPool>>;
  pageNumber: Scalars['Int'];
  size: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type MapPoolsSortOptions = {
  direction?: InputMaybe<SortDirection>;
  option: MapPoolSortOption;
};

export type MapPoolsWhere = {
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export enum MapSortOption {
  ById = 'by_id'
}

export type MapSortOptions = {
  direction?: InputMaybe<SortDirection>;
  option: MapSortOption;
};

export type MapsOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MapSortOptions>;
};

export type MapsResponse = {
  __typename?: 'MapsResponse';
  data: Array<Maybe<Map>>;
  pageNumber: Scalars['Int'];
  size: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type MapsWhere = {
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMap: CreateMapResponse;
  createMapPool: CreateMapPoolResponse;
  updateMap: UpdateMapResponse;
  updateMapPool: UpdateMapPoolResponse;
};


export type MutationCreateMapArgs = {
  input: CreateMapInput;
};


export type MutationCreateMapPoolArgs = {
  input: CreateMapPoolInput;
};


export type MutationUpdateMapArgs = {
  id: Scalars['Int'];
  input: UpdateMapInput;
};


export type MutationUpdateMapPoolArgs = {
  id: Scalars['Int'];
  input: UpdateMapPoolInput;
};

export type Player = {
  __typename?: 'Player';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export enum PlayerSortOption {
  ById = 'by_id'
}

export type PlayersOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PlayersSortOptions>;
};

export type PlayersResponse = {
  __typename?: 'PlayersResponse';
  data: Array<Maybe<Map>>;
  pageNumber: Scalars['Int'];
  size: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PlayersSortOptions = {
  direction?: InputMaybe<SortDirection>;
  option: PlayerSortOption;
};

export type PlayersWhere = {
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  map?: Maybe<Map>;
  mapPool?: Maybe<MapPool>;
  mapPools: MapPoolsResponse;
  maps: MapsResponse;
  players: PlayersResponse;
  teams: TeamsResponse;
};


export type QueryMapArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryMapPoolArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryMapPoolsArgs = {
  options?: InputMaybe<MapPoolsOptions>;
  where?: InputMaybe<MapPoolsWhere>;
};


export type QueryMapsArgs = {
  options?: InputMaybe<MapsOptions>;
  where?: InputMaybe<MapsWhere>;
};


export type QueryPlayersArgs = {
  options?: InputMaybe<PlayersOptions>;
  where?: InputMaybe<PlayersWhere>;
};


export type QueryTeamsArgs = {
  options?: InputMaybe<TeamsOptions>;
  where?: InputMaybe<TeamsWhere>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export enum TeamSortOption {
  ById = 'by_id'
}

export type TeamsOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<TeamsSortOptions>;
};

export type TeamsResponse = {
  __typename?: 'TeamsResponse';
  data: Array<Maybe<Map>>;
  pageNumber: Scalars['Int'];
  size: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type TeamsSortOptions = {
  direction?: InputMaybe<SortDirection>;
  option: TeamSortOption;
};

export type TeamsWhere = {
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type Timestamps = {
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UpdateMapInput = {
  author: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  spots: Scalars['Int'];
};

export type UpdateMapPoolInput = {
  name: Scalars['String'];
};

export type UpdateMapPoolResponse = {
  __typename?: 'UpdateMapPoolResponse';
  mapPools?: Maybe<Array<MapPool>>;
};

export type UpdateMapResponse = {
  __typename?: 'UpdateMapResponse';
  maps?: Maybe<Array<Map>>;
};

export type CreateMapPoolMutationVariables = Exact<{
  input: CreateMapPoolInput;
}>;


export type CreateMapPoolMutation = { __typename?: 'Mutation', createMapPool: { __typename?: 'CreateMapPoolResponse', mapPools: Array<{ __typename?: 'MapPool', name: string }> } };

export type UpdateMapPoolMutationVariables = Exact<{
  input: UpdateMapPoolInput;
  id: Scalars['Int'];
}>;


export type UpdateMapPoolMutation = { __typename?: 'Mutation', updateMapPool: { __typename?: 'UpdateMapPoolResponse', mapPools?: Array<{ __typename?: 'MapPool', name: string, id: number }> | null } };

export type GetMapPoolsQueryVariables = Exact<{
  options?: InputMaybe<MapPoolsOptions>;
}>;


export type GetMapPoolsQuery = { __typename?: 'Query', mapPools: { __typename?: 'MapPoolsResponse', totalPages: number, data: Array<{ __typename?: 'MapPool', id: number, name: string } | null> } };

export type GetMapPoolQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetMapPoolQuery = { __typename?: 'Query', mapPool?: { __typename?: 'MapPool', id: number, name: string } | null };

export type UpdateMapMutationVariables = Exact<{
  input: UpdateMapInput;
  id: Scalars['Int'];
}>;


export type UpdateMapMutation = { __typename?: 'Mutation', updateMap: { __typename?: 'UpdateMapResponse', maps?: Array<{ __typename?: 'Map', name: string, spots: number, imageUrl: string, author: string, id: number }> | null } };

export type CreateMapMutationVariables = Exact<{
  input: CreateMapInput;
}>;


export type CreateMapMutation = { __typename?: 'Mutation', createMap: { __typename?: 'CreateMapResponse', maps: Array<{ __typename?: 'Map', name: string, author: string, imageUrl: string, spots: number }> } };

export type GetMapsQueryVariables = Exact<{
  options?: InputMaybe<MapsOptions>;
}>;


export type GetMapsQuery = { __typename?: 'Query', maps: { __typename?: 'MapsResponse', totalPages: number, data: Array<{ __typename?: 'Map', id: number, name: string, spots: number, author: string, imageUrl: string } | null> } };

export type GetMapQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetMapQuery = { __typename?: 'Query', map?: { __typename?: 'Map', id: number, name: string, spots: number, author: string, imageUrl: string } | null };

export type GetPlayersQueryVariables = Exact<{
  options?: InputMaybe<PlayersOptions>;
}>;


export type GetPlayersQuery = { __typename?: 'Query', players: { __typename?: 'PlayersResponse', totalPages: number, data: Array<{ __typename?: 'Map', id: number, name: string } | null> } };

export type GetTeamsQueryVariables = Exact<{
  options?: InputMaybe<TeamsOptions>;
}>;


export type GetTeamsQuery = { __typename?: 'Query', teams: { __typename?: 'TeamsResponse', totalPages: number, data: Array<{ __typename?: 'Map', id: number, name: string } | null> } };


export const CreateMapPoolDocument = gql`
    mutation CreateMapPool($input: CreateMapPoolInput!) {
  createMapPool(input: $input) {
    mapPools {
      name
    }
  }
}
    `;
export type CreateMapPoolMutationFn = Apollo.MutationFunction<CreateMapPoolMutation, CreateMapPoolMutationVariables>;

/**
 * __useCreateMapPoolMutation__
 *
 * To run a mutation, you first call `useCreateMapPoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMapPoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMapPoolMutation, { data, loading, error }] = useCreateMapPoolMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMapPoolMutation(baseOptions?: Apollo.MutationHookOptions<CreateMapPoolMutation, CreateMapPoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMapPoolMutation, CreateMapPoolMutationVariables>(CreateMapPoolDocument, options);
      }
export type CreateMapPoolMutationHookResult = ReturnType<typeof useCreateMapPoolMutation>;
export type CreateMapPoolMutationResult = Apollo.MutationResult<CreateMapPoolMutation>;
export type CreateMapPoolMutationOptions = Apollo.BaseMutationOptions<CreateMapPoolMutation, CreateMapPoolMutationVariables>;
export const UpdateMapPoolDocument = gql`
    mutation UpdateMapPool($input: UpdateMapPoolInput!, $id: Int!) {
  updateMapPool(input: $input, id: $id) {
    mapPools {
      name
      id
    }
  }
}
    `;
export type UpdateMapPoolMutationFn = Apollo.MutationFunction<UpdateMapPoolMutation, UpdateMapPoolMutationVariables>;

/**
 * __useUpdateMapPoolMutation__
 *
 * To run a mutation, you first call `useUpdateMapPoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMapPoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMapPoolMutation, { data, loading, error }] = useUpdateMapPoolMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateMapPoolMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMapPoolMutation, UpdateMapPoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMapPoolMutation, UpdateMapPoolMutationVariables>(UpdateMapPoolDocument, options);
      }
export type UpdateMapPoolMutationHookResult = ReturnType<typeof useUpdateMapPoolMutation>;
export type UpdateMapPoolMutationResult = Apollo.MutationResult<UpdateMapPoolMutation>;
export type UpdateMapPoolMutationOptions = Apollo.BaseMutationOptions<UpdateMapPoolMutation, UpdateMapPoolMutationVariables>;
export const GetMapPoolsDocument = gql`
    query GetMapPools($options: MapPoolsOptions) {
  mapPools(options: $options) {
    data {
      id
      name
    }
    totalPages
  }
}
    `;

/**
 * __useGetMapPoolsQuery__
 *
 * To run a query within a React component, call `useGetMapPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMapPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMapPoolsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetMapPoolsQuery(baseOptions?: Apollo.QueryHookOptions<GetMapPoolsQuery, GetMapPoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMapPoolsQuery, GetMapPoolsQueryVariables>(GetMapPoolsDocument, options);
      }
export function useGetMapPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMapPoolsQuery, GetMapPoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMapPoolsQuery, GetMapPoolsQueryVariables>(GetMapPoolsDocument, options);
        }
export type GetMapPoolsQueryHookResult = ReturnType<typeof useGetMapPoolsQuery>;
export type GetMapPoolsLazyQueryHookResult = ReturnType<typeof useGetMapPoolsLazyQuery>;
export type GetMapPoolsQueryResult = Apollo.QueryResult<GetMapPoolsQuery, GetMapPoolsQueryVariables>;
export const GetMapPoolDocument = gql`
    query GetMapPool($id: Int!) {
  mapPool(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetMapPoolQuery__
 *
 * To run a query within a React component, call `useGetMapPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMapPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMapPoolQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMapPoolQuery(baseOptions: Apollo.QueryHookOptions<GetMapPoolQuery, GetMapPoolQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMapPoolQuery, GetMapPoolQueryVariables>(GetMapPoolDocument, options);
      }
export function useGetMapPoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMapPoolQuery, GetMapPoolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMapPoolQuery, GetMapPoolQueryVariables>(GetMapPoolDocument, options);
        }
export type GetMapPoolQueryHookResult = ReturnType<typeof useGetMapPoolQuery>;
export type GetMapPoolLazyQueryHookResult = ReturnType<typeof useGetMapPoolLazyQuery>;
export type GetMapPoolQueryResult = Apollo.QueryResult<GetMapPoolQuery, GetMapPoolQueryVariables>;
export const UpdateMapDocument = gql`
    mutation UpdateMap($input: UpdateMapInput!, $id: Int!) {
  updateMap(input: $input, id: $id) {
    maps {
      name
      spots
      imageUrl
      author
      id
    }
  }
}
    `;
export type UpdateMapMutationFn = Apollo.MutationFunction<UpdateMapMutation, UpdateMapMutationVariables>;

/**
 * __useUpdateMapMutation__
 *
 * To run a mutation, you first call `useUpdateMapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMapMutation, { data, loading, error }] = useUpdateMapMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateMapMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMapMutation, UpdateMapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMapMutation, UpdateMapMutationVariables>(UpdateMapDocument, options);
      }
export type UpdateMapMutationHookResult = ReturnType<typeof useUpdateMapMutation>;
export type UpdateMapMutationResult = Apollo.MutationResult<UpdateMapMutation>;
export type UpdateMapMutationOptions = Apollo.BaseMutationOptions<UpdateMapMutation, UpdateMapMutationVariables>;
export const CreateMapDocument = gql`
    mutation createMap($input: CreateMapInput!) {
  createMap(input: $input) {
    maps {
      name
      author
      imageUrl
      spots
    }
  }
}
    `;
export type CreateMapMutationFn = Apollo.MutationFunction<CreateMapMutation, CreateMapMutationVariables>;

/**
 * __useCreateMapMutation__
 *
 * To run a mutation, you first call `useCreateMapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMapMutation, { data, loading, error }] = useCreateMapMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMapMutation(baseOptions?: Apollo.MutationHookOptions<CreateMapMutation, CreateMapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMapMutation, CreateMapMutationVariables>(CreateMapDocument, options);
      }
export type CreateMapMutationHookResult = ReturnType<typeof useCreateMapMutation>;
export type CreateMapMutationResult = Apollo.MutationResult<CreateMapMutation>;
export type CreateMapMutationOptions = Apollo.BaseMutationOptions<CreateMapMutation, CreateMapMutationVariables>;
export const GetMapsDocument = gql`
    query GetMaps($options: MapsOptions) {
  maps(options: $options) {
    data {
      id
      name
      spots
      author
      imageUrl
    }
    totalPages
  }
}
    `;

/**
 * __useGetMapsQuery__
 *
 * To run a query within a React component, call `useGetMapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMapsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetMapsQuery(baseOptions?: Apollo.QueryHookOptions<GetMapsQuery, GetMapsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMapsQuery, GetMapsQueryVariables>(GetMapsDocument, options);
      }
export function useGetMapsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMapsQuery, GetMapsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMapsQuery, GetMapsQueryVariables>(GetMapsDocument, options);
        }
export type GetMapsQueryHookResult = ReturnType<typeof useGetMapsQuery>;
export type GetMapsLazyQueryHookResult = ReturnType<typeof useGetMapsLazyQuery>;
export type GetMapsQueryResult = Apollo.QueryResult<GetMapsQuery, GetMapsQueryVariables>;
export const GetMapDocument = gql`
    query GetMap($id: Int!) {
  map(id: $id) {
    id
    name
    spots
    author
    imageUrl
  }
}
    `;

/**
 * __useGetMapQuery__
 *
 * To run a query within a React component, call `useGetMapQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMapQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMapQuery(baseOptions: Apollo.QueryHookOptions<GetMapQuery, GetMapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMapQuery, GetMapQueryVariables>(GetMapDocument, options);
      }
export function useGetMapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMapQuery, GetMapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMapQuery, GetMapQueryVariables>(GetMapDocument, options);
        }
export type GetMapQueryHookResult = ReturnType<typeof useGetMapQuery>;
export type GetMapLazyQueryHookResult = ReturnType<typeof useGetMapLazyQuery>;
export type GetMapQueryResult = Apollo.QueryResult<GetMapQuery, GetMapQueryVariables>;
export const GetPlayersDocument = gql`
    query GetPlayers($options: PlayersOptions) {
  players(options: $options) {
    data {
      id
      name
    }
    totalPages
  }
}
    `;

/**
 * __useGetPlayersQuery__
 *
 * To run a query within a React component, call `useGetPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayersQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetPlayersQuery(baseOptions?: Apollo.QueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
      }
export function useGetPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayersQuery, GetPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, options);
        }
export type GetPlayersQueryHookResult = ReturnType<typeof useGetPlayersQuery>;
export type GetPlayersLazyQueryHookResult = ReturnType<typeof useGetPlayersLazyQuery>;
export type GetPlayersQueryResult = Apollo.QueryResult<GetPlayersQuery, GetPlayersQueryVariables>;
export const GetTeamsDocument = gql`
    query GetTeams($options: TeamsOptions) {
  teams(options: $options) {
    data {
      id
      name
    }
    totalPages
  }
}
    `;

/**
 * __useGetTeamsQuery__
 *
 * To run a query within a React component, call `useGetTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetTeamsQuery(baseOptions?: Apollo.QueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
      }
export function useGetTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, options);
        }
export type GetTeamsQueryHookResult = ReturnType<typeof useGetTeamsQuery>;
export type GetTeamsLazyQueryHookResult = ReturnType<typeof useGetTeamsLazyQuery>;
export type GetTeamsQueryResult = Apollo.QueryResult<GetTeamsQuery, GetTeamsQueryVariables>;