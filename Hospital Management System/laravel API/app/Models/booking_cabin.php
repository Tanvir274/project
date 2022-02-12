<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class booking_cabin extends Model
{
    use HasFactory;
    protected $table = 'booking_cabin'; 
      
    public $timestamps = false;
}
