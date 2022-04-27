import { useCallback, useEffect, useState } from 'react';

export type MediaQuery = `(${`${string}: ${string}` | `${string}:${string}`})`;

const useMediaQueryMatch = (queries: MediaQuery[]) => {

  const [matches, setMatches] = useState<boolean[]>([]);

  const onUpdate = useCallback(() => {
    setMatches(queries.map(query => window.matchMedia(query).matches));
  }, [queries]);

  useEffect(() => {
    onUpdate();
    queries.forEach(query => window.matchMedia(query).addEventListener('change', onUpdate));
    return () => queries.forEach(query => window.matchMedia(query).removeEventListener('change', onUpdate));
    // eslint-disable-next-line
  }, []);

  return matches
}

export default useMediaQueryMatch;