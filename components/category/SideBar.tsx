import React from 'react'
import Select from '../mini/Select'

const SideBar = () => {
  return (
<>
<div className='bg-secondary h-screen w-56 mt-12'>
    <div>
        {/* type */}
        <div>
            <h3 className='uppercase text-xs text-button3 font-semibold tracking-widest'> type</h3>
            <Select/>
        </div>
    </div>
</div>
</>


)
}

export default SideBar