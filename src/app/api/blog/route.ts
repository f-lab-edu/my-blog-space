import { NextRequest } from 'next/server';

import fs from 'fs';
import path from 'path';

type ResponseData = {
  message: string;
  data?: any;
};

const getMockData = () => {
  const filePath = path.resolve('src/app/api/blog/db.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

export async function GET(request: NextRequest) {
  const data = await getMockData();
  return Response.json({ message: '', data }, { status: 200 });
}
