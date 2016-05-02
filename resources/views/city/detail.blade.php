@extends('layout.slider-page')
@section('title', trans('title.city'))
@section('rezgate_url', '/rezgate/main.html?product=1')

@section('content')
    {{-- change city sider images --}}
    @if($city['slider']==="" || $city['slider']===null)
        @include('partial.slider',['images'=>explode(';',trans('city.default_slider')),
             'captions'=>explode(';',trans('city.default_slider_cap'))])
    @else
        @include('partial.slider',['images'=>$city['slider_list'],
             'captions'=>$city['caption_list']])
    @endif

    <div class="page_container">
        <div class="ui grid container">
            <div class="row">
                <div class="column">
                    <h1 class="ui {{config('app.primary_color')}} header">{{$city['name']}}</h1>
                    <div class="ui divider"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    {!! $city['body'] !!}
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h1 class="ui {{config('app.primary_color')}} header">{{trans('city.package')}}</h1>
                    <div class="ui divider"></div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    {!! $city['package'] !!}
                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')
    @parent
    <script type="text/javascript">
        $('#tops').addClass('active');
    </script>
@endsection