"use client"
import { router } from "@inertiajs/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function TreinoDesktop({gruposMusculares})
{
 
    const handlePageExercicio = (id) =>{
   router.get(`/dashboard/exercicio/${id}`)
    }

  return(
  <>
  <div className="gap-4">
    {gruposMusculares.map((grupo) => (
      <Card 
        key={grupo.id}
        onClick={() => handlePageExercicio(grupo.id)}
        className="w-full sm:w-1/2 lg:w-1/4 cursor-pointer hover:shadow-md transition-shadow duration-200 hover:scale-105 transform transition-transform"
      >
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {grupo.dia.split(":")[0]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 font-medium">
            {grupo.nome}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</>
  )
}