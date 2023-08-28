

export default function ReplyForm({reply, email}:
  {
    reply: (formData: FormData) => void,
    email: string
  }) 
{
  return (
    <form action={reply}>
      <input type="hidden" name="email" value={email}></input>
      <label htmlFor="reply">Reply:</label>
      <textarea placeholder="Reply to customer here" id="reply" className="w-full h-60 bg-slate-200 focus:bg-white" />
      <button
        className="p-3 mt-4 w-full font-semibold text-lg text-white rounded-md bg-btn-background hover:bg-btn-background-hover">
        Reply
      </button>
    </form>
  )
}
