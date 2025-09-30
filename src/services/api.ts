interface GenerateRequest {
  logical_name: string;
}

interface GenerateResponse {
  logical_name: string;
}

interface DDLRequest {
  ddl: string;
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

export async function getPhysicalColumnRecommendation(data: GenerateRequest): Promise<string> {
  try {
    const result = await makeApiRequest<GenerateResponse>(
      'http://127.0.0.1:8000/generate',
      data
    );
    return result.logical_name;
  } catch (error) {
    console.error('Failed to get physical column recommendation:', error);
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