import { makeApiRequest } from './apiClient';
import { DDLAnalysisResponse, GenerateDDLRequest, GenerateDDLResponse } from './types';

export async function analyzeDDL(ddl: string): Promise<DDLAnalysisResponse> {
  try {
    const result = await makeApiRequest<DDLAnalysisResponse>(
      '/analysis_ddl',
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
      '/create_ddl',
      data
    );
    return result.ddl;
  } catch (error) {
    console.error('Failed to generate DDL:', error);
    throw error;
  }
}