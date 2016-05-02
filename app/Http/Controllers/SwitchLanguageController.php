<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Cache;

class SwitchLanguageController extends Controller
{
    public function switchLanguage()
    {
        $language = \Input::get('lang');
        $backUrl = \URL::previous();
        if(str_contains($backUrl,'/setlanguage'))
        {
            return redirect('/')->withCookie('lang',$language);
        }
        else
        {
            return redirect($backUrl)->withCookie('lang',$language);
        }
    }
}
