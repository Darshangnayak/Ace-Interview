// Modal.jsx
import React from 'react';

const Modal = ({ children, isOpen, onClose, title, hideHeader }) => {
  if (!isOpen) return null;
  
  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/40'>
      <div className='relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden min-w-[400px]'>
        {!hideHeader && (
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <h3 className='md:text-lg font-medium text-gray-900'>{title}</h3>
          </div>
        )}
        
        <button
          type="button"
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
          onClick={onClose}
        >
          <svg
  className='w-5 h-5'
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 14 14"
>
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M1 1l12 12M13 1L1 13"
  />
</svg>
        </button>

        <div className='flex-1 overflow-y-auto custom-scrollbar p-6'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;