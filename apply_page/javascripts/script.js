/*$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        // $('div.select-styled.active').each(function(){
        //     $(this).removeClass('active').next('ul.select-options').hide();
        // });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});*/

$(document).ready(function() {
    $('a.anchor').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.navi li').height()
        }, 1200);
        highlight($(this));
    });
    // $(window).on('mousewheel', function(e) {
    //     var y = $(this).scrollTop() + 100;
    //     if(y >= $('#time').offset().top) {
    //         highlight($('.navi a[href="#time"]'));
    //     } else if(y >= $('#keypoint').offset().top) {
    //         highlight($('.navi a[href="#keyoint"]'));
    //     } else if(y >= $('#ticket').offset().top) {
    //         highlight($('.navi a[href="#ticket"]'));
    //     } else if(y >= $('#example').offset().top) {
    //         highlight($('.navi a[href="#example"]'));
    //     }
    //     //console.log('clientY='+e.clientY+', pageY='+e.pageY+', screenY='+e.screenY);
    // });
    function highlight(ele) {
        $('.navi li').removeClass('active');
        ele.parent('li').addClass('active');
    }
});