import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function JoinUs() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SubmitForm = (e) => {
    e.preventDefault();

    console.log({
      username,
      email,
      password
    });

    // later you can send this to backend
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-slate-50 overflow-hidden font-sans">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm p-10 mx-4 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-lg">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-slate-900">Join Us</h1>
          <p className="text-sm text-slate-500 mt-2">
            Create your account to get started
          </p>
        </div>

        <form className="space-y-4" onSubmit={SubmitForm}>

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-200 text-sm"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-200 text-sm"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-200 text-sm"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-4 bg-slate-900 text-white text-sm font-semibold rounded-2xl hover:bg-slate-800 transition active:scale-[0.98]"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400">
            By joining, you agree to our{' '}
            <a href="#" className="underline hover:text-slate-600">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-slate-600">
              Privacy Policy
            </a>.
          </p>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Already a member?{' '}
              <Link to="/signin" className="text-slate-900 font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}