import { useQuery } from '@tanstack/react-query'

import { getTestData } from '@/actions/read/getTestData'

export function useTestData() {
  return useQuery({
    queryKey: ['testData'],
    queryFn: () => getTestData(),
  })
}
