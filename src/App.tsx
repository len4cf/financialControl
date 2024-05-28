import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Divider from "./components/Divider/Divider";
import TextInput from "./components/Input/TextInput";
import Title from "./components/Title/Title";
import Radio from "./components/Input/Radio";

function App() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(null);

  function handleRadioChange(event) {
    setSelectedRadio(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!description || !value || !selectedRadio) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const transaction = {
      description,
      value: parseFloat(value),
      type: selectedRadio,
    };

    console.log("Submitted transaction:", transaction);

    setDescription("");
    setValue("");
    setSelectedRadio(null);


  }

  return (
    <div className="">
      <Title label="XXXX" size="xl" cClassName="mb-4 text-center" />
      <Divider />
      <div className="flex justify-between mt-4">
        <Card title="Entrada" value="R$10,00" mode={"entry"} />
        <Card title="Saída" value="R$20,00" mode={"exit"} />
        <Card title="Entrada" value="R$20,00" mode={"total"} />
      </div>
      <form onSubmit={handleSubmit} className="mt-[3%] flex items-center justify-between bg-zinc-300 p-10 rounded text-zinc-700">
        <div className="flex gap-5">
          <TextInput label="Descrição" value={description} onChange={handleDescriptionChange} />
          <TextInput label="Valor" value={value} onChange={handleValueChange} />
        </div>
        <div className="flex gap-14">
          <Radio onChange={handleRadioChange} isChecked={selectedRadio === "entrada"} name="transaction" value="entrada" label="Entrada" />
          <Radio onChange={handleRadioChange} isChecked={selectedRadio === "saida"} name="transaction" value="saida" label="Saída" />
        </div>
        <Button/>
      </form>
    </div>
  );
}

export default App;
