import TreinoDesktop from '@/Components/TreinoDesktop';
import TreinoReposive from '@/Components/TreinoReposive';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {usePage} from "@inertiajs/react";
export default function Dashboard() {
const gruposMusculares = usePage().props.gruposMusculares;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                   Inicio
                </h2>
            }
        >
            <Head title="Seu Treino" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="m-3 justify-center flex bg-white p-6 shadow-sm sm:rounded-lg">
      <div className="font-medium ">
      <h3>Observe:</h3> <p>A:Segunda , B:Terça , C:Quarta, 
        D:Quinta , E:Sexta , F:Sabádo , G:Domingo
        </p>
      </div>
    </div>
                    <TreinoReposive  gruposMusculares={gruposMusculares}/>
                    <TreinoDesktop gruposMusculares={gruposMusculares}/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
