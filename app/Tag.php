<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function product()
    {
      $this->belongsTo('App\Product');
    }

    public function hotels()
    {
        return $this->belongsToMany('App\Hotel');
    }

    public function activities()
    {
        return $this->belongsToMany('App\Activity');
    }
    
}
