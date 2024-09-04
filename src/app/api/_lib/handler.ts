import { NextRequest, NextResponse } from 'next/server';

export class CustomError {
  code: number;

  constructor(code: number) {
    this.code = code;
  }
}

const ERROR_MESSAGES: { [key: number]: string } = {
  400: '잘못된 요청 정보입니다.',
  404: '존재하지 않는 데이터입니다.',
  500: '서버에서 데이터를 처리하는 중 문제가 발생했습니다.',
} as const;

const handleError = async (error: unknown) => {
  if (error instanceof CustomError) {
    return NextResponse.json(
      {
        message: ERROR_MESSAGES[error.code] ?? '',
      },
      { status: error.code }
    );
  } else
    return NextResponse.json(
      {
        message: JSON.stringify(error),
      },
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
