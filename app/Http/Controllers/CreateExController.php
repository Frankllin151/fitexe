<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GrupoMuscular;
use Illuminate\Support\Facades\Auth;
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
    dd($request->all());
  }
}