<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('city_id');
            $table->string('name_cn');
            $table->string('name_en');
            $table->text('desc_cn');
            $table->text('desc_en');
            $table->text('body_cn')->nullable();
            $table->text('body_en')->nullable();
            $table->string('poster')->nullable();
            $table->text('gallery')->nullable();
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
        Schema::drop('activities');
    }
}
