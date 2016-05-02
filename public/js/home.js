$(function(){
  $('#home').addClass('active');
  $('.partner').dimmer({
          opacity: '0.5',
          on: 'hover'
      });

      $.getJSON('/api/cities/hotest', function(data){
          var items = [];

          $.each(data, function(idex,item){
              items.push({
                  src:'/tops/'+item.id,
                  srct:item.thumbnail,
                  title: item.name
              });
          });

          items.push({
              src: '/tops',
              srct: '/images/thumbnails/more.jpg',
              title: $('html').attr('lang') == 'en' ? 'More' : '了解更多'
          });
          $('#home-gallery').empty();
          $('#home-gallery').nanoGallery(

              {
                  thumbnailWidth: 'auto',
                  thumbnailHeight: 250,

                  theme: "light",

                  //thumbnailAlignment: "justified",
                  thumbnailGutterWidth : 0,
                  thumbnailGutterHeight : 0,
                  thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
                  thumbnailLabel: {
                      display: true,
                      position: 'overImageOnMiddle',
                      align: 'center',
                      hideIcons: true,
                  },
                  fnThumbnailOpen: function(items){
                      window.location.href=items[0].src;
                  },
                  items:items,

              }

          );
      });
});
