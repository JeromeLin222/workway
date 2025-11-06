import { useState } from 'react';

export function AccordionItem({ question, answer }) {

  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="p-6 border shadow-[0px_0px_16px_0px_rgba(0,0,0,0.12)] border-natural-85 rounded-2xl bg-white">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-start gap-1 text-body-md md:text-body-lg w-full font-bold text-natural-50 text-left"
      >
        <p>
          <span className="text-body-lg md:text-title-xl mr-2">Q.</span>{question}
        </p>
        <span
          className={`
            transition-transform
            duration-300
            p-1
            ${isOpen ? 'rotate-0' : 'rotate-90'}
          `}
        >
          <img src="/images/icon/expand.svg"/>
        </span>
      </button>
      <div 
        className={`
          overflow-hidden
          transition-all
          duration-500
          ${isOpen ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <p className='border-t border-dashed border-natural-85 pt-4 mt-4 md:pt-6 md:mt-6'>
          <span className="text-body-lg md:text-title-xl text-primary mr-2">A.</span>{answer}
        </p>
      </div>
    </div>
  )
}