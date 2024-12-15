import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Props {
  ddl: string | null;
}

export function DDLDisplay({ ddl }: Props) {
  const [copied, setCopied] = useState(false);

  if (!ddl) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ddl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">생성된 DDL:</h3>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-3 py-1.5 rounded transition-colors ${
            copied
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>복사됨</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>복사하기</span>
            </>
          )}
        </button>
      </div>
      <pre className="bg-gray-50 p-4 rounded overflow-x-auto">
        <code>{ddl}</code>
      </pre>
    </div>
  );
}