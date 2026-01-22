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
            <section className='flex justify-center items-center h-[100vh] bg-stone-100'>
                <div className='flex flex-col justify-center items-center bg-white border-stone-200 rounded p-3 shadow gap-3'>
                    <h2 className='font-bold text-2xl'>Sing In</h2>
                    <div >
                        <input className='border-stone-300 border p-1 rounded focus:outline-stone-400 w-md' type="text" placeholder='enter name' />
                    </div>
                    <div>
                        <input className='border-stone-300 border p-1 rounded w-md' type="tel" placeholder='enter phone' />
                    </div>
                    <div>
                        <input className='border-stone-300 border p-1 rounded w-md' type="email" placeholder='enter email address' />
                    </div>

                    <div className='w-md flex gap-2.5 items-center'>

                        <div>
                            <input className='border-stone-300 border p-1 rounded w-55' type="text" placeholder='create password' />
                        </div>
                        <div>
                            <input className='border-stone-300 border p-1 rounded w-55' type="text" placeholder='conform password' />
                        </div>

                    </div>
                    <div>
                        <input type="submit" value="submit" className='bg-blue-600 text-white px-3 py-1 rounded hover:scale-110 hover:bg-blue-700 transition-all duration-150 hover:cursor-pointer'/>
                    </div>
                </div>
            </section>
        </>
    )
}
