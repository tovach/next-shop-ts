export const fetcher = async <T>(
  url: string,
  options?: RequestInit
): Promise<T | Error['message'] | undefined> => {
  let statusCode;
  try {
    const response = await fetch(url, options);
    statusCode = response.status;
    const data = await response.json();
    return data as T;
  } catch (e) {
    if (e instanceof Error) {
      return `Error message: ${e.message}. Response status - ${statusCode}`;
    }
  }
};
