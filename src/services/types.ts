export interface GenerateRequest {
  logical_name: string;
}

export interface GenerateResponse {
  logical_name: string;
}


export interface DDLRequest {
  ddl: string;
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