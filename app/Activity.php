<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    public function City()
    {
        return $this->belongsTo('App\City');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }
}
