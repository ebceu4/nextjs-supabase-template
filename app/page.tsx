// import { createClient } from '@/lib/supabase/server'
// import AuthButton from '@/components/AuthButton'
// import DeployButton from '@/components/DeployButton'
// import Header from '@/components/Header'
// import ConnectSupabaseSteps from '@/components/tutorial/ConnectSupabaseSteps'
// import SignUpUserSteps from '@/components/tutorial/SignUpUserSteps'
import { Suspense } from 'react'

import ServerComponent from '@/components/ServerComponent'
import TestDataDisplay from '@/components/TestDataDisplay'

export default async function Index() {
  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     createClient()
  //     return true
  //   } catch (e) {
  //     return false
  //   }
  // }

  // const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <Suspense fallback={<div>Loading...</div>}>
        <ServerComponent>
          <TestDataDisplay />
        </ServerComponent>
      </Suspense>
    </div>
  )
}
