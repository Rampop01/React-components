import React, { useState } from "react";

function Modal() {
  const [createAccount, setCreateAccount] = useState(false);

  const handleModal = () => {
    setCreateAccount(!createAccount);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 relative">
      <button
        onClick={handleModal}
        className="absolute bottom-10 bg-[#45f882] text-black font-bold py-2 px-4 rounded-full hover:bg-green-500"
      >
        PAY NOW
      </button>
      {createAccount && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-[#e0ffe0] bg-opacity-40"></div>
          <div className="relative bg-black border-2 border-[#45f882] rounded-lg shadow-2xl p-6 max-w-sm w-full h-auto min-h-[300px] z-10 flex flex-col justify-between">
            <button
              onClick={handleModal}
              className="text-white text-xl absolute top-4 right-4"
            >
              &times;
            </button>
            <div className="flex-1 flex flex-col justify-center items-center">
              <h1 className="text-2xl text-white mb-4">
                You Don't Have a Profile Yet
              </h1>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#45f882] text-black font-bold py-2 px-4 rounded-full hover:bg-green-500">
                Create Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
