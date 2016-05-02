<div>
    <ul id="home-slider" style="list-style-type: none; margin: 0; padding: 0">
        @foreach($images as $index=>$image)
        <li>
            @if($index == 0)
            <div id="slide-{{$index}}" class="home-slide" style="background-image: url({{$image}});">
                @if(isset($captions) && !empty($captions[$index]))
                    <h1 class="ui inverted header">
                        <span class="slide-caption">{{$captions[$index]}}</span>
                    </h1>
                @endif
            </div>
            @else
            <div id="slide-{{$index}}" class="home-slide" style="background-image: url({{$image}});visibility:hidden;">
                @if(isset($captions) && !empty($captions[$index]))
                    <h1 class="ui inverted header">
                        <span class="slide-caption">{{$captions[$index]}}</span>
                    </h1>
                @endif
            </div>
            @endif
        </li>
        @endforeach
    </ul>
</div>
