import React from 'react'
import community from '../images/community.png'

const Home = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center">
          <img width={600} height={600} src={community} alt="Community" />
        </div>
      </div>
    </div>
  )
}

export default Home
