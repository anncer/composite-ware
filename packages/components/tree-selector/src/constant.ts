import { TreeSelectorRequestProp, treePropAttr } from './props'
import { cookie } from '@composite-ware/utils/cache'

export const defaultRequest:TreeSelectorRequestProp = {
  url: '/api/admin-v2/org/children/3302/3',
  method: 'get',
  headers: {
    "ESP-TOKEN": cookie.get("ESP-TOKEN") || ""
  }
}

export const defaultTreeProp:treePropAttr = {
  children: 'children',
  label: 'name'
}
