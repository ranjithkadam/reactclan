import React from 'react'

export default function Login() {
  return (
      <>
        <form action="../App">
            <section className='sm:flex sm:justify-center sm:items-center sm:py-38 bg-stone-100'>
                <div className='sm:flex sm:flex-col sm:justify-center sm:items-center bg-white border-stone-200 rounded sm:p-3 shadow flex text-center flex-col align-center justify-around gap-3'>
                    <h2 className='font-bold text-2xl'>Login</h2>

                    <div className='sm:w-md sm:flex flex-col sm:gap-2.5 sm:items-center '>

                        <div>
                            <input className='border-stone-300 border p-1 rounded focus:outline-stone-400 sm:w-55 my-1' type="email" placeholder='enter email' name="email" /><br />   
                        </div>
                        
                        <div>
                            <input className='border-stone-300 border p-1 rounded focus:outline-stone-400 sm:w-55 ' type="password" placeholder='enter password' name="c_password" />
                        </div>
                       
                    </div>
                     <div className=' text-[10px] w-full'>
                          <p className="">Not have an account <a href="./Register" className='text-blue-600 underline'>Register</a></p>
                        </div>
                    <div className='my-1.5'>
                         <button className='bg-blue-600 text-white px-3 py-1 rounded hover:scale-110 hover:bg-blue-700 transition-all duration-150 hover:cursor-pointer'>Login</button>
                    </div>
                </div>
            </section>
          </form>
          </>
  )
}
