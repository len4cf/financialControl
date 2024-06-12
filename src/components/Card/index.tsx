import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa"
import { MdAttachMoney } from "react-icons/md"

type CardProps = {
  title: string
  value: string | number
  mode: "entry" | "exit" | "total"
}

export default function Card({ title, value, mode }: CardProps) {
  const entryIcon = <FaRegArrowAltCircleUp />
  const exitIcon = <FaRegArrowAltCircleDown />
  const totalIcon = <MdAttachMoney />

  const cardColor =
    mode === "entry"
      ? entryIcon
      : mode === "exit"
      ? exitIcon
      : mode === "total"
      ? totalIcon
      : ""

  return (
    <div className="md:w-[400px] w-full md:h-[200px] h-[100px] bg-zinc-300 rounded px-8 py-2">
      <p className="text-zinc-700 text-center flex justify-between md:text-2xl text-xl items-center">
        {title}
        {cardColor}
      </p>
      <div className="bg-slate-100 md:h-[65%] h-[40%] mt-4 p-2 rounded flex items-center justify-center">
        <p className="font-semibold md:text-4xl text-xl">{value}</p>
      </div>
    </div>
  )
}
