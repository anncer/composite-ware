import { PropType, CSSProperties } from 'vue'

import { paginationProps } from 'element-plus'

import type { UnknownFunction } from '../../types/index'
import type { Placement } from 'element-plus'
import type { TableProps, DefaultRow } from 'element-plus/es/components/table/src/table/defaults'

declare type Filters = {
    text: string;
    value: string;
}[];
export interface TableColumnProp {
  type?: 'selection' | 'index' | 'expand';
  index?: number | ((index: number) => number);
  label?: string;
  code?: string;
  columnKey?: string;
  width?: [string, number];
  minWidth?: [string, number];
  fixed?: boolean | 'left' | 'right';
  className?: string;
  labelClassName?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean | string;
  sortMethod?: (a: unknown, b: unknown) => number;
  sortBy?: UnknownFunction;
  sortOrders?: Array<DefaultRow[]>;
  resizable ?: boolean;
  formatter?: UnknownFunction;
  showOverflowTooltip?: boolean;
  headerAlign?: string;
  selectable?: UnknownFunction;
  reserveSelection?: boolean;
  filters?: Filters;
  filterPlacement?: Placement;
  filterMultiple?: boolean;
  filterMethod?: UnknownFunction;
  filteredValue?: string[];
  renderDefault?: UnknownFunction;
  renderHeader?: UnknownFunction;
  renderSlot?: UnknownFunction;
}
export type ITableColumns = Array<TableColumnProp>

type PaginationKeys = Array<keyof typeof paginationProps>

export const paginationKeys = Object.keys(paginationProps) as PaginationKeys

type ElTableProps = Array<keyof typeof elTableProps>

export const tablePropKeys = Object.keys(paginationProps) as ElTableProps

type Size = 'large' | 'default' | 'small'
type Layout = 'fixed' | 'auto'

const elTableProps = {
 data: {
    type: Array as PropType<DefaultRow[]>,
    default: () => {
      return []
    },
  },
  size: String as PropType<Size>,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true,
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function] as PropType<TableProps<DefaultRow>['rowKey']>,
  showHeader: {
    type: Boolean,
    default: true,
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function as PropType<TableProps<DefaultRow>['summaryMethod']>,
  rowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>['rowClassName']
  >,
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
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array as PropType<TableProps<DefaultRow>['expandRowKeys']>,
  defaultExpandAll: Boolean,
  defaultSort: Object as PropType<TableProps<DefaultRow>['defaultSort']>,
  tooltipEffect: String,
  spanMethod: Function as PropType<TableProps<DefaultRow>['spanMethod']>,
  selectOnIndeterminate: {
    type: Boolean,
    default: true,
  },
  indent: {
    type: Number,
    default: 16,
  },
  treeProps: {
    type: Object as PropType<TableProps<DefaultRow>['treeProps']>,
    default: () => {
      return {
        hasChildren: 'hasChildren',
        children: 'children',
      }
    },
  },
  lazy: Boolean,
  load: Function as PropType<TableProps<DefaultRow>['load']>,
  style: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  className: {
    type: String,
    default: '',
  },
  tableLayout: {
    type: String as PropType<Layout>,
    default: 'fixed',
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false,
  },
  flexible: Boolean,
}

export const tableProps = {
  ...paginationProps,
  ...elTableProps,

  isPage: {
    type: Boolean,
    default: false
  },

  background: {
    type: Boolean,
    default: true
  },
  // 单选
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
