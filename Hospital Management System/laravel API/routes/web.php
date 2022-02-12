<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatienController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*


Route::get('/',[PatienController::class,'Login'])->name('login');
Route::post('/check',[PatienController::class,'LoginCheck'])->name('login.check');

Route::get('/registration',[PatienController::class,'Registration'])->name('registration');
Route::post('/registration/submit',[PatienController::class,'RegistrationSubmit'])->name('registration.submit');


Route::get('/home',[PatienController::class,'HomePage'])->middleware('control')->name('home');
Route::get('/profile',[PatienController::class,'profile'])->middleware('control')->name('profile');
Route::get('/edit/{id}',[PatienController::class,'EditProfile'])->middleware('control')->name('edit');
Route::post('/resubmit',[PatienController::class,'UpdateProfile'])->middleware('control')->name('profile.resubmit');


Route::get('/recovery',[PatienController::class,'Recovery'])->middleware('control')->name('recovery');
Route::post('/recovery/submit',[PatienController::class,'RecoverySubmit'])->middleware('control')->name('recovery.submit');


Route::get('/logout',[PatienController::class,'Logout'])->middleware('control')->name('logout');



Route::get('/comment',[PatienController::class,'Comment'])->middleware('control')->name('comment');
Route::post('/comment/submit',[PatienController::class,'CommentSubmit'])->middleware('control')->name('comment.submit');


Route::get('/admin',[PatienController::class,'Admin'])->middleware('control')->name('admin');



//pataint process:

//Doctor
Route::get('/appointment/{id}',[PatienController::class,'Appointment'])->middleware('control')->name('appointment');
Route::post('/appointment/submit',[PatienController::class,'AppointmentSubmit'])->middleware('control')->name('appointment.submit');

//Test
Route::get('/test/{id}',[PatienController::class,'Test'])->middleware('control')->name('test');
Route::post('/test/submit',[PatienController::class,'TestSubmit'])->middleware('control')->name('test.submit');

//cabin
Route::get('/cabin/{id}',[PatienController::class,'Cabin'])->middleware('control')->name('cabin');
Route::post('/cabin/submit',[PatienController::class,'CabinSubmit'])->middleware('control')->name('cabin.submit');


//Histry
Route::get('/details',[PatienController::class,'Details'])->middleware('control')->name('details');

*/





