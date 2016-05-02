<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShoppingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shoppings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('city_id');
            $table->string('name_cn');
            $table->string('name_en');
            $table->text('desc_cn');
            $table->text('desc_en');
            $table->text('body_cn')->nullable();
            $table->text('body_en')->nullable();
            $table->string('logo')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->text('offers_cn')->nullable();
            $table->text('offers_en')->nullable();
            $table->text('hours_cn')->nullable();
            $table->text('hours_en')->nullable();
            $table->text('address_cn')->nullable();
            $table->text('address_en')->nullable();

            $table->string('website')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('shoppings');
    }
}
