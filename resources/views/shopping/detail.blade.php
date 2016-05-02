@extends('layout.page')
@section('title', trans('title.shopping'))
@section('content')
    <div id="shopping-detail" class="ui stackable grid container">
        <div class="ten wide column">
            <p>
                {!! $store['body'] !!}
            </p>
        </div>
        <div class="column"></div>
        <div class="five wide column">
            <div class="ui items">
                <div class="item">
                    <div class="content">
                        <h3 class="ui {{config('app.primary_color')}} header">{{trans('shopping.offers')}}</h3>
                        <div class="description">
                            {!! $store['offers'] !!}
                            <div class="ui divider"></div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <h3 class="ui {{config('app.primary_color')}} header">{{trans('shopping.website')}}</h3>
                        <div class="description">
                            <p>
                                <a href="{{'http://'.$store['website']}}">{{ $store['website'] }}</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <h3 class="ui {{config('app.primary_color')}} header">{{trans('shopping.hours')}}</h3>
                        <div class="description">
                            {!! $store['hours'] !!}
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <h3 class="ui {{config('app.primary_color')}} header">{{trans('shopping.location')}}</h3>
                        <div class="description">
                            {!! $store['address'] !!}
                        </div>
                    </div>
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
