@extends('layout.slider-page')
@section('title', trans('title.vipprogram'))

@section('bookingContainer')
@endsection

@section('content')
@include('partial.slider',['images'=>['/images/slider/vipprograms1.jpg','/images/slider/vipprograms2.jpg','/images/slider/vipprograms3.jpg'],'captions'=>['Amazing First Class Experience','Personal Concierge','Private Aviation']])
<div id="vip_program_content" class="page_container">
  <div class="ui grid container">
     <div class="ui column">
       <h2 class="ui {{config('app.primary_color')}} header">
         VIP Program
       </h2>
       <div class="ui divider"></div>
       <p>
         China Telecom VIP offers you a wide range of holiday activities and travel attractions that will make your next trip even more memorable! Whether you are planning a family vacation or a romantic getaway, China Telecom VIP has deals on tours, site seeing spots and activities for everyone and anyone. Browse our expansive selection of attractions by destination and build out your travel itinerary. From go-go city adventures in New York and Hong Kong to cultural exploration in Paris and London to beach-side fun in the sun in Pattaya and Phuket, China Telecom VIP knows how to help you prepare a proper holiday!
       </p>
       <h2 class="ui {{config('app.primary_color')}} header">
         China Telecom VIP Membership Program
       </h2>
       <div class="ui divider"></div>
       <p>
         China Telecom VIP has developed an exclusive membership program for China Telecom customers that aspire to have access to the world’s finest lifestyle management program tailored to meet your very day personal needs.
       </p>
       <h2 class="ui {{config('app.primary_color')}} header">
         Services We Provide Exclusively to our Members include:
       </h2>
       <div class="ui divider"></div>
       <div class="ui grid">
         <div class="ui three column row">
           <div class="ui column">
             <ul class="ui list">
               <li>Tickets to Events Worldwide</li>
               <li>Access to Private Clubs at 100 Private Clubs</li>
               <li>Ideas for Corporate and Family Gifts</li>
               <li>Access to Private Wineries and Wine Tastings</li>
               <li>Access to Exclusive Culinary Events</li>
               <li>Access to Personal Shoppers</li>
               <li>Private Yachts and Planes</li>
               <li>Exclusive Access to Residences and Penthouses</li>
               <li>Access to Exclusive Golf Courses</li>
             </ul>
           </div>
           <div class="ui eight wide column">
             <ul class="ui list">
               <li>Red Carpet Access to Events Worldwide</li>
               <li>Networking Events Worldwide</li>
               <li>Discounts for all of our Travel Services</li>
               <li>Personal Concierge</li>
               <li>24 Hour Translation Services</li>
               <li>Event Planning</li>
               <li>Procurement Services</li>
               <li>Private Aviation</li>
               <li>Customized Luxury Tours for you, family and business associates</li>
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
