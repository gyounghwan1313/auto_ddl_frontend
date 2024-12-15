import { makeApiRequest } from './apiClient';
import { ColumnRequest, PhysicalColumnResponse, LogicalColumnResponse } from './types';

export async function getPhysicalColumnRecommendation(data: ColumnRequest): Promise<string> {
  try {
    const result = await makeApiRequest<PhysicalColumnResponse>(
      '/inference_physical_col_nm',
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
      '/inference_logical_col_nm',
      data
    );
    return result.recommend_logical_col_nm;
  } catch (error) {
    console.error('Failed to get logical column recommendation:', error);
    throw error;
  }
}