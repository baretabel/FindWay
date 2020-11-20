<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carrefour extends Model
{
    use HasFactory;
    public function sens()
    {
        return $this->hasMany('App\Models\Sens');
    }
}
