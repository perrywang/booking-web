<?php

use App\Hotel;


Route::group(['prefix' => '/'], function () {

    Route::get('setlanguage', 'SwitchLanguageController@switchLanguage');
    Route::get('/', 'HomeController@show');
    Route::get('home', 'HomeController@show');
    Route::get('about','PagesController@about');
    Route::get('about_vip','PagesController@aboutVip');
    Route::get('terms-of-use','PagesController@termsOfUse');
    Route::get('private_policy','PagesController@privatePolicy');

});

Route::group(['prefix' => '/'], function(){
    Route::get('shopping-partner','ShoppingController@showList');
    Route::get('shopping-partner/{id}','ShoppingController@showDetail');
});

Route::group(['prefix' => '/'], function(){
    Route::get('vipprograms','VipProgramController@index');
});

Route::group(['prefix' => '/'], function(){
    Route::get('activities/search', 'ActivityController@search');
    Route::resource('activities', 'ActivityController',['only' => ['index','show']]);
});

Route::group(['prefix' => '/'], function(){
    Route::resource('flights', 'FlightController',['only' => ['index','show']]);
});

Route::group(['prefix' => '/'], function(){
    Route::resource('travelpackages', 'PackageController',['only' => ['index','show']]);
});

Route::group(['prefix' => '/'], function(){
    Route::get('hotels/search', 'HotelController@search');
    Route::get('hotels/city/{cid}', 'HotelController@hotelsByCity');
    Route::get('hotels/{id}', 'HotelController@showDetail');
    Route::resource('hotels', 'HotelController',['only' => ['index','show']]);
});

Route::group(['prefix' => '/'], function(){
    Route::get('tops','CityController@showList');
    Route::get('tops/{id}','CityController@showDetail');
    Route::get('search','CityController@search');
});


//for API call
Route::group(['prefix' => 'api'], function () {
    Route::resource('hotels', 'Api\HotelController', ['only' => ['index','show']]);
    Route::get('cities/hotest', 'Api\CityController@showHotest');
});
