import { useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import Divider from "./components/Divider/Divider"
import TextInput from "./components/Input/TextInput"
import Title from "./components/Title/Title"
import Radio from "./components/Input/Radio"
import ExpensesList from "./components/ExpensesList"

export type TransacaoType = {
  descricao: string
  valor: number
  tipo: string
}

function App() {
  const [selectedRadio, setSelectedRadio] = useState("")

  const [descricao, setDescricao] = useState("")

  const [valor, setValor] = useState("")

  const [valorSaidaEnviado, setValorSaidaEnviado] = useState(0)
  const [valorEntradaEnviado, setValorEntradaEnviado] = useState(0)

  const [transacoes, setTransacoes] = useState<TransacaoType[]>([])

  function handleRadioChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedRadio(e.target.value)
  }

  const handleDescricaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescricao(e.target.value)
  }

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValor(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const valorNumerico = parseInt(valor, 10)

    if (isNaN(valorNumerico)) {
      alert("Digite um valor válido")
      return
    }

    if (!valor || !descricao) {
      alert("Preencha todos os campos")
    }

    if (selectedRadio === "entrada") {
      setValorEntradaEnviado((prev) => prev + valorNumerico)
    } else if (selectedRadio === "saida") {
      setValorSaidaEnviado((prev) => prev + valorNumerico)
    }

    setTransacoes((prevTransacoes) => [
      ...prevTransacoes,
      {
        descricao: descricao,
        valor: valorNumerico,
        tipo: selectedRadio,
      },
    ])

    setValor("")
    setDescricao("")
  }

  const mascaraValor = (valor: number) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return (
    <div>
      <Title
        label="Controle Financeiro"
        size="xl"
        cClassName="mb-4 text-center"
      />
      <Divider />
      <div className="flex justify-between mt-4">
        <Card
          title="Entrada"
          value={mascaraValor(valorEntradaEnviado)}
          mode="entry"
        />
        <Card
          title="Saída"
          value={mascaraValor(valorSaidaEnviado)}
          mode="exit"
        />
        <Card
          title="Total"
          value={mascaraValor(valorEntradaEnviado - valorSaidaEnviado)}
          mode="total"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-[3%] flex items-center justify-between bg-zinc-300 p-10 rounded text-zinc-700"
      >
        <div className="flex gap-5">
          <TextInput
            label="Descrição"
            value={descricao}
            onChange={handleDescricaoChange}
            placeholder="Ex: Compra de pão"
            required
          />
          <TextInput
            label="Valor"
            value={valor}
            onChange={handleValorChange}
            placeholder="Digite apenas o valor. Ex: 100"
            required
          />
        </div>
        <div className="flex gap-14">
          <Radio
            onChange={handleRadioChange}
            isChecked={selectedRadio === "entrada"}
            name="transaction"
            value="entrada"
            label="Entrada"
          />
          <Radio
            onChange={handleRadioChange}
            isChecked={selectedRadio === "saida"}
            name="transaction"
            value="saida"
            label="Saída"
          />
        </div>
        <Button />
      </form>
      <ExpensesList transacoes={transacoes} mascaraValor={mascaraValor} />
    </div>
  )
}

export default App
