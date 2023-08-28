import { useState, useEffect } from "react"
import ReplyForm from "./ReplyForm"

interface Ticket {
  id: string, name: string, email: string, status: string, description: string
}
export default function Ticket({
  ticket,
  updateStatus,
  reply,
}: {
  ticket: Ticket,
  updateStatus: (formData: FormData) => void,
  reply: (formData: FormData) => void
}) {

  const [status, setStatus] = useState("")
  const [statusChanged, setstatusChanged] = useState(false)

  const handleStatusChange = (value: string) => {
    setStatus(value)
    setstatusChanged(true)
  }

  useEffect(() => {
    setStatus(ticket.status)
  }, [ticket.status])

  return (
    <div className="animate-in gap-10 flex border-solid border-2 border-foreground p-4 rounded-md">
      <div>
        <div className="mr-[11.5%]">ID:</div>
        <div  className="mr-[37.5%]">Name:</div>
        <div >Email:</div>
        <div className="flex">
          <div className="w-20  bg-stone-200 mr-2 mb-6 p-2 rounded-md">{ticket.id} </div>
          <div className="w-64 bg-stone-200 mx-2 mb-6 p-2 rounded-md">{ticket.name} </div>
          <div className="w-64  bg-stone-200 ml-2 mb-6 p-2 rounded-md">{ticket.email}</div>
        </div>
        <div>Issue:</div>
        <div className="w-full h-72 bg-stone-200 rounded-md p-2">{ticket.description} </div>
      </div>
      <div className="w-full">
        <ReplyForm
          reply={reply}
          email={ticket.email} />
        <form className="mt-5" action={updateStatus}>
          <label htmlFor="status" className="mt-4 mr-4">STATUS:</label>
          <input type="hidden" name="id" value={ticket.id} />
          <select name="status" id="status" value={status} onChange={e => handleStatusChange(e.target.value)}>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          {
          statusChanged &&
            <button
              className="p-1 ml-10 w-20 font-semibold text-lg text-white rounded-md bg-btn-background hover:bg-btn-background-hover">
              Save</button>
          }
        </form>
      </div>
    </div>
  )
}
