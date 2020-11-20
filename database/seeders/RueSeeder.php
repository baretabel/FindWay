<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Rue;

class RueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \DB::table('rues')->delete();
        $json= File::get('database/data/rue.geojson');
        $data=\json_decode($json);
        foreach($data->features as $obj){
            Rue::create(array(
                'name' => $obj->properties->index_,
                'geo' => $obj->geometry->coordinates
            ));
        }

    }
}
