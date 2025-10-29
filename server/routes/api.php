<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrainingCenterController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    Route::get('/trainees/training-centers', [TrainingCenterController::class, 'listTrainingCenters']);
    Route::apiResource('trainees', TrainingCenterController::class);
});



// http://localhost:8000/api/trainees
