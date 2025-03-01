import { router } from "@inertiajs/react"
export default function TreinoReposive({gruposMusculares})
{
  const handlePageExercicio = (id) =>{
 router.get(`/dashboard/exercicio/${id}`)
  }
  

  return (
    <>
    
    {gruposMusculares.map((grupo) =>(
 <div key={grupo.id} className="m-3 overflow-hidden bg-white shadow-sm sm:rounded-lg lg:hidden block cursor-pointer"
 onClick={() => handlePageExercicio(grupo.id)}
 >
 <div className="p-6 text-gray-900 font-semibold">
 <p>{grupo.dia.split(":")[0]}:{grupo.nome}</p>
 </div>
</div>
    ))}
   
</> 
  )
}