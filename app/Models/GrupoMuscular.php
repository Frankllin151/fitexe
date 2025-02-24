<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GrupoMuscular extends Model
{
    //
    protected $table = "gp_mc";
    protected $fillable = ["user_id" , "nome" , "dia"];
}