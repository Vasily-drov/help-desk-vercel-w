import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import NewTicket from '../components/NewTicket'


export const dynamic = 'force-dynamic'





export default async function Index() {
  const supabase = createServerComponentClient({ cookies })
  const {data: { user }} = await supabase.auth.getUser()
 
  return (
    <div className="w-full flex flex-col items-center">
      <div className="animate-in  gap-14 opacity-0 px-3 py-16 lg:py-24 text-foreground">
      <NewTicket/>
      </div>
    </div>
  )
}
