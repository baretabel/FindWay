<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use MStaack\LaravelPostgis\Eloquent\PostgisTrait;
use MStaack\LaravelPostgis\Geometries\Point;

class Rue extends Model
{
    use HasFactory,PostgisTrait;
    public function adresse()
    {
        return $this->hasMany('App\Models\Adresse');
    }
    public function segment()
    {
        return $this->hasMany('App\Models\Segment');
    }
    public function setUpdatedAt($value)
    {
      return NULL;
    }


    public function setCreatedAt($value)
    {
      return NULL;
    }
    protected $spatialFields = [
        'geo'
    ];
    protected $postgisFields = [
        'geo'
    ];

    protected $postgisTypes = [
        'geo' => [
            'geomtype' => 'geography',
            'srid' => 4326
        ],
    ];
}
