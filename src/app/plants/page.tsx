import { stackServerApp } from "@/stack/server";
import { SignIn } from "@stackframe/stack";
import React from "react";

const page = async () => {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  return (
    <>
      {user ? (
        <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-full"></div>
        </div>
      ) : (
        <div className="flex justify-center mt-20 items-center">
          <SignIn />
        </div>
      )}
    </>
  );
};

export default page;
