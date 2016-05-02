<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    public function hotels()
    {
        return $this->hasMany('App\Hotel');
    }

    public function airports()
    {
        return $this->hasMany('App\Airport');
    }

    public function activities()
    {
        return $this->hasMany('App\Activity');
    }

    public function shoppings()
    {
        return $this->hasMany('App\Shopping');
    }

    public function country()
    {
        return $this->belongsTo('App\Country');
    }

}
