interface ParsedDDL {
  database: string;
  schema: string;
  tableName: string;
}

export function parseDDL(ddl: string): ParsedDDL | null {
  try {
    // This is a simple example parser. You might want to make it more robust
    // based on your actual DDL format
    const match = ddl.match(/CREATE\s+TABLE\s+(?:([^.]+)\.)?(?:([^.]+)\.)?([^\s(]+)/i);
    
    if (match) {
      const [, database = '', schema = '', tableName = ''] = match;
      return {
        database: database.trim(),
        schema: schema.trim(),
        tableName: tableName.trim()
      };
    }
    
    return null;
  } catch (error) {
    console.error('Failed to parse DDL:', error);
    return null;
  }
}