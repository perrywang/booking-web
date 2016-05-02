@extends('layout.slider-page')
@section('title', trans('title.activity'))
@section('rezgate_url', '/rezgate/main.html?product=3')

@section('content')
{{-- change hotel sider images --}}
@include('partial.slider',['images'=>['/images/slider/activities1.jpg','/images/slider/activities2.jpg','/images/slider/activities3.jpg'],'captions'=>[trans('activity.louvre'),trans('activity.golden_gate_bridge'),'',]])
<div id="list"></div>
<div id="activity_list" class="page_container">
  <div class="ui grid container">
    <div class="ui two column row">
      <div class="ui column">
        <h1 class="ui {{config('app.primary_color')}} header" style="display:inline-block">
          {{trans('activity.title')}}
        </h1>
      </div>
      <div class="ui column">
        <form id="searchForm" class="" action="{{ action('ActivityController@search') }}#list" method="get" style="display:inline;">
          <div class="ui fluid icon input">
            <input type="text" name="query" value="{{ Request::input('query') }}" placeholder="{{ trans('site.search') }}">
            <i id="search" class="circular search link icon"></i>
            <input type="submit" style="display:none;">
          </div>
        </form>
      </div>
    </div>
    <div class="ui divider" style="margin-top:2em;"></div>
    <div class="ui row">
      <div class="ui column">
        <div class="ui divided link items">
          @foreach($activities as $activity)
          <a class="ui item" href="{{action('ActivityController@show',array($activity->id))}}">
            <div class="ui image" style="width:200px;height:auto;">
              <img src="{{$activity->poster}}" alt="place holder" />
            </div>
            <div class="content">
              <div class="header">{{$activity->name}}</div>
              <div class="description">
                <p>
                  {{$activity->desc}}
                </p>
              </div>
             </div>
           </a>
          @endforeach
        </div>
        @if(isset($found) && !$found)
          @include('partial.nothing_found',['query'=>Request::input('query')])
        @else
          <div class="ui divider"></div>
        @endif
        @include('partial.pagination',['items'=>$activities,'anchor'=>'list'])
      </div>
    </div>
  </div>
</div>

@endsection

@section('scripts')
  @parent
  <script type="text/javascript" src="/js/activity.js"></script>
@endsection
