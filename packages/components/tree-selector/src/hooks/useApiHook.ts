
import { defaultRequest } from '../constant'
import { TreeSelectorRequestProp } from '../prop'
import { useApiService } from '@composite-ware/utils'

export const useGetTreeData = (userRequest: TreeSelectorRequestProp | undefined = {}) => {
  const { url, method, headers, params, loading} = userRequest
  const userRequestMethod = method ? method : defaultRequest.method
  const path:string = url || defaultRequest.url as string
  const baseParams = {
    data: userRequest.params,
    headers: headers || defaultRequest.headers,
    loading: loading === false ? false : true
  }
  if (params) {
    baseParams.data = params
  }
  return useApiService(path, userRequestMethod, baseParams)
}
