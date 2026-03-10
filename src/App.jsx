import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  function printName(e) {
    e.preventDefault();
    console.log(`Form submitted by ${title}`)
  }
  return (
    <div>
      <form onSubmit={printName}>
        <input type="text"
          placeholder="Name...."
          value={title}
          onChange={(e) => setTitle(e.target.value)} />

        <button>Submit</button>
      </form>

    </div>
  )
}

export default App