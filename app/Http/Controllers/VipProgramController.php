<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Cache;

class VipProgramController extends Controller
{
    public function index()
    {
      $cacheKey = 'vipprogram.'.$this->lang;
      return Cache::remember($cacheKey,120,function(){
        return view('vipprogram.'.$this->lang.'.index')->render();
      });
    }
}
