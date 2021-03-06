<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table = 'locations';

    protected $fillable = ['title', 'latitude', 'longitude'];

    public function activities() {
        return $this->hasMany('App\Activity');
    }
}
