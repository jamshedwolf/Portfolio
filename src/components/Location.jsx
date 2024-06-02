import React from 'react'

function Location() {
  return (
    <div className='flex flex-col font-bold  h-screen bg-black items-center justify-center '>
        <div className="p-10 h-[10vh] text-3xl text-orange-500 ">
My Location  "River view boys hostel khari"

        </div>
        <div className="h-[90vh] w-[100vw] mt-5">
        <iframe  className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.611155764051!2d74.36235801108896!3d35.917058121308166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e6490c3641cff1%3A0xaa93226361590fb6!2sRiver%20view%20boys%20hostel!5e0!3m2!1sen!2sus!4v1717339659821!5m2!1sen!2sus"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        </div>
  )
}

export default Location


