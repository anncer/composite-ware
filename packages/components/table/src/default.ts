import { PropType, CSSProperties } from 'vue'

import { paginationProps } from 'element-plus'

import type { UnknownFunction } from '../../types/index'
import type { Placement } from 'element-plus'
import type {  TableProps, DefaultRow } from 'element-plus/es/components/table/src/table/defaults'
export interface TableColumnProp {
  label: string;
  type?: 'selection' | 'index' | 'expand';
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

export const tableItemProps = {
  item: {
    type: Object as PropType<TableColumnProp>,
    require: true
  }
} as const
export const tableProps = {
  ...paginationProps,
  ...hasdProps,

  isPagination: {
    type: Boolean,
    default: true
  },
  singleSelection: Boolean,

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

export type IElKey<T = typeof hasdProps> = keyof T

export const paginationEs = ["update:current-page", "update:page-size", 'size-change', 'current-change', 'prev-click', 'next-click']

export const tableEmits = [
  "select",
  "select-all",
  "selection-change",
  "cell-mouse-enter",
  "cell-mouse-leave",
  "cell-contextmenu",
  "cell-click",
  "cell-dblclick",
  "row-click",
  "row-contextmenu",
  "row-dblclick",
  "header-click",
  "header-contextmenu",
  "sort-change",
  "filter-change",
  "table-current",
  "header-dragend",
  "expand-change",
]
