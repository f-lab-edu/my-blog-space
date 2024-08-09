interface ApiResponse<T> {
  data: T;
}

const getBaseUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl)
    throw new Error(`환경변수에 접근할 수 없습니다. : NEXT_PUBLIC_API_URL`);

  return baseUrl;
};

// TODO: 에러처리 추가하기, base url 설정하기
export async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const { headers, method, body, ...restOptions } = options;

  const config: RequestInit = {
    method: method ?? 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      ...headers,
    }),
    ...restOptions,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(getBaseUrl() + url, config);

    if (!response.ok) {
      throw response;
    }

    const apiResponse: ApiResponse<T> = await response.json();
    return apiResponse.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
