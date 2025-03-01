import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Exercicio()
{
  const exercicio = usePage().props.exericicos;
  console.log(exercicio);
  
  return (
  <AuthenticatedLayout
  header={
    <h2 className="text-xl font-semibold leading-tight text-gray-800">
  Exercicio
 </h2>
  }
  >
         <Head title="Exercicio"/>
      <div className=" m-3 overflow-hidden bg-white shadow-sm sm:rounded-lg  cursor-pointer">
        <div className="p-6 ">
          <p className="text-gray-900 font-semibold">exercicio</p>
          <p className="">serie:4</p>
          <p className="">repetição: 8</p>
        </div>
      </div>
  </AuthenticatedLayout>
  )
}