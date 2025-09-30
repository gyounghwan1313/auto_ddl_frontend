import { makeApiRequest } from './apiClient';
import { GenerateRequest, GenerateResponse } from './types';

export async function getPhysicalColumnRecommendation(data: GenerateRequest): Promise<string> {
  try {
    const result = await makeApiRequest<GenerateResponse>(
      '/generate',
      data
    );
    return result.logical_name;
  } catch (error) {
    console.error('Failed to get physical column recommendation:', error);
    throw error;
  }
}
