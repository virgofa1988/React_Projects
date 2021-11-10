import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'
export default function useQuery() {
  //get query Param from URL via location.search
  const location = useLocation()
  // console.log('Memo', location)
  // Parse to  {} with key and value
  const queryString = useMemo(() => qs.parse(location.search), [location.search])

  return queryString
}
