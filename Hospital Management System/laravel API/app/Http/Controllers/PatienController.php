<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\pataint;
use App\Models\doctor;
use App\Models\cabin;
use App\Models\comment;
use App\Models\labtest;
use App\Models\medicin;
use App\Models\Appointment;
use App\Models\booking_cabin;
use App\Models\booking_labtest;
use App\Models\review_doctor;
use App\Models\review_labtest;
use App\Models\review_cabin;
use App\Models\token;
use App\Models\admin;
use App\Models\pharmacy;
use App\Models\nurse;

use Illuminate\Support\Str; //for random value
use DateTime;


class PatienController extends Controller
{
    
    public function LoginCheck(Request $request)
    {
        
        $p=pataint::where('username',$request->username)
        ->where('password',$request->password)
        ->first();
        
        $a=admin::where('username',$request->username)
        ->where('password',$request->password)
        ->first();

        $d=doctor::where('username',$request->username)
        ->where('password',$request->password)
        ->first();

        $PE=pharmacy::where('username',$request->username)
        ->where('password',$request->password)
        ->first();

        $n=nurse::where('username',$request->username)
        ->where('password',$request->password)
        ->first();

        

        if($p)
        {
            $api_token=Str::random(16);

            $token = new token();
            $token->username = $p->username;
            $token->token = $api_token;
            $token->type= $p->type;
            $token->created_at=New DateTime();
            $token->save();
            return $token;

            
            
        }
        elseif($a)
        {
            $api_token=Str::random(16);
            $token = new token();
            $token->username = $a->username;
            $token->token = $api_token;
            $token->type= $a->type;
            $token->created_at=New DateTime();
            $token->save();
            return $token;

        }
        elseif($d)
        {
            $api_token=Str::random(16);
            $token = new token();
            $token->username = $d->username;
            $token->token = $api_token;
            $token->type= $d->type;
            $token->created_at=New DateTime();
            $token->save();
            return $token;

        }
        elseif($PE)
        {
            $api_token=Str::random(16);
            $token = new token();
            $token->username = $PE->username;
            $token->token = $api_token;
            $token->type= $PE->type;
            $token->created_at=New DateTime();
            $token->save();
            return $token;

        }
        elseif($n)
        {
            $api_token=Str::random(16);
            $token = new token();
            $token->username = $n->username;
            $token->token = $api_token;
            $token->type= $n->type;
            $token->created_at=New DateTime();
            $token->save();
            return $token;

        }

        return "Not found";
        
        
        
    }

    
    public function RegistrationSubmit(Request $request)
    {
        
        
        $var=new pataint();
        $var->name=$request->name;
        $var->username= $request->username;
        $var->password= $request->password;
        $var->phone= $request->phone;
        $var->email= $request->email;
        $var->group= $request->group;
        $var->dob= $request->dob;
        $var->address= $request->address;
        $var->type='pataint';
        $var->save();
         return  $var;

    }
    public function HomePage()
    {
        $p=session('user');
        $doctor = doctor::all();
        $cabin = cabin::all();
        $lab = labtest::all();
        $medicin=medicin::all();
        $home = array($doctor, $cabin, $lab,$medicin);
        return $home;
    }

    //Profile

    public function Profile(Request $request)
    {
        

        $pc= pataint :: where('username',$request->username)->first();

        return $pc;
    }




    // update profile
    
    public function UpdateProfile(Request $request)
    {
        
        
        
        $var= pataint :: where('id',$request->primary_id)->first();
        
        $var->name=$request->name;
        $var->username= $var->username;
        $var->password= $request->password;
        $var->phone= $request->phone;
        $var->email= $request->email;
        $var->group= $var->group;
        $var->dob= $var->dob;
        $var->address= $request->address;
        $var->save();
        return $var;  
    }

    // id recovery

    
    public function RecoverySubmit(Request $request)
    {
        if($request->type=='pataint')
        {
            $var= pataint :: where('username',$request->username)->where('email',$request->email)->first();
            $var->password= $request->password;
            $var->save();
            return  $var;

        }
        elseif($request->type=='doctor')
        {
            $var= doctor :: where('username',$request->username)->where('email',$request->email)->first();
            $var->password= $request->password;
            $var->save();
            return  $var;
        }
        elseif($request->type=='pharmacy')
        {
            $var= pharmacy :: where('username',$request->username)->where('email',$request->email)->first();
            $var->password= $request->password;
            $var->save();
            return  $var;

        }
        elseif($request->type=='admin')
        {
            $var= admin :: where('username',$request->username)->where('email',$request->email)->first();
            $var->password= $request->password;
            $var->save();
            return  $var;

        }
        elseif($request->type=='nurse')
        {
            $var= nurse :: where('username',$request->username)->where('email',$request->email)->first();
            $var->password= $request->password;
            $var->save();
            return  $var;

        }
    
    }

    


