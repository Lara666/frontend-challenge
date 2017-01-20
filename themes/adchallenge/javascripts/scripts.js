(function($){
	var stickyHeader = {
		init: function(){
			this.cacheDom();
			this.bindEvents();
			this.onWindowsLoad();
		},

		cacheDom: function(){
			this.header = $("header");
			this.main = $("main");
			this.layoutContent = $(".layout-content");
			this.mobileMenu = $("header").find("nav");
			this.nav = this.mobileMenu.find("ul.menu");
			this.pageTitle = $("#block-adchallenge-page-title").find(".page-title");
		},

		bindEvents: function(){
			$(document).on("scroll", this.scrollEvent.bind(this));
			this.mobileMenu.on("click", this.mobileEvent.bind(this));
		},

		onWindowsLoad: function(){
			this.scrollEvent();
			if (this.pageTitle.is(':empty')){
			  this.pageTitle.remove();
			}
		},

		scrollEvent: function(){
			var mq = window.matchMedia( "(min-width: 768px)" );
		    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
			if(mq.matches && currentScroll > 60){
				this.stickyHeader("showMenu");
			}else{
				this.stickyHeader("hideMenu")								;
			}
		},

		stickyHeader: function(newClass){
			switch(newClass){
				case "showMenu":
					this.header.addClass('sticky-header');
					this.main.css("padding-top", "185px");
					break;
				case "hideMenu":
					this.header.removeClass('sticky-header');
					this.main.css("padding-top", "0px");
					break;
			}
		},

		mobileEvent:function(){
			if(this.nav.height() < 10){
				this.animateNav("open");
			}else{
				this.animateNav("close");
			}
		},

		animateNav: function(state){
			var state = state=="open"?this.nav.get(0).scrollHeight : "0"
			this.nav.animate({height: state}, 400);
		}
	};

	$(document).ready(function() {
		stickyHeader.init();
	});

})(jQuery);