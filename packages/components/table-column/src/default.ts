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
  code: string;
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
  renderContext?: UnknownFunction;
  // render?: () => string | MaybeArray<VNode>;
  showOverflowTooltip?: boolean;

  sortable?: boolean | 'custom';
  sortMethod?: (a: unknown, b: unknown) => number;
  sortBy?: UnknownFunction;
  sortOrders?: Array<DefaultRow[]>;

  resizable ?: boolean;
}

export type ITableColumns = Array<TableColumnProp>

type PaginationKeys = Array<keyof typeof paginationProps>

export const paginationKeys = Object.keys(paginationProps) as PaginationKeys

export const hasdProps = {
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
export const tableProps = {
  ...paginationProps,
  ...hasdProps,
  isPagination: Boolean,
  columns: {
    type: Array as PropType<ITableColumns>,
    require: true
  },
  data: {
    type: Array as PropType<DefaultRow[]>,
    default: () => [],
  },
  minHeight: [String, Number],
  boxStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  }
}

export const tableColumnEmits = {
  load: (evt: Event) => evt instanceof Event,
  select: () => {},
}
