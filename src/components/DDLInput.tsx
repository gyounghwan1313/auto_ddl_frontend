import React, { useState } from 'react';
import { X } from 'lucide-react';
import { TableInfo, Column } from '../types';

interface Props {
  onClose: () => void;
  onAnalysis: (tableInfo: TableInfo, columns: Column[]) => void;
}

export function DDLInput({ onClose, onAnalysis }: Props) {
  const [ddl, setDdl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);

    try {
      // DDL 분석 기능이 비활성화됨
      console.log('DDL analysis is disabled');
      // 임시로 빈 데이터로 처리
      const tableInfo: TableInfo = {
        database: '',
        schema: '',
        tableName: ''
      };

      const columns: Column[] = [];

      onAnalysis(tableInfo, columns);
      onClose();
    } catch (error) {
      console.error('Failed to analyze DDL:', error);
      // Here you might want to show an error message to the user
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">DDL 입력하기</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 flex flex-col flex-grow">
          <textarea
            value={ddl}
            onChange={(e) => setDdl(e.target.value)}
            className="flex-grow p-4 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
            placeholder="DDL을 입력하세요..."
          />
          <div className="flex justify-end mt-4 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? '분석 중...' : '분석'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}