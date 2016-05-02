<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('country_id');
            $table->integer('heat')->nullable()->default(0);
            $table->string('name_cn');
            $table->string('name_en');
            $table->text('desc_cn');
            $table->text('desc_en');
            $table->text('body_cn')->nullable();
            $table->text('body_en')->nullable();
            $table->text('package_cn')->nullable();
            $table->text('package_en')->nullable();

            //columns for slider on detail page, each slide/caption info is separated by ";"
            $table->text('slider_caption_cn')->nullable();
            $table->text('slider_caption_en')->nullable();
            $table->text('slider')->nullable();

            //this column is used for the list thumbnail on the tpp destination page
            $table->string('logo')->nullable();
            //this column is used for the top destination gallery.
            $table->string('thumbnail')->nullable();
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
        Schema::drop('cities');
    }
}
