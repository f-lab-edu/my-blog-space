import { NextRequest, NextResponse } from 'next/server';

const ERROR_MESSAGES: { [key: number]: string } = {
  400: '잘못된 요청 정보입니다.',
  404: '존재하지 않는 데이터입니다.',
  500: '서버에서 데이터를 처리하는 중 문제가 발생했습니다.',
} as const;
const DEFAULT_ERROR_MESSAGE = '알 수 없는 오류가 발생했습니다.';

export class CustomError {
  code: number;
  message: string;

  constructor(code: number, message?: string) {
    this.code = code;
    this.message = message ?? ERROR_MESSAGES[code] ?? DEFAULT_ERROR_MESSAGE;
  }
}

const handleError = async (error: unknown) => {
  if (error instanceof CustomError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.code }
    );
  } else
    return NextResponse.json(
      { message: JSON.stringify(error) },
      { status: 500 }
    );
};

export const handler = (
  api: (request: NextRequest, params: any) => Promise<Response>
) => {
  return async (request: NextRequest, params: any) => {
    try {
      return await api(request, params);
    } catch (error) {
      return handleError(error);
    }
  };
};
