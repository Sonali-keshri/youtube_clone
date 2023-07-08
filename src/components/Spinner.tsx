import React from 'react'

const Spinner = () => {
    return (
        <div className='flex items-center justify-center w-full '>
            <div className='w-10 h-10 border-2 border-red-600 border-t-transparent animate-spin rounded-full  '>

            </div>
        </div>
    )
}

export default Spinner