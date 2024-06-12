import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa"
import { TransacaoType } from "../../App"

type ExpensesListProps = {
  transacoes: TransacaoType[]
  mascaraValor: (valor: number) => string
}

export default function ExpensesList({
  transacoes,
  mascaraValor,
}: ExpensesListProps) {
  return (
    <>
      {transacoes.map((transacao, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-zinc-300 p-4 rounded text-zinc-700 mt-4 w-full max-w-full "
        >
          <span className="w-[100px]">{transacao.descricao}</span>
          <span>{mascaraValor(transacao.valor)}</span>
          <span
            className={`${
              transacao.tipo === "entrada" ? "text-green-600" : "text-red-500"
            } flex items-center gap-2`}
          >
            {transacao.tipo}
            {transacao.tipo === "entrada" ? (
              <FaRegArrowAltCircleUp />
            ) : (
              <FaRegArrowAltCircleDown />
            )}
          </span>
        </div>
      ))}
    </>
  )
}
