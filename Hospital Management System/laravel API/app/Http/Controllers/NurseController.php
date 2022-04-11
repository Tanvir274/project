<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\nurse;
use App\Models\admin;

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
}
