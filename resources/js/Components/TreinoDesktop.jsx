import { router } from "@inertiajs/react"

export default function TreinoDesktop({gruposMusculares})
{
 
    const handlePageExercicio = (id) =>{
   router.get(`/dashboard/exercicio/${id}`)
    }

  return(
    <>
    
    <div className=" mt-4 hidden mx-auto w-full sm:px-6 lg:px-8 lg:flex lg:flex-wrap lg:justify-center lg:gap-4 cursor-pointer">
      
      {gruposMusculares.map((grupo) =>(
       <div
       onClick={() => handlePageExercicio(grupo.id)}
       key={grupo.id}
       className="w-full sm:w-1/2 lg:w-1/4 overflow-hidden bg-white shadow-sm sm:rounded-lg p-4"
     >
       <div className="p-6 text-gray-900 font-semibold">
        <p>{grupo.dia.split(":")[0]}:{grupo.nome}</p>
       </div>
     </div>
      ))}

</div>
</>
  )
}