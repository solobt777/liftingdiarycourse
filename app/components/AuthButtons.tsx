"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function AuthButtons() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-8 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
