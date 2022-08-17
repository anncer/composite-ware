import type { IDefineProps, UnknownFunction, UnknownObject } from '../../types/index'
import { withInstall } from '@composite-ware/utils'
import tableColumn from './tableColumn.vue'
import { PropType } from 'vue'
import type { Placement } from 'element-plus'
import type {
  TableProps,
  DefaultRow,
} from 'element-plus/es/components/table/src/table/defaults'

export interface TableColumn {
  label: string;
  type?: string;
  width?: string;
  minWidth?: string;
  code?: string;
  className?: string;
  labelClassName?: string;
  align?: 'left' | 'center' | 'right';
  fixed?: boolean | 'left' | 'right';

  filters?: Array<'text' | 'value' | string>;
  filterPlacement?: Placement
  filterMultiple?: boolean
  filterMethod?: UnknownFunction
  filteredValue?: unknown[]
  formatter?: UnknownFunction;

  renderHeader?: UnknownFunction;

  sortable?: boolean | 'custom';
  sortMethod?: (a: unknown, b: unknown) => number;
}

export type ITableColumns = Array<TableColumn | UnknownObject>

export const baseSelectorProps = {
  columns: {
    type: Array as PropType<ITableColumns>,
    default: undefined,
  },
  data: {
    type: Array as PropType<DefaultRow[]>,
    default: () => [],
  },
  height: [String, Number],
  maxHeight: [String, Number],
  minHeight: [String, Number],
  border: {
    type: Boolean,
    default: false
  },
  stripe: {
    defalut: false,
    type: Boolean
  },
  spanMethod: Function as PropType<TableProps<DefaultRow>['spanMethod']>,
  rowClassName: [String, Function] as PropType<TableProps<DefaultRow>['rowClassName']>,
  rowStyle: [Object, Function] as PropType<TableProps<DefaultRow>['rowStyle']>,
  cellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['cellClassName']
  >,
   cellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>['cellStyle']
  >,
  headerRowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['headerRowClassName']
  >,
  headerRowStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>['headerRowStyle']
  >,
  headerCellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['headerCellClassName']
  >,
  headerCellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>['headerCellStyle']
  >,
}

export const tableColumnEmits = {
  load: (evt: Event) => evt instanceof Event,
  select: () => {},
}
export const CetableColumn = withInstall(tableColumn)
export type ITableColumn = IDefineProps<typeof baseSelectorProps>
