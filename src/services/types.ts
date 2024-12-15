export interface ColumnRequest {
  physical_col_nm: string;
  logical_col_nm: string;
  col_type: string;
}

export interface PhysicalColumnResponse {
  recommend_physical_col_nm: string;
}

export interface LogicalColumnResponse {
  recommend_logical_col_nm: string;
}

export interface DDLRequest {
  ddl: string;
}

export interface DDLAnalysisResponse {
  database: string;
  schema: string;
  table: string;
  columns: {
    id: number;
    physicalName: string;
    logicalName: string;
    dataType: string;
    isNull: boolean;
  }[];
}

export interface GenerateDDLRequest {
  dw: string;
  schema: string;
  table: string;
  columns: any[];
}

export interface GenerateDDLResponse {
  ddl: string;
}