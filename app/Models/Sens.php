<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sens extends Model
{
    use HasFactory;
    public function segment()
    {
        return $this->belongsTo('App\Models\Segment');
    }
    public function depart()
    {
        return $this->belongsTo('App\Models\Carrefour');
    }
    public function fin()
    {
        return $this->belongsTo('App\Models\Carrefour');
    }
}
