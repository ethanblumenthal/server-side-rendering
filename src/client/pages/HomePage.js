import React from 'react'

const Home = () => {
  return (
    <div>
      <div>Home Component</div>
      <button onClick={() => console.log('PUSHED')}>Push Me</button>
    </div>
  )
}

export default { component: Home }
