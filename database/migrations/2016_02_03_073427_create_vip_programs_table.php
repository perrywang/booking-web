<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVipProgramsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vip_programs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title_cn');
            $table->string('title_en');
            $table->text('desc_cn');
            $table->text('desc_en');
            $table->text('body_cn')->nullable();
            $table->text('body_en')->nullable();
            $table->string('img')->nullable();
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
        Schema::drop('vip_programs');
    }
}
