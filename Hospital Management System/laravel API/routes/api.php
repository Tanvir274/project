<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatienController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DoctorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



//  @@@@@@@@@@@@@   Pataint Api:   @@@@@@@@@@

Route::post('/check',[PatienController::class,'LoginCheck'])->name('login.check');


Route::post('/registration/submit',[PatienController::class,'RegistrationSubmit']);


Route::get('/home',[PatienController::class,'HomePage'])->middleware('control');
Route::post('/profile',[PatienController::class,'profile'])->middleware('control');

Route::post('/resubmit',[PatienController::class,'UpdateProfile'])->middleware('control');



Route::post('/recovery/submit',[PatienController::class,'RecoverySubmit']);





Route::post('/comment/submit',[PatienController::class,'CommentSubmit'])->middleware('control');

//pataint process:

//Doctor

Route::post('/appointment/submit',[PatienController::class,'AppointmentSubmit'])->middleware('control');

//Test

Route::post('/test/submit',[PatienController::class,'TestSubmit'])->middleware('control');

//cabin

Route::post('/cabin/submit',[PatienController::class,'CabinSubmit'])->middleware('control');


//Histry
Route::post('/details',[PatienController::class,'Details'])->middleware('control');

// Review
Route::post('/doctor_review',[PatienController::class,'doctor_review'])->middleware('control');
Route::post('/labtest_review',[PatienController::class,'labtest_review'])->middleware('control');
Route::post('/cabin_review',[PatienController::class,'cabin_review'])->middleware('control');


Route::get('/review',[PatienController::class,'allReview'])->middleware('control');


// @@@@@@@@@  Admin Api:  @@@@@@@@@

Route::post('/AdminRecovery',[AdminController::class,'AdminRecovery']);

Route::post('/AdminProfile',[AdminController::class,'AdminProfile']);

Route::post('/AdminEditProfile',[AdminController::class,'AdminEditProfile']);
//Doctor 
Route::get('/Doctorlist',[AdminController::class,'DoctorList']);
Route::post('/DeleteDoctor',[AdminController::class,'DeleteDoctor']);
Route::post('/AddDoctor',[AdminController::class,'AddDoctor']);

//Pataint
Route::get('/Pataintlist',[AdminController::class,'Pataintlist']);
Route::post('/DeletePataint',[AdminController::class,'DeletePataint']);

//Nurse
Route::get('/Nurselist',[AdminController::class,'NurseList']);
Route::post('/DeleteNurse',[AdminController::class,'DeleteNurse']);
Route::post('/AddNurse',[AdminController::class,'AddNurse']);

//PharmacyEmployee

Route::get('/PharmacyEmployeeList',[AdminController::class,'PharmacyEmployeeList']);
Route::post('/DeletePharmacyEmployee',[AdminController::class,'DeletePharmacyEmployee']);
Route::post('/AddPharmacyEmployee',[AdminController::class,'AddPharmacyEmployee']);



//  @@@@@@@@@@@@@   Doctor Api:   @@@@@@@@@@

Route::post('/DoctorProfile',[DoctorController::class,'DoctorProfile']);

Route::post('/DoctorEditProfile',[DoctorController::class,'DoctorEditProfile']);









