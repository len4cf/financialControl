import { FaRegArrowAltCircleUp } from "react-icons/fa"

type CardProps = {
  title: string
  value: string
  mode: "entry" | "exit" | "total"
}

export default function Card({ title, value, mode }: CardProps) {
  const entryIcon = <FaRegArrowAltCircleUp />

  const cardColor =
    mode === "entry"
      ? entryIcon
      : mode === "exit"
      ? "bg-red-300"
      : "bg-zinc-300"

  return (
    <div className="w-[400px] h-[200px] bg-zinc-300 rounded px-8 py-2">
      <p className="text-zinc-700 text-center flex justify-between text-2xl items-center">
        {title}
        {cardColor}
      </p>
      <div className="bg-slate-100 h-[65%] mt-4 p-2 rounded flex items-center justify-center">
        <p className="font-semibold text-4xl">{value}</p>
      </div>
    </div>
  )
}
