import React from 'react'
import HomeContent from '../components/HomeContent'
import { TransitionWrapper } from '../App'



const Home = () => {
  return (
    <>
    <TransitionWrapper >
    <div className=''> 
      <div className='h-full text-black'>
        <HomeContent />

      </div>
    </div>
    </TransitionWrapper>
    </>
  )
}

export default Home