@extends('layout.page')
@section('title', trans('title.activity'))
@section('content')
    <div class="page_container">
        <div id="activity-detail" class="ui vertically divided grid container">
            <div class="row">
                <div class="column">
                    <h1 class="ui {{config('app.primary_color')}} header">
                        {{$activity['name']}}
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    {!! $activity['body'] !!}
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div id="activity-gallery"></div>
                </div>
            </div>
        </div>
    </div>
@endsection


@section('scripts')
    @parent
    <script type="text/javascript" src="/js/activity.js"></script>
    @unless(empty($activity) || empty($activity['gallery']))
        @include('partial.gallery',['target'=>'#activity-gallery','images'=>explode(';',$activity['gallery'])])
    @endunless
@endsection
