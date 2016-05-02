<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Country::class, function (Faker\Generator $faker) {
    $countries_cn = ['中国','美国','英国','澳大利亚','日本',];
    $countries_en = ['China','United States','United Kingdom','Australia','Japan',];
    $index = $faker->numberBetween(0,4);
    $desc = $faker->paragraph;
    return [
        'name_en' => $countries_en[$index],
        'desc_en' => $desc,
        'name_cn' => $countries_cn[$index],
        'desc_cn' => '国家简介:' . $desc
    ];
});

$factory->define(App\City::class, function (Faker\Generator $faker) {
    $cities_cn = ['北京','上海','成都','纽约','东京','伦敦','巴黎','拉斯维加斯','迪拜','奥兰多','波士顿','大阪','北海道','盐湖城',];
    $cities_en = ['Beijing','Shanghai','Chengdu','New York','Tokya','London','Paris','LasVagas','Dubai','Orlando','Boston','Osaka','Hokkaido','Salt Lake City',];
    $index = $faker->numberBetween(0,13);
    $desc = $faker->paragraph;
    return [
        'name_en' => $cities_en[$index],
        'desc_en' => $desc,
        'name_cn' => $cities_cn[$index],
        'desc_cn' => '城市简介:' . $desc
    ];
});

$factory->define(App\Hotel::class, function (Faker\Generator $faker) {
    $name = $faker->word;
    $desc = $faker->paragraph;
    return [
        'name_en' => $name,
        'desc_en' => $desc,
        'logo' => $faker->imageUrl(200,200),
        'name_cn' => '酒店:' . $name,
        'desc_cn' => '酒店简介:' . $desc
    ];
});

$factory->define(\App\Shopping::class, function(Faker\Generator $faker){
    $name = $faker->word;
    $desc = $faker->paragraph;
    return [
        'name_en' => $name,
        'desc_en' => $desc,
        'logo' => $faker->imageUrl(60,60),
        'name_cn' => '购物中心:' . $name,
        'desc_cn' => '购物中心简介:' . $desc
    ];
});

$factory->define(\App\Activity::class, function(Faker\Generator $faker){
    $name = $faker->word;
    $desc = $faker->paragraph;
    return [
        'name_en' => $name,
        'desc_en' => $desc,
        'poster' => $faker->imageUrl(200,200),
        'name_cn' => '景点:' . $name,
        'desc_cn' => '景点简介:' . $desc
    ];
});
