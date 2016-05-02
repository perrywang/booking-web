<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    public function OriginCity()
    {
        return $this->belongsTo('App\City','origin_city_id');
    }

    public function DestinationCity()
    {
        return $this->belongsTo('App\City','destination_city_id');
    }

    public function Airport()
    {
        return $this->belongsTo('App\Airport');
    }

    public function Airline()
    {
        return $this->belongsTo('App\Airline');
    }
}

