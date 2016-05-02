<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ShoppingController extends Controller
{
    public function showList(){

        $lang = $this->lang;
        $shoppings = \App\Shopping::select(
            'name_'.$lang.' as name',
            'desc_'.$lang.' as desc',
            'id', 'logo')
            ->get()->all();
        return view('shopping.index', compact('shoppings'));
    }

    public function showDetail($id){

        $lang = $this->lang;
        $store = \App\Shopping::findOrNew($id,[
            'name_'.$lang.' as name',
            'desc_'.$lang.' as desc',
            'body_'.$lang.' as body',
            'offers_'.$lang.' as offers',
            'hours_'.$lang.' as hours',
            'address_'.$lang.' as address',
            'website',
            'logo']);
        return view('shopping.detail', compact('store'));

    }
}
