<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class review_doctor extends Model
{
    use HasFactory;
    protected $table = 'review_doctor'; 
      
    public $timestamps = false;
}
