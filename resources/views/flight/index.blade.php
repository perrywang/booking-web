@extends('layout.slider-page')
@section('title', trans('title.flight'))
@section('rezgate_url', '/rezgate/main.html?product=1')

@section('content')
@include('partial.slider',['images'=>['/images/slider/flights1.jpg','/images/slider/flights2.jpg','/images/slider/flights3.jpg',],'captions'=>[trans('home.cap2'),trans('home.cap2'),trans('home.cap2'),]])
@endsection

@section('scripts')
  @parent
  <script type="text/javascript">
      $('#flight').addClass('active');
  </script>
@endsection
