import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import { router } from "@inertiajs/react";
export default function Exercicio({nome, id , setIsModalOpen})
{
  const [containers,setContainers] = useState([1]);

  const [treinoDado , setTreinoDado] = useState({
    id_gp_mc: id ?? null , 
  })
  console.log(treinoDado);
  


 const handleClosedModal = () =>{
  setIsModalOpen(false)
 }

 const handleAddContainer = () => {
  setContainers([...containers, containers.length + 1]); // Adiciona um novo container
};

const handleInputChange = (e) => {
  const {name, value} = e.target
  setTreinoDado((prevV) => ({
    ...prevV, 
    [name]:value
  }))
}
const handleSubmitDados = (e) =>{
  e.preventDefault()
  router.post("/exerciciopost",treinoDado)
}

return(
    <div>
    <div className="flex justify-end">
      <PrimaryButton
      onClick={handleClosedModal}
      >Voltar</PrimaryButton>
    </div>
  <div className="">
  <h3>Exercicio para :   {nome} - {id}</h3>
  <div className="flex justify-between ">
 <div className="">
 {containers.map((index) => (
<div key={index} className="container-create m-2">
Exercicio:{index}
<InputLabel>
Nome:
<TextInput
value={treinoDado[`nome${index}`]}
onChange={handleInputChange}
name={`nome${index}`}
placeholder="ex. supino"
/>
</InputLabel>
<InputLabel>
Descanso:
<TextInput
name={`time_exercicio${index}`}
placeholder="ex. 2"
value={treinoDado[`time_exercicio${index}`]}
onChange={handleInputChange}
/>
</InputLabel>
<InputLabel>
Serie:
<TextInput
name={`serie${index}`}
placeholder="ex. 2"
type="number"
value={treinoDado[`serie${index}`]}
onChange={handleInputChange}
/>
</InputLabel>
<InputLabel>
Repetição:
<TextInput
value={treinoDado[`repeticao${index}`]}
onChange={handleInputChange}
name={`repeticao${index}`}
placeholder="ex. 10"
/>
</InputLabel>
<InputLabel>
Técnica:
<TextInput
name={`tecnica${index}`}
value={treinoDado[`tecnica${index}`]}
onChange={handleInputChange}
placeholder="ex. drop 2 série no final"
/>
</InputLabel>
</div>
))}
<div className="flex justify-end">
  <PrimaryButton onClick={handleSubmitDados}>Add</PrimaryButton>
</div>
 </div>
  <div className="">
    <PrimaryButton 
    onClick={handleAddContainer}
    >Add</PrimaryButton>
  </div>
  </div>
  </div>

  </div>
  )
}