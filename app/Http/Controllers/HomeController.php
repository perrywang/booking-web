<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Cache;

class HomeController extends Controller
{
    public function show()
    {
	    $cities_url=[];
	    $cities = \App\City::select('name_en as name','id')
		  ->whereIn('name',['LasVegas','NewYork','Chicago'])
		  ->get()->all();
	    foreach($cities as $city){
		  $cities_url[$city->name] = '/tops/'.$city->id;
	    }
	    return view('home', compact('cities_url'));
    }
}
