import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AdminLayout from '../../components/AdminLayout'
import { revalidatePath } from 'next/cache'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'


export default async function Admin() {
  
  const supabase = createServerComponentClient({ cookies });
  const { data: tickets, error } = await supabase.from("tickets").select("id,name,email,status,description");

  const reply = async (formData: FormData) => {
    'use server'
    const replyBody = formData.get('reply')
    const email = formData.get('email')
    console.log(`Norsdf`)
    if (replyBody && email) {
      // const supabase = createServerActionClient({ cookies })
      // await supabase.from("ticket").insert({ name:"NEW", email:"new@g.com",description:"NEWNEWNEW"});
      console.log(`Normaly would send email to ${email} with body: ${replyBody}`)
      revalidatePath('/admin')
    }
  }

  const updateStatus = async (formData: FormData) => {
    "use server"
    const ticketStatus = formData.get('status')
    const id = formData.get('id')

    if (ticketStatus && id) {
      const supabase = createServerActionClient({ cookies })
      await supabase.from('tickets').update({ status: ticketStatus }).eq('id', id)
      // await supabase.from("ticket").insert({ name:ticketStatus, email:"STATUS@g.com",description:"NEWNEWNEW"});
      console.log(`Ticket status is ${ticketStatus} |||   ID: ${id}`)
      revalidatePath('/admin')
    }
  }

 
  return(<>
    {tickets && 
      <AdminLayout 
        tickets={tickets} 
        updateStatus={updateStatus} 
        reply={reply}/>
    }
  </>)
}