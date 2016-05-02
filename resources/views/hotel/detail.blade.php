@extends('layout.page')
@section('title', trans('title.hotel'))
@section('content')
<div class="page_container">
    <div id="hotel-detail" class="ui vertically divided grid container">
        <div class="row">
            <div class="column">
                <h1 class="ui {{config('app.primary_color')}} header">{{$hotel->name}}</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                {!! $hotel['body'] !!}
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div id="hotel-gallery"></div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    @parent
    <script type="text/javascript">
        $('#hotel').addClass('active');
    </script>
    @unless(empty($hotel) || empty($hotel['gallery']))
        @include('partial.gallery',['target'=>'#hotel-gallery','images'=>explode(';',$hotel['gallery'])])
    @endunless
@endsection
