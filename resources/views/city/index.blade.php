@extends('layout.slider-page')
@section('title', trans('title.city'))
@section('rezgate_url', '/rezgate/main.html?product=1')

@section('content')
    {{-- change city sider images --}}
    @if($cities[0]['slider']==="" || $cities[0]['slider']===null)
        @include('partial.slider',['images'=>explode(';',trans('city.default_slider')),
             'captions'=>explode(';',trans('city.default_slider_cap'))])
    @else
        @include('partial.slider',['images'=>explode(';',$cities[0]['slider']),
             'captions'=>explode(';',$cities[0]['slider_caption'])])
    @endif

    <div id="list"></div>
    <div id="city_list" class="page_container">
        <div class="ui vertically divided grid container">
            <div class="ui two column row">
                <div class="ui column">
                    <h1 class="ui {{config('app.primary_color')}} header">{{trans('city.top_dest')}}</h1>
                </div>
                <div class="ui column">
                    <form id="searchForm" class="" action="{{ action('CityController@search') }}#list" method="get" style="display:inline;">
                        <div class="ui fluid icon input">
                            <input type="text" name="query" value="{{ Request::input('query') }}" placeholder="{{ trans('site.search') }}">
                            <i id="search" class="circular search link icon"></i>
                            <input type="submit" style="display:none;">
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="ui divided items">
                        @foreach($cities as $city)
                            <div class="ui item">
                                <div class="ui image" style="width:200px;height:auto;">
                                    <a href="{{ action('CityController@showDetail', array($city->id)) }}">
                                        <img src="{{ $city->logo }}" alt="place holder" />
                                    </a>
                                </div>
                                <div class="content">
                                    <div class="header">
                                        <a href="{{ action('CityController@showDetail', array($city->id)) }}">
                                            {{$city->name}}
                                        </a>
                                    </div>
                                    <div class="meta">
                                        <span>
                                            <i class="{{strtolower($city->country->name_en)}} flag city_flag"></i>
                                            <div class="ui flowing popup top left transition visible animating scale out">
                                                {{$city->country->name}}{{--: <a href="#">{{trans('city.more_city')}}</a>--}}
                                            </div>
                                        </span>
                                        <span> </span>
                                        <span>{{$city->heat.' '.trans('city.views')}}</span>
                                    </div>
                                    <div class="description">
                                        <p>
                                            {{$city->desc}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="centered column">
                    @include('partial.pagination',['items'=>$cities,'anchor'=>'list'])
                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')
    @parent
    <script type="text/javascript">
        $('#tops').addClass('active');
        $('#search').click(function(){
            $('#searchForm').submit();
        });
        $('.city_flag').popup({
            hoverable: true,
            position : 'bottom center',
            transition: 'vertical flip'
        });
    </script>
@endsection
