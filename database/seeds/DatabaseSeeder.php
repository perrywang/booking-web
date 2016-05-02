<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        // $this->call(UserTableSeeder::class);
        // factory(\App\Country::class,5)->create()->each(function($country){
        //     $country->cities()->saveMany(factory(\App\City::class,5)->make());
        // });
        $this->call(CountriesTableSeeder::class);

        $cities = \App\City::all();
        foreach($cities as $city)
        {
            //$city->hotels()->saveMany(factory(\App\Hotel::class,5)->make());
            //$city->shoppings()->saveMany(factory(\App\Shopping::class,5)->make());
            $city->activities()->saveMany(factory(\App\Activity::class,5)->make());
        }

        //generate hot cities for HOME page
        $this->call(CitiesTableSeeder::class);

        //shopping data
        $this->call(ShoppingsTableSeeder::class);

        //hotel data
        $this->call(HotelsTableSeeder::class);

        //activity
        $this->call(ActivitiesTableSeeder::class);

        Model::reguard();
    }
}
