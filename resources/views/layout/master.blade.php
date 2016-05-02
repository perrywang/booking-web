<!DOCTYPE html>
<html lang="{{App::getLocale()}}">
<head>
    <!-- Standard Meta -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <!-- Site Properties -->
    <title>@yield('title')</title>
    @section('styles')
    <link rel="stylesheet" type="text/css" href="/css/semantic.min.css">
    <link rel="stylesheet" type="text/css" href="/css/lightslider.min.css">
    <link rel="stylesheet" href="/css/nanoGALLERY/nanogallery.min.css">
    <link rel="stylesheet" href="/css/nanoGALLERY/themes/light/nanogallery_light.min.css">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <link rel="stylesheet" type="text/css" href="/css/page.css">
    @show
</head>
<body>
<div id="container" class="ui grid">
    <div class="ui row" style="background-color:white;">
      <div class="ui column">
        <div class="ui grid container">
           <div id="header" class="ui two column row">
             <div class="ui column">
                 <a href="/home"><img src="/images/ct_logo.png" alt="China Telecom logo" style="margin-right:0.618em;"/></a>
                 <a href="/home"><img src="/images/happybookings_logo.png" alt="happybookings logo"/></a>
             </div>
             <div class="ui right aligned column">
               <div class="basic segment" style="padding-top:7px;" data-no-turbolink>
                   <a href="/setlanguage?lang=cn" style="margin-right:13px;"><i class="cn flag"></i>中文</a>
                   <a href="/setlanguage?lang=en"><i class="us flag"></i>English</a>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
    <div id="navigator" class="ui row">
         <div class="ui column" style="background-color:#2185D0;">
           <div class="ui grid container">
             <div class="ui column">
               <div id="menu_bar" class="ui {{config('app.primary_color')}} inverted icon menu">
                   <a id="home" class="item" href="/home"><i class="large home icon"></i></a>
                   <a id="flight" class="item" href="/flights">{{ trans('menu.flight') }}</a>
                   <a id="hotel" class="item" href="/hotels">{{ trans('menu.hotel') }}</a>
				   <a id="activity" class="item" href="/activities">{{ trans('menu.activity') }}</a>
                   <a id="package" class="item" href="/travelpackages">{{ trans('menu.package') }}</a>
                   <a id="vipprogram" class="item" href="/vipprograms">{{ trans('menu.VipProgram') }}</a>
                   <a id="shopping" class="item" href="/shopping-partner">{{ trans('menu.shopping') }}</a>
                   <a id="tops" class="item" href="/tops">{{ trans('menu.TopDestination') }}</a>
               </div>
             </div>
          </div>
         </div>
    </div>
    <div id="content" class="ui row" style="min-height:450px;margin-bottom:3em;">
        <div class="ui column" style="min-height:598px;">
            @yield('content')
        </div>
    </div>
    @include('partial.footer_'.App::getLocale())
</div>
@section('bookingContainer')
<div id="bookingContainer" class="ui grid" style="position:absolute;left:100px;top:160px;width:90%;z-index:999">
     <div class="ui row">
        <div class="ui seven wide column">
        </div>
        <div class="ui center aligned nine wide column">
          <iframe id="bec_container_frame" frameborder="0" src="@yield('rezgate_url')" scrolling="no" width="640"></iframe>
        </div>
     </div>
</div>
@show
@section('scripts')
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/semantic.min.js"></script>
<script type="text/javascript" src="/js/menu.js"></script>
@show
</body>
