<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cabin extends Model
{
    use HasFactory;
    protected $table = 'cabin'; 
      
    public $timestamps = false;
}
