
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default function NewTicket() {
  

  const addTicket = async (formData: FormData) => {
    'use server'
    const name = formData.get('name')
    const email = formData.get('email')
    const description = formData.get('description')
    console.log('Here')
    console.log(formData)
    console.log(email)
    console.log(description)
    console.log(name)
    if (name && email && description) {
      const supabase = createServerActionClient({ cookies })
      console.log('there')
      await supabase.from("tickets").insert({ name:name, email:email,description:description});
      redirect('/complete')
    }
  }
  return (
    <form action={addTicket} className="border-solid border-2 border-foreground p-4 rounded-md">
      <label htmlFor="name" className="mr-[41%]">Name:</label>
      <label htmlFor="email">Email:</label>
      <div>
        <input placeholder="Jane Doe" id="name" name="name" type="text" required
          className="bg-slate-200 focus:bg-white mr-2 mb-6 p-2 rounded-md"/>
        <input placeholder="user@example.com" id="email"  name="email" type="email" required
          className="bg-slate-200 focus:bg-white ml-2 mb-6 p-2 rounded-md" />
      </div>
      <div>
        <label htmlFor="description">Issue:</label>
        <textarea placeholder="Describe your problem here" id="description" name="description"
          className="w-full h-60 bg-slate-200 focus:bg-white rounded-md p-2"
          required />
      </div>
      <button
        className="p-3 mt-6 w-full font-semibold text-lg text-white rounded-md bg-btn-background hover:bg-btn-background-hover">
        Submit
      </button>
    </form>
  )
}
