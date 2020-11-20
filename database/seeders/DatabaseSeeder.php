<?php

namespace Database\Seeders;


//use MStaack\LaravelPostgis\Geometries\Point;
use Illuminate\Database\Seeder;
use App\Models\Rue;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \DB::table('rues')->delete();
        $json= \File::get('database/data/rue.geojson');
        $data=\json_decode($json);
        $points=[];
        foreach($data->features as $obj){
            foreach($obj->geometry->coordinates as $objet){
                
                    
                        foreach($objet as $point){    
                            $points[]= new Point($point[1],$point[0]);
                        };
                    
            

                
            }
            $geo=new LineString($points);
            
            \DB::table('rues')->insert([
                'name' =>  $obj->properties->index_,
                'geo' =>  \json_encode($geo)
            ]);
           
        }

    }
}
