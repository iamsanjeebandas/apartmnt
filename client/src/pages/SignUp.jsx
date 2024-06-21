import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button
          type="button"
          class="text-white font-bold disabled:opacity-80 bg-main-blue hover:bg-main-blue-dark focus:outline-none focus:ring-4 focus:ring-main-blue-light rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an account ?</p>
        <Link to="/signin">
          <span className="text-main-blue-light">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
