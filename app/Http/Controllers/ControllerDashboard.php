<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Exercicio;
use App\Models\GrupoMuscular;
class ControllerDashboard extends Controller
{
    //
    public function index() 
    {
        $user = Auth::user();
        $idUser = $user->id;
    // Buscar todos os grupos musculares do usuário junto com seus exercícios
    $gruposMusculares = GrupoMuscular::where("user_id", $idUser)->with("exercicio")->get();
   
        return Inertia::render('Dashboard', [
            "gruposMusculares" => $gruposMusculares
        ]);
    }
}