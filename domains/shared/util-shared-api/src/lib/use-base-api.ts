import { useSession } from 'next-auth/react';

export function useBaseApi() {
  const { data } = useSession();
  data?.expires
  
  // return {
  //   getRequest,
  //   postRequest,
  //   putRequest,
  //   deleteRequest,
  // };
}
