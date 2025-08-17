import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Exercicio() {
  const exercicio = usePage().props.exericicos;
  const gruposMusculares = usePage().props.grupoMusculares;
  const [timeLeft, setTimeLeft] = useState(null);
  const [selectedExercicio, setSelectedExercicio] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // New state for the drawer

  const hanndleClick = (ex) => {
    setSelectedExercicio(ex);
    setIsDrawerOpen(true); // Open the drawer
    setTimeLeft(null);
  };

  const startTimer = (time) => {
    setTimeLeft(time);
  };

  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft > 0) {
      const timeId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timeId);
    }
  }, [timeLeft]);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          {gruposMusculares.nome}
        </h2>
      }
    >
      <Head title="Exercicio" />
       <div className="flex flex-wrap gap-4 mt-4">
            {exercicio.map((ex) => (
              <Card 
                key={ex.id} 
                onClick={() => hanndleClick(ex)}
                className="w-full sm:w-1/2 lg:w-1/4 cursor-pointer hover:shadow-md transition-shadow duration-200 hover:scale-105 transform transition-transform"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {ex.nome}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
         </div>

      {/* Drawer Component */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{selectedExercicio?.nome}</DrawerTitle>
            <DrawerDescription>Detalhes do exercício</DrawerDescription>
          </DrawerHeader>
          {selectedExercicio && (
            <div className="p-4">
              <p>Serie:{selectedExercicio.serie}</p>
              <p>Repetição: {selectedExercicio.repeticao}</p>
              <p>
                Técnica: {selectedExercicio.tecnica}
              </p>
              <p>
                Descanso: {selectedExercicio.time_exercicio} segundos
              </p>
              {timeLeft !== null && (
                <p>
                  Tempo restante: {timeLeft} segundos
                </p>
              )}
              {timeLeft === null && (
                <button
                  onClick={() => startTimer(selectedExercicio.time_exercicio)}
                  className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                >
                  Iniciar Descanso
                </button>
              )}
            </div>
          )}
          <DrawerFooter>
            <DrawerClose>
              <button className="w-full rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700">
                Fechar
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </AuthenticatedLayout>
  );
}