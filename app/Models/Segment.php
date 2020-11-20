<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Segment extends Model
{
    use HasFactory;
    public function rue()
    {
        return $this->belongsTo('App\Models\Rue');
    }
    public function sens()
    {
        return $this->hasMany('App\Models\Sens');
    }
}
