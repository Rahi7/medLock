import { Button } from 'flowbite-react'
import { Link } from "react-router-dom"
import React from 'react'

const Home = () => {
    
  return (
    <div className='min-h-screen'>
       <Link to='/form'>
                      <Button gradientDuoTone='purpleToBlue' outline>
                         Add health record
                      </Button>
                    </Link>
    

    </div>
  )
}

export default Home