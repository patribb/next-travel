'use client'
import { useState } from 'react'

const TravelLogForm = () => {
  const [title, setTitle] = useState('')
  return (
    <form>
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.name)} />
      <button>Create</button>
    </form>
  )
}
export default TravelLogForm