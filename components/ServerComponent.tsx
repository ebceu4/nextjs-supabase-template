import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

import { getTestData } from '@/actions/read/getTestData'

type Props = {
  children: React.ReactNode
}

export default async function ServerComponent({ children }: Props) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['testData'],
    queryFn: () => getTestData(), // delay for testing purposes
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
