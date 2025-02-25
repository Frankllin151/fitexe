import TextInput from "@/Components/TextInput";
import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { usePage} from "@inertiajs/react";
export default function GrupoMuscular({setIsModalOpen, setValues})
{
 
  const gruposMusculares = usePage().props.gruposMusculares
  ;


 const handleOpenModal = (id, nome) => {
  setIsModalOpen(true)
  setValues({
    id_gp_mc: id, 
    nome_gp_mc: nome 
  })
 }
 return(

  <div className="">
  <h3 className="">Grupo Muscular:</h3>
  {gruposMusculares.length > 0 ? (
    gruposMusculares.map((grupo) => (
      <div className="m-2" key={grupo.id}>
        <p>
          {grupo.nome} - {grupo.dia} -  
          <PrimaryButton onClick={() => handleOpenModal(grupo.id, grupo.nome)}>
            Criar Exercicio
          </PrimaryButton>
        </p>
      </div>
    ))
  ) : (
    <p className="text-gray-500">Sem grupo muscular</p>
  )}
</div>

 )
}