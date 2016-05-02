<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shopping extends Model
{
    public function City()
    {
        return $this->belongsTo('App\City');
    }
}
