import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ModelViewer from "./components/ModelViewer";

export default function App() {
  return (
    <>
      <ModelViewer />
    </>
  );
}

const NoElement = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-1 justify-center items-center">
        <p className="font-mono font-bold text-3xl text-red-900 bg-red-400 px-8 py-4 border border-red-800 rounded-2xl">
          404
        </p>
        <Link
          className="font-mono text- font-bold text-blue-700 underline"
          to="https://v325ph.codesandbox.io/"
        >
          Please return to home
        </Link>
      </div>
    </>
  );
};
