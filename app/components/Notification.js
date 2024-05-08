import React from "react";

export default function Notification({ type, text }) {
    const backgroundColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  return (
    <div
      className={`fixed bottom-0 left-0 w-full text-white p-4 ${backgroundColor}`}
    >
      {text}
    </div>
  );
}
