import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';
import { Link, usePage ,useForm } from '@inertiajs/react';
import TextInput from "@/Components/TextInput";
import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import Exercicio from "@/Components/Exercicio";
import GrupoMuscular from "@/Components/GrupoMuscular";


export default function CreateExe()
{
  
const [values , setValues] = useState({
  id_gp_mc: null,
  nome_gp_mc: ""
  
})

const [isModalOpen, setIsModalOpen] = useState(false);
const user = usePage().props.auth.user;

  const {data , setData, post , processing, errors, reset } = useForm({
    nome: "", 
    user_id: user.id, 
    dia: "segunda"
})

const diaData = {
  segunda: "A:Segunda",
  terca: "B:Terça", 
  quarta: "C:Quarta", 
  quinta: "D:Quinta", 
  sexta: "E:Sexta", 
  sabado: "F:Sábado", 
  domingo: "G:Domingo"
}

 const submit = (e) => {
  e.preventDefault();
  post("/postCriar", {
    onSuccess: () => reset(),
  })
 }




 return (
  <AuthenticatedLayout
  header={
    <h2 className="text-xl font-semibold leading-tight text-gray-800">
    Criar Treino
 </h2>
  }
  >
    <Head title="Criar Treino"/>

    <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                       
                      
                         <InputLabel>
                          Grupo muscular: <TextInput
                          name="grupo_muscular"
                          placeholder="ex.costas"
                          value={data.nome}
                          onChange={(e) => setData("nome" ,e.target.value)}
                          />
                          
                          
                          </InputLabel>
                           <InputLabel>
                           Dia: <select name="dia" id="dia"
                           value={data.dia}
                           onChange={(e) => setData("dia", e.target.value)}
                           className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                           >
                            {Object.entries(diaData).map(([key, value]) =>(
                              <option key={key} value={value}>{value}</option>
                            ))}
                           </select>
                           </InputLabel>

                          <PrimaryButton
                          onClick={submit}
                          className="ml-2"
                        
                          >add</PrimaryButton>
                         
                      <div className="bg-slate-100 p-6">
                    {isModalOpen === false && 
                   <GrupoMuscular setIsModalOpen={setIsModalOpen} setValues={setValues}/>
                    }
                      {isModalOpen === true && 
                     <Exercicio id={values.id_gp_mc} nome={values.nome_gp_mc} setIsModalOpen={setIsModalOpen}/>
                      }
             
                      </div>
                        </div>
                    </div>
                </div>
    
            </div>
</AuthenticatedLayout>
 )
}