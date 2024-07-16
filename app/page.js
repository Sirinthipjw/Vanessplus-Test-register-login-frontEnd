"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState();

  return (
    <>
      <div>
        <div className="flex flex-col min-screen justify-center items-center py-52">
          <div className="shadow-xl w-1/2 h-64 bg-slate-100 rounded-md">
            <div className="py-12">
              <p className="text-sky-800 text-4xl  font-semibold text-center">
                Welcome to Test1
              </p>
              <div className="space-y-4 flex flex-col items-center pt-5">
                <div
                  onClick={() => setMenu("login")}
                  className={menu === "login" ? "active" : ""}
                >
                  <Link href="/login">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-80"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>
                </div>

                <div
                  onClick={() => setMenu("Register")}
                  className={menu === "Register" ? "active" : ""}
                >
                  <Link href="/Register">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-80"
                      type="button"
                    >
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
