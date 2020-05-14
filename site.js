
 //any image which is a direct child of a column within gallery-section 
 //will be wrapped with the lightbox wrapper
 $('.gallery-section .col-md-3 > img').each(function () {
     var element = $(this);
     var imageSrc = element.attr('src');
     element.wrap('<a href="' + imageSrc + '" data-fancybox="gallery" ></a>');
 });