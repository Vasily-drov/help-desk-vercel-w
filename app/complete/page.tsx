import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AdminLayout from '../../components/AdminLayout'
import { revalidatePath } from 'next/cache'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import Link from "next/link";


export default async function Complete() {



  return (
    <>
      <div className="mt-20 flex justify-center border-solid border-2 border-foreground p-4 rounded-md bg-green-300">
        <h1>Ticket Has been Submited</h1>
      </div>
      <div className="mt-20 flex justify-center">
      <button className="p-3 mt-6 w-64 font-semibold text-lg text-white rounded-md bg-btn-background hover:bg-btn-background-hover">
        <Link href="/">Create One More</Link>
        </button>
      </div>
     
    </>)
}