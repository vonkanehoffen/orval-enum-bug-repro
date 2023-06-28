/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  ListPets200
} from '.././model'

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * @summary List all pets
 */
export const listPets = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ListPets200>> => {
    return axios.get(
      `/pets`,options
    );
  }


export const getListPetsQueryKey = () => [`/pets`] as const;
  

    
export const getListPetsQueryOptions = <TData = Awaited<ReturnType<typeof listPets>>, TError = AxiosError<unknown>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getListPetsQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({ signal }) => listPets({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type ListPetsQueryResult = NonNullable<Awaited<ReturnType<typeof listPets>>>
export type ListPetsQueryError = AxiosError<unknown>

/**
 * @summary List all pets
 */
export const useListPets = <TData = Awaited<ReturnType<typeof listPets>>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getListPetsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

