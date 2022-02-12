<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class medicin extends Model
{
    use HasFactory;
    protected $table = 'medicin'; 
      
    public $timestamps = false;
}
