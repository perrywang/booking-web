<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHotelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('city_id');
            $table->string('name_cn')->index();
            $table->string('name_en')->index();
            $table->text('desc_cn')->index();
            $table->text('desc_en')->index();
            $table->text('body_cn')->nullable();
            $table->text('body_en')->nullable();
            $table->string('logo')->nullable();
            $table->text('gallery')->nullable();
            $table->softDeletes();
            $table->timestamps();
            $table->boolean('is_partner')->nullable();
            $table->string('thumbnail')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('hotels');
    }
}
