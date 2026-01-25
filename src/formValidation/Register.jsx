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

    const handleInputData=(e)=>{
        const{name, value} = e.target;
        setFormData(
            {
            ...formData,
            [name]:value,
            
        }
        );
    }

     // Validate the state variables using regex

    const validateFields = () => {
      const errors = {};

      // First Name Validation
      if(!/^[A-Z][a-z]{2,10}$/.test(formData.firstName)){
        errors.firstName = "First name must be 3-10 characters long and start with a capital letter";
      }
      // Last Name Validation
      if(!/^[A-Z][a-z]{2,10}$/.test(formData.lastName)){
        errors.lastName = "Last name must be 3-10 characters long and start with a capital letter";
      }
      // Mobile Validation
      if(!/^[6-9][0-9]{9}$/.test(formData.mobile)){
        errors.mobile = "Mobile number must be 10 digits long and start with 6-9";
      }
      // Email Validation
      if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
        errors.email = "Invalid email address";
      }
      // Password Validation with regex
      if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)){
        errors.password = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character";
      }
      // Confirm Password Validation
      if(formData.password !== formData.confirmPassword){
        errors.c_password = "Passwords do not match";
      }

      return errors;
    }

    // Handle form submission

    const handleSubmit = (e) =>{
      e.preventDefault();

      const errors = validateFields();
      
      if(Object.keys(errors).length > 0){
        setFormErrors(errors);
        return;
    }
      setFormErrors({}); // Clear previous errors if any
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted successfully", formData);
  }

     return (
        <>
        <form action="./Login">
            <section className='sm:flex sm:justify-center sm:items-center sm:py-38 bg-stone-100'>
                <div className='sm:flex sm:flex-col sm:justify-center sm:items-center bg-white border-stone-200 rounded sm:p-3 shadow flex text-center flex-col align-center justify-around gap-3'>
                    <h2 className='font-bold text-2xl'>Register</h2>
                    <div >
                        <input className='border-stone-300 border p-1 rounded focus:outline-stone-400 sm:min-w-md' type="text" placeholder='enter name' name="name" value={formData.name} onChange={handleInputData}/>
                    </div>
                    <div>
                        <input className='border-stone-300 border p-1 rounded focus:outline-stone-400 sm:w-md' type="tel" placeholder='enter phone' name="phone" value={formData.phone} onChange={handleInputData}/>
                    </div>
                    <div>
                        <input className='border-stone-300 border p-1 rounded focus:outline-stone-400 sm:w-md' type="email" placeholder='enter email address' name="email" value={formData.email} onChange={handleInputData}/>
                    </div>

                    <div className='sm:w-md sm:flex sm:gap-2.5 sm:items-center '>

                        <div>
                            <input className='border-stone-300 border p-1 rounded focus:outline-stone-400 sm:w-55 my-1' type="password" placeholder='create password' name="password" value={formData.password} onChange={handleInputData}/><br />
                            
                        </div>
                        <div>
                            <input className='border-stone-300 border p-1 rounded focus:outline-stone-400 sm:w-55 ' type="password" placeholder='conform password' name="c_password" value={formData.c_password} onChange={handleInputData}/>
                        </div>
                       
                    </div>
                     <div className=' text-[10px] w-full'>
                          <p className="text-start ">have an account <a href="#" className='text-blue-600 underline'>Loging</a></p>
                        </div>
                    <div className='my-1.5'>
                        <input type="submit" onClick={handleSubmit} value="submit" className='bg-blue-600 text-white px-3 py-1 rounded hover:scale-110 hover:bg-blue-700 transition-all duration-150 hover:cursor-pointer'/>
                    </div>
                </div>
            </section>
          </form>
        </>
    )
}
