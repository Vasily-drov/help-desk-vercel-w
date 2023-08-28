
'use client'
import { useState } from "react";
import Admin from "../app/admin/page";
import Ticket from "./Ticket"

interface Ticket {
  id: string, name: string, email: string, status: string, description: string
}
export default function AdminLayout({
  tickets,
  updateStatus,
  reply
}: {
  tickets: Array<Ticket>,
  updateStatus: (formData: FormData) => void,
  reply: (formData: FormData) => void
}) {

  const [ticket, setTicket] = useState<Ticket>(tickets[0])

  return (
    <div className="flex px-3 py-16 lg:py-24">
      <ul className="flex-1 w-1/6 left-0 animate-in overflow-y-scroll max-h-[436px]">
        {tickets?.map((ticket: any, index: number) => (
          <li key={index}
            onClick={() => setTicket(tickets[index])}
            className={`border-solid border-2 cursor-pointer border-foreground mt-2 ${ticket.status === "New" ? "bg-red-300" : ticket.status === "In Progress" ? "bg-yellow-100" : "bg-green-100"}`}
          >
            <div className="flex justify-between">
              <span>ID:{ticket.id}</span><span >{ticket.status}</span>
            </div>
            <div>Name: {ticket.name}</div>
            <div>Email: {ticket.email}</div>
          </li>
        ))}
      </ul>
      <div className="flex-2 w-5/6 ">
        <Ticket ticket={ticket} reply={reply} updateStatus={updateStatus} />
      </div>
    </div>
  )
}
