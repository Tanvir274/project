<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\nurse;
use App\Models\admin;
use App\Models\cabin;
use App\Models\booking_cabin;

class NurseController extends Controller
{
    //
    public function NurseProfile(Request $request)
    {
        $profile= nurse :: where('username',$request->username)->first();

        return $profile;

    }
    public function NurseProfileEdit(Request $request)
    {
        $profile= nurse :: where('username',$request->username)->first();
        $profile->name=$request->name;
        $profile->password=$request->password;
        $profile->phone=$request->phone;
        $profile->address=$request->address;
        $profile->save();


        return $profile;

    }

    public function NurseDutyArea(Request $request)
    {
        $duty= nurse :: where('username',$request->username)->first();

        return $duty;

    }
    public function BookedCabinListAll()
    {
        $c=booking_cabin:: all();
        return $c;
    }
    public function BookedCabinList(Request $request)
    {
        $c=booking_cabin ::where('date',$request->date)->get();
        
        if($c)
        {
            return $c;

        }
        else
        {
            $r=0;
            return $r;
        }

    }
    public function CabinList()
    {
        $c=cabin ::all();

        return $c;

    }

    public function ChangeCabinStatus(Request $request)
    {
        $var= cabin::where('cabin_no',$request->cabin)->first();
        $var->slot=$request->status;
        $var->save();

        return $var;
        
    }
}
