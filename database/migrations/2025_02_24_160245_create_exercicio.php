<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('exercicio', function (Blueprint $table) {
            $table->id();
            $table->string("nome");
            $table->integer("time_exercicio");
            $table->integer("repeticao");
            $table->string("tecnica");
            $table->integer("serie");
            $table->unsignedBigInteger("id_gp_mc");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exercicio');
    }
};