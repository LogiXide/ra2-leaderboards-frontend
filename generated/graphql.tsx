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
  mapIds?: InputMaybe<Array<Scalars['Int']>>;
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

export type CreateMatchInput = {
  awayPlayerId?: InputMaybe<Scalars['Int']>;
  awayTeamId?: InputMaybe<Scalars['Int']>;
  homePlayerId?: InputMaybe<Scalars['Int']>;
  homeTeamId?: InputMaybe<Scalars['Int']>;
  type: Scalars['String'];
  winner?: InputMaybe<Scalars['String']>;
};

export type CreateMatchResponse = {
  __typename?: 'CreateMatchResponse';
  matches: Array<Match>;
};

export type CreatePlayerInput = {
  name: Scalars['String'];
};

export type CreatePlayerResponse = {
  __typename?: 'CreatePlayerResponse';
  players: Array<Player>;
};

export type CreateTeamInput = {
  name: Scalars['String'];
  playerIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type CreateTeamResponse = {
  __typename?: 'CreateTeamResponse';
  teams: Array<Team>;
};

export type Game = {
  __typename?: 'Game';
  awayPlayer?: Maybe<Player>;
  awayPlayerId?: Maybe<Scalars['Int']>;
  awayTeam?: Maybe<Team>;
  awayTeamId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  homePlayer?: Maybe<Player>;
  homePlayerId?: Maybe<Scalars['Int']>;
  homeTeam?: Maybe<Team>;
  homeTeamId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  map: Map;
  mapId: Scalars['Int'];
  match: Match;
  matchId: Scalars['Int'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
  winner: Scalars['String'];
};

export enum GameSortOption {
  ById = 'by_id'
}

export type GameSortOptions = {
  direction?: InputMaybe<SortDirection>;
  option: GameSortOption;
};

export type GamesOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GameSortOptions>;
};

export type GamesResponse = {
  __typename?: 'GamesResponse';
  data: Array<Maybe<Game>>;
  pageNumber: Scalars['Int'];
  size: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type GamesWhere = {
  id_EQUALS?: InputMaybe<Scalars['Int']>;
};

export type Map = {
  __typename?: 'Map';
  author: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  imageUrl: Scalars['String'];
  mapPools?: Maybe<Array<MapPool>>;
  name: Scalars['String'];
  spots: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type MapPool = {
  __typename?: 'MapPool';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  maps?: Maybe<Array<Map>>;
  name: Scalars['String'];
  updatedAt: Scalars['String'];
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
  id_EQUALS?: InputMaybe<Scalars['Int']>;
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
  id_EQUALS?: InputMaybe<Scalars['Int']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type Match = {
  __typename?: 'Match';
  awayPlayer?: Maybe<Player>;
  awayPlayerId?: Maybe<Scalars['Int']>;
  awayTeam?: Maybe<Team>;
  awayTeamId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  games?: Maybe<Array<Maybe<Game>>>;
  homePlayer?: Maybe<Player>;
  homePlayerId?: Maybe<Scalars['Int']>;
  homeTeam?: Maybe<Team>;
  homeTeamId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
  winner?: Maybe<Scalars['String']>;
};

export enum MatchSortOption {
  ById = 'by_id'
}

export type MatchSortOptions = {
  direction?: InputMaybe<SortDirection>;
  option: MatchSortOption;
};

export type MatchesOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MatchSortOptions>;
};

export type MatchesResponse = {
  __typename?: 'MatchesResponse';
  data: Array<Maybe<Match>>;
  pageNumber: Scalars['Int'];
  size: Scalars['Int'];
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type MatchesWhere = {
  id_EQUALS?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMap: CreateMapResponse;
  createMapPool: CreateMapPoolResponse;
  createMatch: CreateMatchResponse;
  createPlayer: CreatePlayerResponse;
  createTeam: CreateTeamResponse;
  updateMap: UpdateMapResponse;
  updateMapPool: UpdateMapPoolResponse;
  updateMatch: UpdateMatchResponse;
  updatePlayer: UpdatePlayerResponse;
  updateTeam: UpdateTeamResponse;
};


export type MutationCreateMapArgs = {
  input: CreateMapInput;
};


export type MutationCreateMapPoolArgs = {
  input: CreateMapPoolInput;
};


export type MutationCreateMatchArgs = {
  input: CreateMatchInput;
};


export type MutationCreatePlayerArgs = {
  input: CreatePlayerInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationUpdateMapArgs = {
  id: Scalars['Int'];
  input: UpdateMapInput;
};


export type MutationUpdateMapPoolArgs = {
  id: Scalars['Int'];
  input: UpdateMapPoolInput;
};


export type MutationUpdateMatchArgs = {
  id: Scalars['Int'];
  input: UpdateMatchInput;
};


export type MutationUpdatePlayerArgs = {
  id: Scalars['Int'];
  input: UpdatePlayerInput;
};


export type MutationUpdateTeamArgs = {
  id: Scalars['Int'];
  input: UpdateTeamInput;
};

export type Player = {
  __typename?: 'Player';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  teams?: Maybe<Array<Team>>;
  updatedAt: Scalars['String'];
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
  data: Array<Maybe<Player>>;
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
  id_EQUALS?: InputMaybe<Scalars['Int']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  game?: Maybe<Game>;
  games: GamesResponse;
  map?: Maybe<Map>;
  mapPool?: Maybe<MapPool>;
  mapPools: MapPoolsResponse;
  maps: MapsResponse;
  match?: Maybe<Match>;
  matches: MatchesResponse;
  player?: Maybe<Player>;
  players: PlayersResponse;
  team?: Maybe<Team>;
  teams: TeamsResponse;
};


export type QueryGameArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryGamesArgs = {
  options?: InputMaybe<GamesOptions>;
  where?: InputMaybe<GamesWhere>;
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


export type QueryMatchArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryMatchesArgs = {
  options?: InputMaybe<MatchesOptions>;
  where?: InputMaybe<MatchesWhere>;
};


export type QueryPlayerArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryPlayersArgs = {
  options?: InputMaybe<PlayersOptions>;
  where?: InputMaybe<PlayersWhere>;
};


export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['Int']>;
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
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  players?: Maybe<Array<Player>>;
  updatedAt: Scalars['String'];
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
  data: Array<Maybe<Team>>;
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
  id_EQUALS?: InputMaybe<Scalars['Int']>;
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
  mapIds?: InputMaybe<Array<Scalars['Int']>>;
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

export type UpdateMatchInput = {
  awayPlayerId?: InputMaybe<Scalars['Int']>;
  awayTeamId?: InputMaybe<Scalars['Int']>;
  homePlayerId?: InputMaybe<Scalars['Int']>;
  homeTeamId?: InputMaybe<Scalars['Int']>;
  winner?: InputMaybe<Scalars['String']>;
};

export type UpdateMatchResponse = {
  __typename?: 'UpdateMatchResponse';
  matches?: Maybe<Array<Match>>;
};

export type UpdatePlayerInput = {
  name: Scalars['String'];
};

export type UpdatePlayerResponse = {
  __typename?: 'UpdatePlayerResponse';
  players?: Maybe<Array<Player>>;
};

export type UpdateTeamInput = {
  name: Scalars['String'];
  playerIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type UpdateTeamResponse = {
  __typename?: 'UpdateTeamResponse';
  teams?: Maybe<Array<Team>>;
};

export type CreateMapPoolMutationVariables = Exact<{
  input: CreateMapPoolInput;
}>;


export type CreateMapPoolMutation = { __typename?: 'Mutation', createMapPool: { __typename?: 'CreateMapPoolResponse', mapPools: Array<{ __typename?: 'MapPool', id: number, name: string, maps?: Array<{ __typename?: 'Map', id: number }> | null }> } };

export type UpdateMapPoolMutationVariables = Exact<{
  input: UpdateMapPoolInput;
  id: Scalars['Int'];
}>;


export type UpdateMapPoolMutation = { __typename?: 'Mutation', updateMapPool: { __typename?: 'UpdateMapPoolResponse', mapPools?: Array<{ __typename?: 'MapPool', id: number, name: string, maps?: Array<{ __typename?: 'Map', id: number }> | null }> | null } };

export type GetMapPoolsQueryVariables = Exact<{
  options?: InputMaybe<MapPoolsOptions>;
}>;


export type GetMapPoolsQuery = { __typename?: 'Query', mapPools: { __typename?: 'MapPoolsResponse', totalPages: number, data: Array<{ __typename?: 'MapPool', id: number, name: string } | null> } };

export type GetMapPoolQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetMapPoolQuery = { __typename?: 'Query', mapPool?: { __typename?: 'MapPool', id: number, name: string, maps?: Array<{ __typename?: 'Map', id: number, name: string }> | null } | null };

export type UpdateMapMutationVariables = Exact<{
  input: UpdateMapInput;
  id: Scalars['Int'];
}>;


export type UpdateMapMutation = { __typename?: 'Mutation', updateMap: { __typename?: 'UpdateMapResponse', maps?: Array<{ __typename?: 'Map', id: number, name: string, spots: number, imageUrl: string, author: string }> | null } };

export type CreateMapMutationVariables = Exact<{
  input: CreateMapInput;
}>;


export type CreateMapMutation = { __typename?: 'Mutation', createMap: { __typename?: 'CreateMapResponse', maps: Array<{ __typename?: 'Map', id: number, name: string, author: string, imageUrl: string, spots: number }> } };

export type GetMapsQueryVariables = Exact<{
  options?: InputMaybe<MapsOptions>;
}>;


export type GetMapsQuery = { __typename?: 'Query', maps: { __typename?: 'MapsResponse', totalPages: number, data: Array<{ __typename?: 'Map', id: number, name: string, spots: number, author: string, imageUrl: string } | null> } };

export type GetMapQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetMapQuery = { __typename?: 'Query', map?: { __typename?: 'Map', id: number, name: string, spots: number, author: string, imageUrl: string } | null };

export type SearchMapQueryVariables = Exact<{
  where?: InputMaybe<MapsWhere>;
  options?: InputMaybe<MapsOptions>;
}>;


export type SearchMapQuery = { __typename?: 'Query', maps: { __typename?: 'MapsResponse', data: Array<{ __typename?: 'Map', id: number, name: string, spots: number, author: string, imageUrl: string } | null> } };

export type GetMatchesQueryVariables = Exact<{
  options?: InputMaybe<MatchesOptions>;
}>;


export type GetMatchesQuery = { __typename?: 'Query', matches: { __typename?: 'MatchesResponse', totalPages: number, data: Array<{ __typename?: 'Match', id: number, type: string, homePlayerId?: number | null, homeTeamId?: number | null, awayPlayerId?: number | null, awayTeamId?: number | null } | null> } };

export type CreatePlayerMutationVariables = Exact<{
  input: CreatePlayerInput;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer: { __typename?: 'CreatePlayerResponse', players: Array<{ __typename?: 'Player', id: number, name: string }> } };

export type UpdatePlayerMutationVariables = Exact<{
  input: UpdatePlayerInput;
  id: Scalars['Int'];
}>;


export type UpdatePlayerMutation = { __typename?: 'Mutation', updatePlayer: { __typename?: 'UpdatePlayerResponse', players?: Array<{ __typename?: 'Player', id: number, name: string }> | null } };

export type GetPlayersQueryVariables = Exact<{
  options?: InputMaybe<PlayersOptions>;
}>;


export type GetPlayersQuery = { __typename?: 'Query', players: { __typename?: 'PlayersResponse', totalPages: number, data: Array<{ __typename?: 'Player', id: number, name: string } | null> } };

export type GetPlayerQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlayerQuery = { __typename?: 'Query', player?: { __typename?: 'Player', id: number, name: string } | null };

export type SearchPlayerQueryVariables = Exact<{
  where?: InputMaybe<PlayersWhere>;
  options?: InputMaybe<PlayersOptions>;
}>;


export type SearchPlayerQuery = { __typename?: 'Query', players: { __typename?: 'PlayersResponse', data: Array<{ __typename?: 'Player', id: number, name: string } | null> } };

export type CreateTeamMutationVariables = Exact<{
  input: CreateTeamInput;
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'CreateTeamResponse', teams: Array<{ __typename?: 'Team', id: number, name: string, players?: Array<{ __typename?: 'Player', id: number }> | null }> } };

export type UpdateTeamMutationVariables = Exact<{
  input: UpdateTeamInput;
  id: Scalars['Int'];
}>;


export type UpdateTeamMutation = { __typename?: 'Mutation', updateTeam: { __typename?: 'UpdateTeamResponse', teams?: Array<{ __typename?: 'Team', id: number, name: string, players?: Array<{ __typename?: 'Player', id: number }> | null }> | null } };

export type GetTeamsQueryVariables = Exact<{
  options?: InputMaybe<TeamsOptions>;
}>;


export type GetTeamsQuery = { __typename?: 'Query', teams: { __typename?: 'TeamsResponse', totalPages: number, data: Array<{ __typename?: 'Team', id: number, name: string } | null> } };

export type GetTeamQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTeamQuery = { __typename?: 'Query', team?: { __typename?: 'Team', id: number, name: string, players?: Array<{ __typename?: 'Player', id: number, name: string }> | null } | null };


export const CreateMapPoolDocument = gql`
    mutation CreateMapPool($input: CreateMapPoolInput!) {
  createMapPool(input: $input) {
    mapPools {
      id
      name
      maps {
        id
      }
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
      id
      name
      maps {
        id
      }
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
    maps {
      id
      name
    }
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
      id
      name
      spots
      imageUrl
      author
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
      id
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
export const SearchMapDocument = gql`
    query searchMap($where: MapsWhere, $options: MapsOptions) {
  maps(where: $where, options: $options) {
    data {
      id
      name
      spots
      author
      imageUrl
    }
  }
}
    `;

/**
 * __useSearchMapQuery__
 *
 * To run a query within a React component, call `useSearchMapQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMapQuery({
 *   variables: {
 *      where: // value for 'where'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useSearchMapQuery(baseOptions?: Apollo.QueryHookOptions<SearchMapQuery, SearchMapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMapQuery, SearchMapQueryVariables>(SearchMapDocument, options);
      }
export function useSearchMapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMapQuery, SearchMapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMapQuery, SearchMapQueryVariables>(SearchMapDocument, options);
        }
export type SearchMapQueryHookResult = ReturnType<typeof useSearchMapQuery>;
export type SearchMapLazyQueryHookResult = ReturnType<typeof useSearchMapLazyQuery>;
export type SearchMapQueryResult = Apollo.QueryResult<SearchMapQuery, SearchMapQueryVariables>;
export const GetMatchesDocument = gql`
    query GetMatches($options: MatchesOptions) {
  matches(options: $options) {
    data {
      id
      type
      homePlayerId
      homeTeamId
      awayPlayerId
      awayTeamId
    }
    totalPages
  }
}
    `;

/**
 * __useGetMatchesQuery__
 *
 * To run a query within a React component, call `useGetMatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetMatchesQuery(baseOptions?: Apollo.QueryHookOptions<GetMatchesQuery, GetMatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMatchesQuery, GetMatchesQueryVariables>(GetMatchesDocument, options);
      }
export function useGetMatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMatchesQuery, GetMatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMatchesQuery, GetMatchesQueryVariables>(GetMatchesDocument, options);
        }
export type GetMatchesQueryHookResult = ReturnType<typeof useGetMatchesQuery>;
export type GetMatchesLazyQueryHookResult = ReturnType<typeof useGetMatchesLazyQuery>;
export type GetMatchesQueryResult = Apollo.QueryResult<GetMatchesQuery, GetMatchesQueryVariables>;
export const CreatePlayerDocument = gql`
    mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
    players {
      id
      name
    }
  }
}
    `;
export type CreatePlayerMutationFn = Apollo.MutationFunction<CreatePlayerMutation, CreatePlayerMutationVariables>;

/**
 * __useCreatePlayerMutation__
 *
 * To run a mutation, you first call `useCreatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlayerMutation, { data, loading, error }] = useCreatePlayerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlayerMutation, CreatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlayerMutation, CreatePlayerMutationVariables>(CreatePlayerDocument, options);
      }
export type CreatePlayerMutationHookResult = ReturnType<typeof useCreatePlayerMutation>;
export type CreatePlayerMutationResult = Apollo.MutationResult<CreatePlayerMutation>;
export type CreatePlayerMutationOptions = Apollo.BaseMutationOptions<CreatePlayerMutation, CreatePlayerMutationVariables>;
export const UpdatePlayerDocument = gql`
    mutation UpdatePlayer($input: UpdatePlayerInput!, $id: Int!) {
  updatePlayer(input: $input, id: $id) {
    players {
      id
      name
    }
  }
}
    `;
export type UpdatePlayerMutationFn = Apollo.MutationFunction<UpdatePlayerMutation, UpdatePlayerMutationVariables>;

/**
 * __useUpdatePlayerMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerMutation, { data, loading, error }] = useUpdatePlayerMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerMutation, UpdatePlayerMutationVariables>(UpdatePlayerDocument, options);
      }
export type UpdatePlayerMutationHookResult = ReturnType<typeof useUpdatePlayerMutation>;
export type UpdatePlayerMutationResult = Apollo.MutationResult<UpdatePlayerMutation>;
export type UpdatePlayerMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>;
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
export const GetPlayerDocument = gql`
    query GetPlayer($id: Int!) {
  player(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetPlayerQuery__
 *
 * To run a query within a React component, call `useGetPlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlayerQuery(baseOptions: Apollo.QueryHookOptions<GetPlayerQuery, GetPlayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayerQuery, GetPlayerQueryVariables>(GetPlayerDocument, options);
      }
export function useGetPlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayerQuery, GetPlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayerQuery, GetPlayerQueryVariables>(GetPlayerDocument, options);
        }
export type GetPlayerQueryHookResult = ReturnType<typeof useGetPlayerQuery>;
export type GetPlayerLazyQueryHookResult = ReturnType<typeof useGetPlayerLazyQuery>;
export type GetPlayerQueryResult = Apollo.QueryResult<GetPlayerQuery, GetPlayerQueryVariables>;
export const SearchPlayerDocument = gql`
    query searchPlayer($where: PlayersWhere, $options: PlayersOptions) {
  players(where: $where, options: $options) {
    data {
      id
      name
    }
  }
}
    `;

/**
 * __useSearchPlayerQuery__
 *
 * To run a query within a React component, call `useSearchPlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPlayerQuery({
 *   variables: {
 *      where: // value for 'where'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useSearchPlayerQuery(baseOptions?: Apollo.QueryHookOptions<SearchPlayerQuery, SearchPlayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPlayerQuery, SearchPlayerQueryVariables>(SearchPlayerDocument, options);
      }
export function useSearchPlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPlayerQuery, SearchPlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPlayerQuery, SearchPlayerQueryVariables>(SearchPlayerDocument, options);
        }
export type SearchPlayerQueryHookResult = ReturnType<typeof useSearchPlayerQuery>;
export type SearchPlayerLazyQueryHookResult = ReturnType<typeof useSearchPlayerLazyQuery>;
export type SearchPlayerQueryResult = Apollo.QueryResult<SearchPlayerQuery, SearchPlayerQueryVariables>;
export const CreateTeamDocument = gql`
    mutation CreateTeam($input: CreateTeamInput!) {
  createTeam(input: $input) {
    teams {
      id
      name
      players {
        id
      }
    }
  }
}
    `;
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, options);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;
export const UpdateTeamDocument = gql`
    mutation UpdateTeam($input: UpdateTeamInput!, $id: Int!) {
  updateTeam(input: $input, id: $id) {
    teams {
      id
      name
      players {
        id
      }
    }
  }
}
    `;
export type UpdateTeamMutationFn = Apollo.MutationFunction<UpdateTeamMutation, UpdateTeamMutationVariables>;

/**
 * __useUpdateTeamMutation__
 *
 * To run a mutation, you first call `useUpdateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTeamMutation, { data, loading, error }] = useUpdateTeamMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateTeamMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTeamMutation, UpdateTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTeamMutation, UpdateTeamMutationVariables>(UpdateTeamDocument, options);
      }
export type UpdateTeamMutationHookResult = ReturnType<typeof useUpdateTeamMutation>;
export type UpdateTeamMutationResult = Apollo.MutationResult<UpdateTeamMutation>;
export type UpdateTeamMutationOptions = Apollo.BaseMutationOptions<UpdateTeamMutation, UpdateTeamMutationVariables>;
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
export const GetTeamDocument = gql`
    query GetTeam($id: Int!) {
  team(id: $id) {
    id
    name
    players {
      id
      name
    }
  }
}
    `;

/**
 * __useGetTeamQuery__
 *
 * To run a query within a React component, call `useGetTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTeamQuery(baseOptions: Apollo.QueryHookOptions<GetTeamQuery, GetTeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamQuery, GetTeamQueryVariables>(GetTeamDocument, options);
      }
export function useGetTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamQuery, GetTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamQuery, GetTeamQueryVariables>(GetTeamDocument, options);
        }
export type GetTeamQueryHookResult = ReturnType<typeof useGetTeamQuery>;
export type GetTeamLazyQueryHookResult = ReturnType<typeof useGetTeamLazyQuery>;
export type GetTeamQueryResult = Apollo.QueryResult<GetTeamQuery, GetTeamQueryVariables>;