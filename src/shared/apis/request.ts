interface ApiResponse<T> {
  data: T;
}

// TODO: 에러처리 추가하기, base url 설정하기
export async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const {
    method = 'GET',
    body,
    headers: customHeaders = {},
    ...restOptions
  } = options;

  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  const headers = new Headers({
    ...defaultHeaders,
    ...customHeaders,
  });

  const config: RequestInit = {
    method,
    headers,
    ...restOptions,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);

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
