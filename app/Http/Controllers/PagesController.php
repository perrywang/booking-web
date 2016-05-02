<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PagesController extends Controller
{
    public function about()
    {
        return view('pages.'.$this->lang.'.about');
    }

    public function aboutVip()
    {
        return view('pages.'.$this->lang.'.about_vip');
    }

    public function termsOfUse()
    {
        return view('pages.'.$this->lang.'.terms_of_use');
    }

    public function privatePolicy()
    {
        return view('pages.'.$this->lang.'.private_policy');
    }
}
