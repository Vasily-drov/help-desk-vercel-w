import { useState } from "react"


export default function ReplyForm({reply, email}:
  {
    reply: (formData: FormData) => void,
    email: string
  }) 
{
  const [input, setInput] = useState<string>("")
  const handleReply =  async (formData: FormData) => {
    reply(formData)
    setInput("")
    }
  return (
    <form action={handleReply}>
      <input type="hidden" name="email" value={email}></input>
      <label htmlFor="reply">Reply:</label>
      <textarea 
        onChange={e=>setInput(e.target.value)}
        value={input}
        placeholder="Reply to customer here" id="reply" name="reply" 
        className="w-full h-60 bg-slate-200 focus:bg-white" />
      <button
        className="p-3 mt-4 w-full font-semibold text-lg text-white rounded-md bg-btn-background hover:bg-btn-background-hover">
        Reply
      </button>
    </form>
  )
}
