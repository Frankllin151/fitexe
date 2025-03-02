import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { useState , useEffect } from "react";

export default function Exercicio()
{
  const exercicio = usePage().props.exericicos;
  const gruposMusculares = usePage().props.grupoMusculares;
  const [timeLeft , setTimeLeft] = useState(null);
 const [selectedExercicio, setSelectedExercicio] = useState(null)
const hanndleClick = (ex) => {
setSelectedExercicio(ex)
  setTimeLeft(null)
} 
const startTimer = (time) => {
   setTimeLeft(time)
}
useEffect(() => {
  if(timeLeft === null) return;
  if(timeLeft > 0){
    const timeId = setTimeout(() => {
      setTimeLeft(timeLeft -1)
    }, 1000)
    return () => clearTimeout(timeId)
  }
},[timeLeft])
  return (
  <AuthenticatedLayout
  header={
    <h2 className="text-xl font-semibold leading-tight text-gray-800">
 {gruposMusculares.nome}
 </h2>
  }
  >
         <Head title="Exercicio"/>
         {exercicio.map((ex) => (
        <div key={ex.id} 
        onClick={() =>hanndleClick(ex)}
        className=" m-3 overflow-hidden bg-white shadow-sm sm:rounded-lg  cursor-pointer">
        <div className="p-6 ">
          <p className="text-gray-900 font-semibold">{ex.nome}</p>
          <p className="">Serie:{ex.serie}</p>
          <p className="">Repetição:{ex.repeticao}</p>
          {selectedExercicio && selectedExercicio.id === ex.id && (
            <div className="mt-4">
              <p>Tecnica: {ex.tecnica}</p>
              <p>Descanso: {ex.time_exercicio}</p>
             
            </div>
          ) }
        </div>
      </div>
         ))}
      
  </AuthenticatedLayout>
  )
}