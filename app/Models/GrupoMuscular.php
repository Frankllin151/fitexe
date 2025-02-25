<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Exercicio;
class GrupoMuscular extends Model
{
    //
    protected $table = "gp_mc";
    protected $fillable = ["user_id" , "nome" , "dia"];

    // Criado relaçao para o exercicios 
    public function exercicio()
    {
        return $this->hasMany(Exercicio::class, "id_gp_mc", "id");
    }
}