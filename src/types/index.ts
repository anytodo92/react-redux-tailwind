export interface DataTableData {
  [k: string]: any
}

export interface DataTableColumn {
  name: string;
  field: string;
}

export interface DataTableConfig {
  columns: DataTableColumn[]
}