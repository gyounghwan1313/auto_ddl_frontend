interface ColumnRequest {
  physical_col_nm: string;
  logical_col_nm: string;
  col_type: string;
}

interface PhysicalColumnResponse {
  recommend_physical_col_nm: string;
}

interface LogicalColumnResponse {
  recommend_logical_col_nm: string;
}

interface DDLRequest {
  ddl: string;
}

interface DDLAnalysisResponse {
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

interface GenerateDDLRequest {
  dw: string;
  schema: string;
  table: string;
  columns: any[];
}

interface GenerateDDLResponse {
  ddl: string;
}

async function makeApiRequest<T>(url: string, data: any): Promise<T> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
}

export async function getPhysicalColumnRecommendation(data: ColumnRequest): Promise<string> {
  try {
    const result = await makeApiRequest<PhysicalColumnResponse>(
      'http://127.0.0.1:8000/inference_physical_col_nm',
      data
    );
    return result.recommend_physical_col_nm;
  } catch (error) {
    console.error('Failed to get physical column recommendation:', error);
    throw error;
  }
}

export async function getLogicalColumnRecommendation(data: ColumnRequest): Promise<string> {
  try {
    const result = await makeApiRequest<LogicalColumnResponse>(
      'http://127.0.0.1:8000/inference_logical_col_nm',
      data
    );
    return result.recommend_logical_col_nm;
  } catch (error) {
    console.error('Failed to get logical column recommendation:', error);
    throw error;
  }
}

export async function analyzeDDL(ddl: string): Promise<DDLAnalysisResponse> {
  try {
    const result = await makeApiRequest<DDLAnalysisResponse>(
      'http://127.0.0.1:8000/analysis_ddl',
      { ddl }
    );
    return result;
  } catch (error) {
    console.error('Failed to analyze DDL:', error);
    throw error;
  }
}

export async function generateDDL(data: GenerateDDLRequest): Promise<string> {
  try {
    const result = await makeApiRequest<GenerateDDLResponse>(
      'http://127.0.0.1:8000/create_ddl',
      data
    );
    return result.ddl;
  } catch (error) {
    console.error('Failed to generate DDL:', error);
    throw error;
  }
}