import React from 'react'
 

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
  <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-green-500"></div>
</div>

  )
}

export default Spinner