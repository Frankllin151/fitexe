<?php

namespace App\Http\Controllers;

use App\Models\Exercicio;
use Illuminate\Http\Request;
use App\Models\GrupoMuscular;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CreateExController extends Controller
{
    //
   
    public function create()
    {
        $user = Auth::user();
        $getAllGp = GrupoMuscular::where("user_id" , $user->id)->get();
 return Inertia::render("CreateExe", [
    "gruposMusculares" => $getAllGp
 ]);
    }
    public function postCriar(Request $request)
    {
        $user = Auth::user();
        $data = $request->all();
        if($data["user_id"] !== $user->id ){
            dd("Um erro ocorreu!");
        }
  
    $grupoMuscular = GrupoMuscular::create([
    "user_id" => $data["user_id"], 
    "nome" => $data["nome"],
    "dia" => $data["dia"]
    ]);
//return response()->json(["success" => true, "data" => $grupoMuscular], 201);
return redirect()->route("create");
    }



  public function exercicioPost(Request $request)
  {
   $dados = $request->all();
       
$id_gp_mc = $dados["id_gp_mc"];
    $exercicios = [];
    foreach($dados as $key => $value){
      if(preg_match("/nome(\d+)/", $key, $matches)){
    $index = $matches[1]; 

    $exercicios[] = [
  'id_gp_mc' => $id_gp_mc,
  'nome' => $dados["nome{$index}"],
  'time_exercicio' => $dados["time_exercicio{$index}"] ?? "Sem descanso",
  'serie' => $dados["serie{$index}"],
  'repeticao' => $dados["repeticao{$index}"] ,
  'tecnica' => $dados["tecnica{$index}"] ?? null,

    ];
      }
    }
  DB::table("exercicio")->insert($exercicios);

  return response()->json(['message' => 'Exercícios cadastrados com sucesso!']);
  }

  public function readExercicio($id)
  {
    $exercicios = DB::table("exercicio")->where("id_gp_mc", $id)->get();
    return Inertia::render("Exercicio", [
      "exericicos" => $exercicios
    ]);
  }
}