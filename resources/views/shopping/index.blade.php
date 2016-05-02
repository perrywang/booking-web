@extends('layout.slider-page')
@section('title', trans('title.shopping'))

@section('content')
@include('partial.slider',['images'=>['/images/slider/shopping1.jpg','/images/slider/shopping2.jpg'],'captions'=>[trans('shopping.fashionshow'),trans('shopping.grand_canal_shoppes'),]])
    <div id="shopping-list" class="ui grid container">
        <div class="row">
            <div class="column">
                <h1 class="ui {{config('app.primary_color')}} header">{{trans('shopping.title')}}</h1>
            </div>
        </div>
        <div class="ui divider"></div>
        <div class="row">
            <div class="column">
                <div class="ui divided link items">
                    @foreach ($shoppings as $store)
                        <a class="item" href="{{'/shopping-partner/'.$store['id']}}">
                            <div class="ui image">
                                <img src="{{$store['logo']}}" alt="{{$store['name']}}">
                            </div>
                            <div class="content">
                                <div class="ui header">{{$store['name']}}</div>
                                <div class="description">
                                    <p>{{$store['desc']}}</p>
                                </div>
                            </div>
                        </a>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    @parent
    <script type="text/javascript">
        $('#shopping').addClass('active');
    </script>
@endsection
