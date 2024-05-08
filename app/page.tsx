import React from 'react'
import {ConnectButton} from '@/lib/utils/thirdweb'
import { client } from '@/lib/utils'



const Home = () => {
  return (
    <div>
      <ConnectButton client={client} />
    </div>
  )
}

export default Home
