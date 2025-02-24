<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CreateExController;
use Inertia\Commands\CreateMiddleware;
use Inertia\Inertia;

Route::get('/', function () {
 return redirect()->route("login");
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/create", [CreateExController::class, "create"])->middleware(['auth', 'verified'])->name("create");
Route::post("/postCriar", [CreateExController::class, "postCriar"])->middleware(['auth', 'verified'])->name("postCriar");
Route::post("/exerciciopost" , [CreateExController::class, "exercicioPost"])->middleware(['auth', 'verified'])->name("exerciciopost");

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';