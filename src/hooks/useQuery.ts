import { useState, useEffect } from "react";

export function useQuery(url: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError);
  }, [url]);

  return [data, error];
}
