import { useLocation } from "react-router";

export const useParams = <S extends { [key: string]: any }>(
  initialParams: S,
  options?: {
    toLowerCase: boolean;
  }
): S => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  if (options?.toLowerCase) {
    params.forEach((value, key) => {
      params.set(key.toLowerCase(), value);
    });
  }
  const extractedParams = Object.entries(initialParams).reduce(
    (acc, [key, val]) => {
      const value = params.get(key);
      val = value || val;
      params.set(key, val);
      return {
        ...acc,
        [key]: val
      };
    },
    initialParams
  );

  return {
    ...extractedParams,
    toString: () => {
      return params.toString();
    }
  };
};

export default useParams;
