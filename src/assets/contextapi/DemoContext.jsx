import React, { useContext } from 'react'
import AppContextapi from './Createcontextapi';

const DemoContext=()=>
{
     const myname=useContext(AppContextapi)
    return (
        <div>
              <p className='text-blue-300 text-2xl'>Hello {myname} Again !</p>
        </div>
    );

}
export default DemoContext