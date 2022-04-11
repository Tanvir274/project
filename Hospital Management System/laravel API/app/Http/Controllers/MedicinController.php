<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\pharmacy;
use App\Models\medicin;
use App\Models\Medicinsell;

class MedicinController extends Controller
{
    //
    public function MedicinList()
    {
        $medicin=medicin::all();
        return $medicin;
    }
    public function PharmacyEmployee(Request $request)
    {
        $profile= pharmacy :: where('username',$request->username)->first();

        return $profile;

    }
    public function PharmacyEmployeeEditProfile(Request $request)
    {
        $profile= pharmacy :: where('username',$request->username)->first();
        $profile->name=$request->name;
        $profile->password=$request->password;
        $profile->phone=$request->phone;
        $profile->address=$request->address;
        $profile->save();

        /*$check=array($request->username,$request->name,$request->password,$request->phone,
        $request->statement,$request->address );*/

        return $profile;

    }

    public function MedicinAdd(Request  $request)
    {
        $var=new medicin();
        $var->group_name=$request->name;
        $var->status=$request->status;
        $var->save();
    }
    public function MedicinDelete(Request  $request)
    {
        $var= medicin :: where('group_name', $request->name)->first();
        $var->delete();

        return 'Delete successfully';
    }
    public function UpdateStatus(Request  $request)
    {
        $var= medicin :: where('group_name', $request->name)->first();
        $var->status=$request->status;
        $var->save();

        return $var;
    }
    public function MedicinSell(Request  $request)
    {
        $employee= pharmacy :: where('username', $request->username)->first();
        $var=new Medicinsell();
        $var->date=$request->date;
        $var->amount=$request->amount;
        $var->username=$employee->username;
        $var->name=$employee->name;
        $var->save();

        return $var;

    } 

    public function SellList()
    {
        $medicin=Medicinsell::all();
        return $medicin;

    }


}
