<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTravelPackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('travel_packages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_cn');
            $table->string('name_en');
            $table->string('desc_cn');
            $table->string('desc_en');
            $table->text('body_cn')->nullable();
            $table->text('body_en')->nullable();
            $table->float('discount')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('travel_packages');
    }
}
