<?php

namespace App\Http\Middleware;

use Closure;

class SetDefaultLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if(!\Cookie::has('lang'))
        {
            \App::setLocale('cn');
        }
        else
        {
            \App::setLocale(\Cookie::get('lang'));
        }
        return $next($request);
    }
}
