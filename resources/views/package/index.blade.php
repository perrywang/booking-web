@extends('layout.slider-page')
@section('title', trans('title.package'))
@section('rezgate_url', '/rezgate/main.html?product=4')
@section('content')
@include('partial.slider',['images'=>['/images/slider/packages1.jpg','/images/slider/packages2.jpg',],'captions'=>[trans('home.cap2'),trans('home.cap2'),]])
@endsection

@section('scripts')
  @parent
  <script type="text/javascript">
      $('#package').addClass('active');
  </script>
@endsection
