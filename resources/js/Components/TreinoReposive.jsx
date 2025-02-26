export default function TreinoReposive({gruposMusculares})
{
  return (
    <>
    
    {gruposMusculares.map((grupo) =>(
 <div className="m-3 overflow-hidden bg-white shadow-sm sm:rounded-lg lg:hidden block">
 <div className="p-6 text-gray-900 font-semibold">
 <p>{grupo.dia.split(":")[0]}:{grupo.nome}</p>
 </div>
</div>
    ))}
   
</> 
  )
}