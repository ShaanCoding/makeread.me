export const get = <T extends unknown>(key: string): T | undefined => {
  return process.env[key] as T;
};

export const getOrThrow = <T extends unknown>(key: string): T => {
  const value = get<T>(key);
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};
