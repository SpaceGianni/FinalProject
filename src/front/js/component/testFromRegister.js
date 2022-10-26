import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ConfirmPassword = () => {
    // handle form events
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode:'onTouched'
    });

    // handle submit 
    const onSubmit = data => alert(JSON.stringify(data));

    
  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);

 

   // handle confirm password eye
   const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);


//    check password event 
const password = watch('password2')

  return (
    <React.Fragment>
      <section>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white w-auto h-auto pb-20 mt-20 rounded-lg mx-5 sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
            {/* header */}
            <div className="flex items-center justify-center h-32 shadow">
              <p className="uppercase text-4xl font-bold text-center">
                Validate Confirm Password
              </p>
            </div>

            {/* body */}
            <div>
              <div className="mx-5">
                {/* password section */}
                <div className="mt-10 relative">
                  <input
                    type={passwordEye === false ? "password" : "text"}
                    placeholder="Password"
                    className={`w-full h-14 rounded-lg ${ errors.password &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500"} `}
                    {...register("password2", { required: 'Password is required',
                    pattern:{
                        value:/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                        message:'Password should include at least one uppercase, one numeric value and one special character'
                    },
                    minLength:{
                        value:8,
                        message:'Minimum Required length is 8'
                    },
                    maxLength: {
                        value: 20,
                        message: "Maximum Required length is 20",
                      },
                 })}
                  />
                    {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}

                  {/* eye section */}
                  <div className="text-2xl absolute top-4 right-5">
                   
                  </div>
                </div>

                {/* confirm password section */}
                <div className="mt-10 relative">
                  <input
                    type={confirmPasswordEye === false ? "password" : "text"}
                    placeholder="Confirm Password"
                    onPaste={(e)=>{
                        e.preventDefault()
                        return false;
                      }}
                    className={`w-full h-14 rounded-lg ${ errors.confirmPassword &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500"} `}
                    {...register("confirmPassword", { required: 'confirm password is required',
                    validate: (value) =>
                    value === password || "The passwords do not match",
                 })}
                  />
                  {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>}

                  {/* eye section */}
                  <div className="text-2xl absolute top-4 right-5">
                    
                  </div>
                </div>


                {/* button section */}
                <div className="flex items-center justify-center mt-12">
                    <input
                    type='submit'
                    value='Submit'
                    className="h-10 w-2/5 rounded-lg font-bold bg-blue-900 text-white"
                    />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <button onClick={()=>{console.log(password)}}>asdasdasdasd</button>
    </React.Fragment>
  );
};

export default ConfirmPassword;
