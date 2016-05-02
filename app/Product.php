<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function tags()
    {
      $this->hasMany('App\Tag');
    }
}
