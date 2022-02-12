<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class labtest extends Model
{
    use HasFactory;
    protected $table = 'lab_test'; 
      
      public $timestamps = false;
}
