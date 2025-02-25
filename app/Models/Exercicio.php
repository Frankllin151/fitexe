<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exercicio extends Model
{
    //
    protected $table = "exercicio"; 
    protected $fillable = [
    "nome",
    "time_exercicio", 
    "repeticao",
    "id_gp_mc", 
    "serie"
];
public function grupoMuscular()
{
    return $this->belongsTo(GrupoMuscular::class, "id_gp_mc", "id");
}
}