    //Comment & Rating

    
    public function CommentSubmit(Request $request)
    {
        $p= pataint :: where('username',$request->username)->first();
        $var= new comment();
        $var->name=$p->name;
        $var->username= $p->username;   
        $var->comment= $request->comment;
        $var->ratting= $request->rating;
        $var->save();
        return $var;

    }



    



    //pataint process:

    //Doctor:
   

    public function AppointmentSubmit(Request $request)
    {
        
        
        $u= pataint :: where('username',$request->username)->first();
        $d= doctor :: where('id',$request->primary_id)->first();

        $var=new Appointment();
        $var->pataint_username=$u->username;
        $var->pataint_name= $u->name;
        $var->doctor_username=$d->username;
        $var->doctor_name= $d->doc_name;
        $var->app_time= "09:00 AM";
        $var->app_date= $request->date;
        $var->save();
        return $var; 

        

    }

    //Test


    public function TestSubmit(Request $request)
    {
        
        $u= pataint :: where('username',$request->username)->first();
        $l= labtest :: where('id',$request->primary_id)->first();

        $var=new booking_labtest();
        $var->pataint_username=$u->username;
        $var->pataint_name= $u->name;
        $var->test_name= $l->type;
        $var->time= '09:00 AM';
        $var->date= $request->date;
        $var->save();
        return $var;  

    }

    //Cabin

   

    public function CabinSubmit(Request $request)
    {
        
        
        $u= pataint :: where('username',$request->username)->first();
        $c= cabin :: where('id',$request->primary_id)->first();

        $var=new booking_cabin();
        $var->pataint_username=$u->username;
        $var->pataint_name= $u->name;
        $var->cabin_no= $c->cabin_no;
        $var->date= $request->date;
        $var->save();

        $c->cabin_no=$c->cabin_no;
        $c->slot="booked";
        $c->save();
        return  $var;//redirect()->route('home');

    }


    public function Details(Request $request)
    {
        $appointment = appointment::where('pataint_username',$request->username)->get();
        $cabin = booking_cabin::where('pataint_username',$request->username)->get();
        $labtest = booking_labtest::where('pataint_username',$request->username)->get();
        $home = array($appointment, $cabin, $labtest);
        return $home;
        
    }

    //Review
    public function doctor_review(Request $request)
    {
        $u=pataint :: where('username',$request->username)->first();
        $d= doctor :: where('id',$request->primary_id)->first();

        $var=new review_doctor();
        $var->doctor_username=$d->username;
        $var->doctor_name= $d->doc_name;
        $var->pataint_name= $u->name;
        $var->pataint_username= $u->username;
        $var->comment= $request->comment;
        $var->rating= $request->rating;
        $var->save();
        return $var;
        
        

    }
    public function labtest_review(Request $request)
    {
        $u= pataint :: where('username',$request->username)->first();
        $l= labtest :: where('id',$request->primary_id)->first();

        $var=new review_labtest();
        $var->labtest_id=$l->id;
        $var->labtest_name= $l->type;
        $var->pataint_name= $u->name;
        $var->pataint_username= $u->username;
        $var->comment= $request->comment;
        $var->rating= $request->rating;
        $var->save();
        return $var;

    }
    public function cabin_review(Request $request)
    {
        $u= pataint :: where('username',$request->username)->first();
        $c= cabin :: where('id',$request->primary_id)->first();

        $var=new review_cabin();
        $var->cabin_id=$c->id;
        $var->cabin_name= $c->cabin_no;
        $var->pataint_name= $u->name;
        $var->pataint_username= $u->username;
        $var->comment= $request->comment;
        $var->rating= $request->rating;
        $var->save();
        return $var;

    }

    public function allReview()
    {
        $appointment = review_doctor::all();
        $cabin = review_cabin::all();
        $labtest = review_labtest::all();
        $hospital= comment::all();
        $review = array($appointment, $cabin, $labtest,$hospital);
        return $review;

    }
   

}
