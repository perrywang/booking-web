@extends('layout.slider-page')
@section('title', trans('title.vipprogram'))

@section('bookingContainer')
@endsection

@section('content')
@include('partial.slider',['images'=>['/images/slider/vipprograms1.jpg','/images/slider/vipprograms2.jpg','/images/slider/vipprograms3.jpg'],'captions'=>['无与伦比的飞行体验','全天候私人接送服务','尊享私人飞行体验']])
<div id="vip_program_content" class="page_container">
  <div class="ui grid container">
     <div class="ui column">
       <h2 class="ui {{config('app.primary_color')}} header">
         多样化的旅游套餐
       </h2>
       <div class="ui divider"></div>
       <p>
         中国电信VIP之旅为您准备了大量假日活动项目，将让您的每次旅行都值得回味！无论您计划全家出行、还是打造一个浪漫的旅程，中国电信VIP之旅都可以提供您所需要的旅游观光特价产品!请按照目的地随意浏览我们海量特价产品，使你们的旅程丰满充实。无论您是要在纽约或香港探秘繁华，还是要去巴黎或伦敦感受其文化底蕴，抑或去普吉岛和芭提雅享受海天之乐，中国电信VIP之旅都知道如何帮您打造完美假日！
       </p>
       <h2 class="ui {{config('app.primary_color')}} header">
         中国电信VIP之旅会员专享计划
       </h2>
       <div class="ui divider"></div>
       <p>
         中国电信VIP之旅针对中国电信客户的个性化需求，提供了独有的高端旅游产品。只要您想要得到全球最好的奢华体验，我们都可以让您满足！
       </p>
       <h2 class="ui {{config('app.primary_color')}} header">
         我们独有的专属服务包括以下项目:
       </h2>
       <div class="ui divider"></div>
       <div class="ui grid">
         <div class="ui three column row">
           <div class="ui column">
             <ul class="ui list">
               <li>全球范围内的活动门票</li>
               <li>100家私人俱乐部进入资格</li>
               <li>为企业和家人提供礼物方案</li>
               <li>进入当地私人酒厂和品酒会</li>
               <li>获得独家美食活动</li>
               <li>独享全球代购服务</li>
               <li>私人游艇和飞机</li>
               <li>独享顶层公寓</li>
               <li>独家高尔夫球场使用</li>
             </ul>
           </div>
           <div class="ui column">
             <ul class="ui list">
               <li>观摩全球各地的红地毯活动</li>
               <li>参与全球各地的网络活动</li>
               <li>享受所有旅游项目的折扣</li>
               <li>私人礼宾服务</li>
               <li>全天候翻译服务</li>
               <li>活动策划</li>
               <li>采购服务</li>
               <li>私人驾驶</li>
               <li>专门定制的奢华旅游项目</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
  </div>

</div>
@endsection

@section('scripts')
    @parent
    <script tyle="text/javascript">
        $('#vipprogram').addClass('active');
    </script>
@endsection
