$(function() {
    "use strict";    
    
    /** Constant div card */
    const DIV_CARD = 'div.card';


    setTimeout(function() {
        $('.page-loader-wrapper').fadeOut();
    }, 50);

    $('.dropdown-menu').on('click', function(e) {
        e.stopPropagation();
    });

    
    /** Initialize tooltips */
    $('[data-toggle="tooltip"]').tooltip();

    /** Initialize popovers */
    $('[data-toggle="popover"]').popover({
        html: true
    });
    /** Function for remove card */
    $('[data-toggle="card-remove"]').on('click', function(e) {
        var $card = $(this).closest(DIV_CARD);
        $card.remove();
        e.preventDefault();
        return false;
    });
    /** Function for collapse card */
    $('[data-toggle="card-collapse"]').on('click', function(e) {
        var $card = $(this).closest(DIV_CARD);

        $card.toggleClass('card-collapsed');
        e.preventDefault();
        return false;
    });
    /** Function for fullscreen card */
    $('[data-toggle="card-fullscreen"]').on('click', function(e) {
        var $card = $(this).closest(DIV_CARD);

        $card.toggleClass('card-fullscreen').removeClass('card-collapsed');
        e.preventDefault();
        return false;
    });

    $('a.right_tab').on('click', function() {
        $('body').toggleClass('right_tb_toggle');
    });
});

// Sidebar Setting
$(function() {
    "use strict";
    // sidebar navigation
	$('.sidebar-nav').metisMenu();

    // Menu toggle
    $('.menu_toggle').on('click', function() {
		$('body').toggleClass('offcanvas-active');
    });
    // Chat sidebar toggle
    $('.chat_list_btn').on('click', function() {
		$('.chat_list').toggleClass('open');
    });
    // User Menu
    $('.menu_option').on('click', function() {
		$('.metismenu').toggleClass('grid');
		$('.menu_option').toggleClass('active');
    });    
    // User Menu
    $('.user_btn').on('click', function() {
		$('.user_div').toggleClass('open');
    });
    // Right tab user list chat open/close
    $('.right_chat li a, .user_chatbody .chat_close').on('click', function() {
		$('.user_chatbody').toggleClass('open');
    });

    // right side bar
	 $('a.settingbar').on('click', function() {
        $('.right_sidebar').toggleClass('open');
    });
    // theme option
	 $('a.theme_btn').on('click', function() {
        $('.theme_div').toggleClass('open');
    });
	 
    $('.page').on('click', function() {
        $('.theme_div, .right_sidebar').removeClass('open');
        $('.user_div').removeClass('open');
    });
    // Theme Light Dark
    $('.theme_switch').on('click', function() {
		$('body').toggleClass('theme-dark');
    });    
});

// Font Setting and icon
$(function() {
    "use strict";
    // Font icon Setting 
    $('.arrow_option input:radio').click(function () {
        var others = $("[name='" + this.name + "']").map(function () {
            return this.value
        }).get().join(" ")
        console.log(others)
        $('.metismenu .has-arrow').removeClass(others).addClass(this.value)
    });
    $('.list_option input:radio').click(function () {
        var others = $("[name='" + this.name + "']").map(function () {
            return this.value
        }).get().join(" ")
        console.log(others)
        $('.metismenu li .collapse a').removeClass(others).addClass(this.value)
    });
    // Font Setting 
    $('.font_setting input:radio').click(function () {
        var others = $("[name='" + this.name + "']").map(function () {
            return this.value
        }).get().join(" ")
        console.log(others)
        $('body').removeClass(others).addClass(this.value)
    });  
});

// Switch Setting
$(function() {
    "use strict";
    // Full Dark mode
	$(".setting_switch .btn-darkmode").on('change',function() {
		if(this.checked) {
			$('body').addClass('dark-mode');
		}else{
			$('body').removeClass('dark-mode');
		}
    });
    // Top bar sticky
	$(".setting_switch .btn-fixnavbar").on('change',function() {
		if(this.checked) {
			$('#page_top').addClass('sticky-top');
		}else{
			$('#page_top').removeClass('sticky-top');
		}
    });
    // icon-color
	$(".setting_switch .btn-iconcolor").on('change',function() {
		if(this.checked) {
			$('body').addClass('iconcolor');
		}else{
			$('body').removeClass('iconcolor');
		}
    });    
    // Gradient Color
	$(".setting_switch .btn-gradient").on('change',function() {
		if(this.checked) {
			$('body').addClass('gradient');
		}else{
			$('body').removeClass('gradient');
		}
    });
    // Dark Sidebar
	$(".setting_switch .btn-sidebar").on('change',function() {
		if(this.checked) {
			$('body').addClass('sidebar_dark');
		}else{
			$('body').removeClass('sidebar_dark');
		}
	});
	$(".setting_switch .btn-min_sidebar").on('change',function() {
		if(this.checked) {
			$('#header_top').addClass('dark');
		}else{
			$('#header_top').removeClass('dark');
		}
	});
    // Dark Sidebar
	$(".setting_switch .btn-pageheader").on('change',function() {
		if(this.checked) {
			$('#page_top').addClass('top_dark');
		}else{
			$('#page_top').removeClass('top_dark');
		}
    });    
    // Box Shadow
	$(".setting_switch .btn-boxshadow").on('change',function() {
		if(this.checked) {
			$('.card, .btn, .progress').addClass('box_shadow');
		}else{
			$('.card, .btn, .progress').removeClass('box_shadow');
		}
    });
    // RTL Support
	$(".setting_switch .btn-rtl").on('change',function() {
		if(this.checked) {
			$('body').addClass('rtl');
		}else{
			$('body').removeClass('rtl');
		}
    });
    // RTL Support
	$(".setting_switch .btn-boxlayout").on('change',function() {
		if(this.checked) {
			$('body').addClass('boxlayout');
		}else{
			$('body').removeClass('boxlayout');
		}
    });
});
