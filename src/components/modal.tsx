'use client'

import { ReactNode, useState } from 'react'

interface ClassProps {
  className?: string
}

function Modal({
  children,
  className,
}: {
  children: ReactNode
  className?: ClassProps['className']
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = ''
  }
  return (
    <div className={className}>
      <div onClick={openModal}>{children}</div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/70 backdrop-blur-xl transition-opacity delay-700 duration-1000"
          onClick={closeModal}
        >
          <div
            className="relative h-[489px] w-[794px] scale-100 transform rounded-lg bg-gray-400 p-3 transition-transform delay-1000 duration-1000"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 text-3xl font-semibold"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal