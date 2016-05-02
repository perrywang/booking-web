<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Airport extends Model
{
    public function City()
    {
        $this->belongsTo('App\City');
    }
}
