import { PropType, CSSProperties } from 'vue'

import { paginationProps } from 'element-plus'

import type { UnknownFunction, UnknownObject } from '../../types/index'
import type { Placement } from 'element-plus'
import type {  TableProps, DefaultRow } from 'element-plus/es/components/table/src/table/defaults'

export interface TableColumnProp {
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
  filterPlacement?: Placement;
  filterMultiple?: boolean;
  filterMethod?: UnknownFunction;
  filteredValue?: unknown[];
  formatter?: UnknownFunction;

  renderHeader?: UnknownFunction;

  // render?: (row: T) => string | MaybeArray<VNode>
  showOverflowTooltip?: boolean;

  sortable?: boolean | 'custom';
  sortMethod?: (a: unknown, b: unknown) => number;
  sortBy?: UnknownFunction;
  sortOrders?: Array<DefaultRow[]>;

  resizable ?: boolean;
}

export type ITableColumns = Array<TableColumnProp | UnknownObject>

type PaginationKeys = Array<keyof typeof paginationProps>

export const paginationKeys = Object.keys(paginationProps) as PaginationKeys

export const tableProps = {
  ...paginationProps,
  isPagination: Boolean,
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
  border: {
    type: Boolean,
    default: false
  },
  stripe: {
    defalut: false,
    type: Boolean
  },
  boxStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
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
  defaultSort: Object as PropType<TableProps<DefaultRow>['defaultSort']>,
}

export const tableColumnEmits = {
  load: (evt: Event) => evt instanceof Event,
  select: () => {},
}
