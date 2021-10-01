//Custom Hook Query String to get query Params and reuse
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'
export default function useQuery() {
  const location = useLocation()
  const queryString = useMemo(() => {
    return qs.parse(location.search)
  }, [location.search])
  return queryString
}
