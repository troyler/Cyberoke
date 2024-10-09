import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

const handleSubmit = async (e) => {
  try {
    e.preventDefault(); //prevents auto-refresh after submit
    setLoading(true);
    setError(false);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);
    if (data.success === false) {
      setError(true);
      return;
    }
  } catch (error) {
    setLoading(false);
    setError(true);
  }
  
};

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>'Sing Up!'</h1>
      <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
        <input 
            required={true} 
            type="text" 
            placeholder='username' 
            id='username' 
            className='bg-slate-100 p-3 rounded-lg'
            onChange={handleChange} 
            />
        <input 
          type="email"
          placeholder='example@example.com'
          id='email' 
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange} 
          />
        <input 
        type="password" 
        placeholder='********' 
        id='password' 
        className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChange} 
        />
        <button disabled={loading} className ='bg-slate-700 text-white 
        p-3 rounded-lg uppercase
        hover:opacity-95 disabled:opacity-80'>{loading? 'Loading...' : 'Sign Up'} </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
      <p className='text-red-600'>{error && "Username or email taken"}</p>
    </div>
  )
}
