<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class CityController extends Controller
{

    function __construct() {
        parent::__construct();
        $lang = $this->lang;
        $this->list_fields = [
            'id',
            'name_'.$lang.' as name',
            'desc_'.$lang.' as desc',
            'slider_caption_'.$lang.' as slider_caption',
            'slider',
            'logo',
            'heat',
            'country_id'
        ];

        $this->detail_fields=[
            'id',
            'name_'.$lang.' as name',
            'desc_'.$lang.' as desc',
            'body_'.$lang.' as body',
            'package_'.$lang.' as package',
            'slider_caption_'.$lang.' as slider_caption',
            'slider',
            'logo'
        ];
    }

    public function showList(){

        $cities = \App\City::with('country')
            ->orderBy('heat', 'desc')
            ->with([
                'country'=>function($query){
                    $query->select(
                        'id',
                        'name_'.$this->lang.' as name',
                        'name_en');
                }
            ])
            ->paginate(config('app.page_size'),$this->list_fields);
        //dd($cities[0]->country->name);
        return view('city.index', compact('cities'));
    }

    public function showDetail($id){

        $city = \App\City::findOrNew($id, $this->detail_fields);

        $this->incrementHeat($id);

        //substract sliders and captions
        $city['slider_list'] = explode(';', $city['slider']);
        $city['caption_list'] = explode(';', $city['slider_caption']);

        //dd($city->country());
        return view('city.detail', compact('city'));

    }

    public function search(Request $request){
        $query = $request->input('query');
        if(empty($query))
        {
            return redirect('/tops');
        }
        $cities = \App\City::orderBy('heat')
            ->where('name_en','like','%'.$query.'%')
            ->orWhere('name_cn','like','%'.$query.'%')
            ->orWhere('desc_en','like','%'.$query.'%')
            ->orWhere('desc_cn','like','%'.$query.'%')
            ->paginate(config('app.page_size'),$this->list_fields);

        return view('city.index',compact('cities'));
    }

    private function incrementHeat($id){
        \DB::table('cities')->increment('heat');
    }
}
