'use client'

import { useTestData } from '@/hooks/data/useTestData'

export default function TestDataDisplay() {
  const { data } = useTestData()

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <pre className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
