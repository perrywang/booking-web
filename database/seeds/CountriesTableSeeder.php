<?php

use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $countries_cn = ['中国','美国','英国','澳大利亚','日本','法国'];
      $countries_en = ['China','United States','United Kingdom','Australia','Japan','France'];

      foreach ($countries_en as $idx => $value) {
        factory(\App\Country::class)->create([
          'name_en' => $value,
          'name_cn' => $countries_cn[$idx],
        ]);
      }

    }
}
