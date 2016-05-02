<script type="text/javascript" src="/js/jquery.nanogallery.min.js"></script>
<script type="text/javascript">
    $('{{$target}}').nanoGallery({
        thumbnailWidth:200,thumbnailHeight:'auto',
        theme: "light",

        colorSchemeViewer: 'dark',

        thumbnailLabel: {
            display: false,
            position: 'overImageOnMiddle',
            align: 'center',
            hideIcons: true,
        },
        thumbnailHoverEffect:'borderLighter,imageScaleIn80',

        items:[
                @foreach ($images as $image)
                    {
                        src: '{{$image}}',
                        srct:'{{$image}}',

                    },
                @endforeach
        ]
    });
</script>