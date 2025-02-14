import React,{useState} from 'react';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    setSubmittedData(data);
  };
  // submittedData('');
  
  return (
    <>
    <div className='h-screen flex justify-center items-center  m-0 p-0 w-full bg-gradient-to-t from-yellow-400 to-green-400 '>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-[400px]  p-8 border-2 border-black rounded-lg [&>*]:hover:scale-103">
        {/* Username Field */}
        <h1 className='text-3xl font-bold bg-gradient-to-r text-center from-yellow-600 to-purple-500 underline bg-clip-text text-transparent'>React Hook Form</h1>
        <div className='flex flex-col p-2'>
          <label className='text-white font-bold'>Username:</label>
          <input
            type="text"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 5, message: "Minimum 5 characters required" },
              maxLength: { value: 10, message: "Maximum 10 characters allowed" }
            })}
            placeholder="Username"
            className="border p-2 rounded bg-slate-200"
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>

        {/* Email Field */}
        <div className='flex flex-col p-2'>
          <label className='text-white font-bold'>Ema il:</label>
          <input
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" }
            })}
            placeholder="Email"
            className="border p-2 rounded bg-slate-200"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className='flex flex-col p-2'>
          <label className='text-white font-bold'>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must have 8+ characters, 1 uppercase, 1 number, and 1 special character" }})}
            placeholder="Password"
            className="border p-2 rounded bg-slate-200"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        {/* Confirm Password Field */}
        <div className='flex flex-col p-2'>
          <label className='text-white font-bold'>Confirm Password:</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must have 8+ characters, 1 uppercase, 1 number, and 1 special character" }})}     
            placeholder="Confirm Password"
            className="border p-2 rounded bg-slate-100"
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="ml-22 font-bold w-[50%] bg-blue-700 hover:blue-900 text-white p-2 rounded mt-2">
          Submit
        </button>
        {submittedData && (
          <div className="mt-6 p-1 w-[340px] bg-green-300 border-2 border-gray-400 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Submitted Data:</h2>
            <p><strong>Username:</strong> {submittedData.username}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Password:</strong> {submittedData.password}</p>
            <p><strong>Confirm Password:</strong> {submittedData.confirmPassword}</p>
          </div>
        )}
      </form>
      
      </div>
    </>
  );
}

export default App;

