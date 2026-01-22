import React, {useState} from 'react'

export default function Register() {

    const [formData, setFormData]=useState(
        {
         name:"",
        phone:"",
        email:"",
        password:"",
        c_password:""
        }
    );
    return (
        <>
            <section className='sm:flex sm:justify-center sm:items-center sm:py-38 bg-stone-100'>
                <div className='sm:flex sm:flex-col sm:justify-center sm:items-center bg-white border-stone-200 rounded sm:p-3 shadow flex text-center flex-col align-center justify-around gap-3'>
                    <h2 className='font-bold text-2xl'>Sing In</h2>
                    <div >
                        <input className='border-stone-300 border p-1 rounded focus:outline-stone-400 sm:min-w-md' type="text" placeholder='enter name' />
                    </div>
                    <div>
                        <input className='border-stone-300 border p-1 rounded sm:w-md' type="tel" placeholder='enter phone' />
                    </div>
                    <div>
                        <input className='border-stone-300 border p-1 rounded sm:w-md' type="email" placeholder='enter email address' />
                    </div>

                    <div className='sm:w-md sm:flex sm:gap-2.5 sm:items-center '>

                        <div>
                            <input className='border-stone-300 border p-1 rounded sm:w-55 my-1' type="text" placeholder='create password' />
                        </div>
                        <div>
                            <input className='border-stone-300 border p-1 rounded sm:w-55 ' type="text" placeholder='conform password' />
                        </div>

                    </div>
                    <div className='my-1.5'>
                        <input type="submit" value="submit" className='bg-blue-600 text-white px-3 py-1 rounded hover:scale-110 hover:bg-blue-700 transition-all duration-150 hover:cursor-pointer'/>
                    </div>
                </div>
            </section>
        </>
    )
}
