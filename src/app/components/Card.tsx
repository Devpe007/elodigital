import { ReactNode } from "react"

type CardProps = {
  children: ReactNode,
  title: string,
}

export default function Card({ children, title }: CardProps) {
  return (
    <div className="flex flex-col items-center w-80 h-[380px] bg-white px-8 py-14 lg:px-10 rounded">
      <h1 className="text-3xl mb-8">{title}</h1>

      <p className="text-lg">
        {children}
      </p>
    </div>
  )
}
