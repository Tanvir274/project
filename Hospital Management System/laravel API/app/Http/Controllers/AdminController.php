<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\admin;
use App\Models\doctor;
use App\Models\pataint;
use App\Models\nurse;
use App\Models\pharmacy;
use App\Models\medicin;
use App\Models\Medicinsell;
use App\Models\labtest;
use App\Models\Appointment;
use App\Models\booking_cabin;
use App\Models\booking_labtest;




class AdminController extends Controller
{
    //
    public function AdminRecovery(Request $request)
    {
        
        $var= admin :: where('username',$request->username)->where('email',$request->email)->first();
        
        $var->password= $request->password;
        
        $var->save();
        return  $var;
        
    }
    public function AdminProfile(Request $request)
    {
        $profile= admin :: where('username',$request->username)->first();

        return $profile;

    }
    public function AdminEditProfile(Request $request)
    {
        $profile= admin :: where('username',$request->username)->first();
        $profile->name=$request->name;
        $profile->password=$request->password;
        $profile->phone=$request->phone;
        $profile->statement=$request->statement;
        $profile->address=$request->address;
        $profile->save();

        /*$check=array($request->username,$request->name,$request->password,$request->phone,
        $request->statement,$request->address );*/

        return $profile;

    }
    //Doctor
    public function DoctorList()
    {
        $doctor= doctor::all();

        return $doctor;

    }
    public function DoctorAppointmentRequester(Request $request)
    {
        $list= Appointment::where('doctor_username',$request->username)->where('app_date',$request->date)->get();
        
        if($list)
        {
            return $list;

        }
        else
        {
            $r=0;
            return $r;
        }
    }

    public function SetAppointmentTime(Request $request)
    {
        $p= Appointment::where('doctor_username',$request->doctor)->where('pataint_username',$request->pataint)->where('app_date',$request->date)->first();
        $p->app_time=$request->time;
        $p->save();


        return $p;
    }

    public function DeleteDoctor(Request $request)
    {
        $doctor= doctor::where('username',$request->username)->first();
        $doctor->delete();

        return "delete";
    }

    public function AddDoctor(Request $request)
    {
        $p=pataint::where('username',$request->username)->first();
        
        $a=admin::where('username',$request->username)->first();

        $d=doctor::where('username',$request->username)->first();

        $PE=pharmacy::where('username',$request->username)->first();

        $n=nurse::where('username',$request->username)->first();

        if($p || $a || $d || $PE || $n )
        {
            $r=1;
            return $r;
        }
        else
        {
            $var=new doctor();
            $var->doc_name=$request->name;
            $var->username= $request->username;
            $var->password= $request->password;
            $var->phone= $request->phone;
            $var->email= $request->email;
            $var->group= $request->group;
            $var->dob= $request->dob;
            $var->address= $request->address;
            $var->type="doctor";
            $var->status="Available";
            $var->save();
        
            return  $var;

        }
        
        

    }
    // Pataint

    public function PataintList()
    {
        $pataint= pataint::all();

        return $pataint;

    }
    public function DeletePataint(Request $request)
    {
        $pataint= pataint::where('username',$request->username)->first();
        $pataint->delete();

        return "delete";
    }

    // Nurse

    public function NurseList()
    {
        $nurse= nurse::all();

        return $nurse;

    }

    public function DeleteNurse(Request $request)
    {
        $nurse= nurse::where('username',$request->username)->first();
        $nurse->delete();

        return "delete";
    }

    public function AddNurse(Request $request)
    {
        $p=pataint::where('username',$request->username)->first();
        
        $a=admin::where('username',$request->username)->first();

        $d=doctor::where('username',$request->username)->first();

        $PE=pharmacy::where('username',$request->username)->first();

        $n=nurse::where('username',$request->username)->first();

        if($p || $a || $d || $PE || $n )
        {
            $r=1;
            return $r;
        }
        else{
         
            $var=new nurse();
            $var->name=$request->name;
            $var->username= $request->username;
            $var->password= $request->password;
            $var->phone= $request->phone;
            $var->email= $request->email;
            $var->dob= $request->dob;
            $var->duty=$request->duty;
            $var->address= $request->address;
            $var->type="nurse";
            $var->save();
        
            return  $var;
        }
    }
    public function SetDutyNurse(Request $request)
    {
        $profile= nurse :: where('username',$request->username)->first();

        $profile->duty=$request->duty;
        $profile->save();
        return "successsfull";
    }


    //pharmacy

    public function PharmacyEmployeeList()
    {
        $pharmacy= pharmacy::all();

        return $pharmacy;

    }

    public function DeletePharmacyEmployee(Request $request)
    {
        $pharmacy= pharmacy::where('username',$request->username)->first();
        $pharmacy->delete();

        return "delete";
    }

    public function AddPharmacyEmployee(Request $request)
    {
        $p=pataint::where('username',$request->username)->first();
        
        $a=admin::where('username',$request->username)->first();

        $d=doctor::where('username',$request->username)->first();

        $PE=pharmacy::where('username',$request->username)->first();

        $n=nurse::where('username',$request->username)->first();

        if($p || $a || $d || $PE || $n )
        {
            $r=1;
            return $r;
        }
        else
        { 
            $var=new pharmacy();
            $var->name=$request->name;
            $var->username= $request->username;
            $var->password= $request->password;
            $var->phone= $request->phone;
            $var->email= $request->email;
            $var->dob= $request->dob;
            $var->address= $request->address;
            $var->duty=$request->duty;
            $var->type="pharmacy";
            $var->save();
            
            return  $var;
        }
    }
    public function SetDutyPharmacian(Request $request)
    {
        $profile= pharmacy :: where('username',$request->username)->first();

        $profile->duty=$request->duty;
        $profile->save();
        return "successfull";
    }

    public function SellList()
    {
        $medicin=Medicinsell::all();
        return $medicin;

    }
    public function MedicinList()
    {
        $medicin=medicin::all();
        return $medicin;
    }

    //Appointment list
    public function AppointmentList(Request $request)
    {
        $list= Appointment::where('app_date',$request->date)->get();
        
        if($list)
        {
            return $list;

        }
        else
        {
            $r=0;
            return $r;
        }
    }

    public function LabtestAppointment(Request $request)
    {
        $list= booking_labtest::where('date',$request->date)->get();
        
        if($list)
        {
            return $list;

        }
        else
        {
            $r=0;
            return $r;
        }
    }



    public function LabTestList()
    {
        $lab= labtest::all();

        return $lab;

    }
    public function AddlabTest(Request $request)
    {
        $var=new labtest();
        $var->type=$request->name;
        $var->available="09:00 AM - 12:30 PM , 2:00 PM- 8:00 PM";
        $var->save();

        return $var;

    }

    



    


}
