<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatienController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\MedicinController;
use App\Http\Controllers\NurseController;

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

Route::post('/AdminRecovery',[AdminController::class,'AdminRecovery'])->middleware('control');

Route::post('/AdminProfile',[AdminController::class,'AdminProfile'])->middleware('control');

Route::post('/AdminEditProfile',[AdminController::class,'AdminEditProfile'])->middleware('control');
//Doctor 
Route::get('/Doctorlist',[AdminController::class,'DoctorList'])->middleware('control');
Route::post('/DeleteDoctor',[AdminController::class,'DeleteDoctor'])->middleware('control');
Route::post('/AddDoctor',[AdminController::class,'AddDoctor'])->middleware('control');
Route::post('/AppointmentRequestList',[AdminController::class,'DoctorAppointmentRequester'])->middleware('control');

//Pataint
Route::get('/Pataintlist',[AdminController::class,'Pataintlist'])->middleware('control');
Route::post('/DeletePataint',[AdminController::class,'DeletePataint'])->middleware('control');
Route::post('/AdminSetAppointmentTime',[AdminController::class,'SetAppointmentTime'])->middleware('control');

//Nurse
Route::get('/Nurselist',[AdminController::class,'NurseList'])->middleware('control');
Route::post('/DeleteNurse',[AdminController::class,'DeleteNurse'])->middleware('control');
Route::post('/AddNurse',[AdminController::class,'AddNurse'])->middleware('control');
Route::post('/NurseDutySet',[AdminController::class,'SetDutyNurse'])->middleware('control');

//PharmacyEmployee

Route::get('/PharmacyEmployeeList',[AdminController::class,'PharmacyEmployeeList'])->middleware('control');
Route::post('/DeletePharmacyEmployee',[AdminController::class,'DeletePharmacyEmployee'])->middleware('control');
Route::post('/AddPharmacyEmployee',[AdminController::class,'AddPharmacyEmployee'])->middleware('control');
Route::post('/PharmacianDutySet',[AdminController::class,'SetDutyPharmacian'])->middleware('control');


//Appointment Doctor & labtest
Route::post('/A_DoctorAppointmentList',[AdminController::class,'AppointmentList'])->middleware('control');
Route::post('/A_LabtestAppointmentList',[AdminController::class,'LabtestAppointment'])->middleware('control');

//Labtest 

Route::get('/A_LabTestList',[AdminController::class,'LabTestList'])->middleware('control');

Route::post('/A_AddlabTest',[AdminController::class,'AddlabTest'])->middleware('control');





//  @@@@@@@@@@@@@   Doctor Api:   @@@@@@@@@@

Route::post('/DoctorProfile',[DoctorController::class,'DoctorProfile'])->middleware('control');

Route::post('/DoctorEditProfile',[DoctorController::class,'DoctorEditProfile'])->middleware('control');
Route::post('/CheckupTimeSet',[DoctorController::class,'SetCheckupTime'])->middleware('control');
Route::post('/ReviewList',[DoctorController::class,'DoctorReview'])->middleware('control');
Route::post('/PataintToDoctorAppointment',[DoctorController::class,'PataintSetAppointment'])->middleware('control');


//  @@@@@@@@@@@@@   Pharmacy Api:   @@@@@@@@@@


Route::get('/MedicinList',[MedicinController::class,'MedicinList'])->middleware('control');
Route::post('/EmployeeProfile',[MedicinController::class,'PharmacyEmployee'])->middleware('control');
Route::post('/EmployeeEditProfile',[MedicinController::class,'PharmacyEmployeeEditProfile'])->middleware('control');
Route::post('/MedicinAdd',[MedicinController::class,'MedicinAdd'])->middleware('control');
Route::post('/MedicinDelete',[MedicinController::class,'MedicinDelete'])->middleware('control');
Route::post('/UpdateStatus',[MedicinController::class,'UpdateStatus'])->middleware('control');
Route::post('/MedicinSell',[MedicinController::class,'MedicinSell'])->middleware('control');
Route::get('/EmployeeSellList',[MedicinController::class,'SellList'])->middleware('control');



//  @@@@@@@@@@@@@   Nurse Api:   @@@@@@@@@@

Route::post('/NurseProfile',[NurseController::class,'NurseProfile'])->middleware('control');
Route::post('/NurseProfileEdit',[NurseController::class,'NurseProfileEdit'])->middleware('control');
Route::post('/NurseDutyArea',[NurseController::class,'NurseDutyArea'])->middleware('control');
Route::get('/N_CabinList',[NurseController::class,'CabinList'])->middleware('control');
Route::get('/N_BookedCabinListAll',[NurseController::class,'BookedCabinListAll'])->middleware('control');
Route::post('/N_BookedCabinList',[NurseController::class,'BookedCabinList'])->middleware('control');
Route::post('/N_ChangeCabinStatus',[NurseController::class,'ChangeCabinStatus'])->middleware('control');








