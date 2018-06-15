jQuery(document).ready(function(){
    //cache DOM elements
    var mainContent = $('.app-main-content'),
        header = $('.app-main-header'),
        sidebar = $('.app-side-nav'),
        sidebarTrigger = $('.app-nav-trigger');

    //on window scrolling - fix sidebar nav
    var scrolling = false;
    checkScrollbarPosition();
    $(window).on('scroll', function(){
        if( !scrolling ) {
            (!window.requestAnimationFrame) ? setTimeout(checkScrollbarPosition, 300) : window.requestAnimationFrame(checkScrollbarPosition);
            scrolling = true;
        }
    });

    //mobile only - open sidebar when user clicks the hamburger menu
    sidebarTrigger.on('click', function(event){
        event.preventDefault();
        $([sidebar, sidebarTrigger]).toggleClass('nav-is-active');
    });

    function checkMQ() {
        //check if mobile or desktop device
        return window.getComputedStyle(document.querySelector('.app-main-container'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
    }


    function checkSelected(mq) {
        //on desktop, remove selected class from items selected on mobile/tablet version
        if( mq == 'desktop' ) $('.has-children.selected').removeClass('selected');
    }

    function checkScrollbarPosition() {
        var mq = checkMQ();

        if( mq != 'mobile' ) {
            var sidebarHeight = sidebar.outerHeight(),
                windowHeight = $(window).height(),
                mainContentHeight = mainContent.outerHeight(),
                scrollTop = $(window).scrollTop();

            if(( scrollTop + windowHeight > sidebarHeight ) && ( mainContentHeight - sidebarHeight != 0 ) ) {
                sidebar.addClass('is-fixed');
                header.addClass('is-fixed');
            } else{
                sidebar.removeClass('is-fixed');
                header.removeClass('is-fixed');
            }
        }
        scrolling = false;
    }

    /*
        Animate the images heros of the projects page
     */

    $('.project-box').each(function(i){
       $(this).delay(i*200).animate(
        {top:'0px',opacity: 1},
        {queue: true, duration: 500,});
    });

    /*
        Animation for the blog-box of each blog post
        Checks if a window scroll is necessary
     */

    var blog_boxes = $('.blog-box');
    $(window).on('scroll resize', in_view);

    function in_view() {
        var wHeight = $(window).height(),
            wTop = $(window).scrollTop(),
            wBottom = wHeight + wTop;

        $.each(blog_boxes, function(){
            var el = $(this),
                elHeight = el.outerHeight(),
                elTop = el.offset().top,
                elBottom = elTop + elHeight;

            if(elBottom >= wTop && elTop <= wBottom) {
                el.addClass('in-view');
            } else {
                el.removeClass('in-view');
            }
        });
    }

    function standardImagePaddings() {
        var standardImages = document.querySelectorAll('.standard-image-box');

        standardImages.forEach(function(box){
            var children = box.childNodes;
            var height = children[1].height;
            var boxBottom = height + 40
            var captionTop = height + 10;
            box.style.paddingBottom = boxBottom + "px";
            children[3].style.paddingTop = captionTop + "px";
        });
    }

    /*
        auto trigger scroll for elements that are already onscreen
    */
    $(window).trigger('scroll');
    standardImagePaddings();
    $(window).on('resize', standardImagePaddings);



    var Fucla = ' /$$$$$$$$ /$$   /$$  /$$$$$$  /$$        /$$$$$$\n| $$_____/| $$  | $$ /$$__  $$| $$       /$$__  $$\n| $$      | $$  | $$| $$  \\__/| $$      | $$  \ $$\n| $$$$$   | $$  | $$| $$      | $$      | $$$$$$$$\n| $$__/   | $$  | $$| $$      | $$      | $$__  $$\n| $$      | $$  | $$| $$    $$| $$      | $$  | $$\n| $$      |  $$$$$$/|  $$$$$$/| $$$$$$$$| $$  | $$\n|__/       \\______/  \\______/ |________/|__/  |__/';
    console.log(Fucla);
});











