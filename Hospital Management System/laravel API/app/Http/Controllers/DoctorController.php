<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\doctor;
use App\Models\review_doctor;
use App\Models\Appointment;

class DoctorController extends Controller
{
    //

    public function DoctorProfile(Request $request)
    {
        $profile= doctor :: where('username',$request->username)->first();

        return $profile;

    }
    public function DoctorEditProfile(Request $request)
    {
        $profile= doctor :: where('username',$request->username)->first();
        $profile->doc_name=$request->name;
        $profile->password=$request->password;
        $profile->phone=$request->phone;
        $profile->address=$request->address;
        $profile->save();

        /*$check=array($request->username,$request->name,$request->password,$request->phone,
        $request->statement,$request->address );*/

        return $profile;

    }
    public function SetCheckupTime(Request $request)
    {
        $profile= doctor :: where('username',$request->username)->first();
        $profile->status=$request->time;
        $profile->save();

    }
    public function DoctorReview(Request $request)
    {
        $pataint= review_doctor :: where('doc_username',$request->username)->get();

        return $pataint;

    }

    public function PataintSetAppointment(Request $request)
    {
        $appointment = appointment::where('doctor_username',$request->username)->get();
        return $appointment;
    }
}
