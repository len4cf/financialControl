import Card from "./components/Card"
import Divider from "./components/Divider/Divider"
import Title from "./components/Title/Title"

function App() {
  return (
    <div className="">
      <Title label="XXXX" size="xl" cClassName="mb-4 text-center" />
      <Divider />
      <div className="flex justify-between">
        <Card title="Saída" value="R$10,00" mode={"entry"} />
        <Card title="Entrada" value="R$20,00" />
        <Card title="Entrada" value="R$20,00" />
      </div>
    </div>
  )
}

export default App
