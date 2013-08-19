$(function(){
		$('#contact-form').validate({
	    rules: {
          year: {
	        required: true,
            range: [1900, 2013],
            count: true
	      },
	      city: {
	        required: true,
            count: true
          },
          university: {
	        required: true,
              count:true
	      },
            graduation: {
                required: true,
                range: [1900, 2020],
                count: true
	      },
            howYouKnow: {
            count:true
            },
            expectations: {
                count:true
            },
            timing: {
                count:true
            },
            english: {
                count:true
            },
            workexperience: {
                count:true
            },
            devexperience: {
                count:true
            },
            tools: {
                count:true
            },
            cmdline: {
                count:true
            },
            space: {
                count:true
            },
            form: {
                count:true
            },
            factorion: {
                count:true
            }



        },
			highlight: function(element) {
				$(element).closest('.control-group').removeClass('success').addClass('error');
			},
			success: function(element) {
				element
				.text('OK!').addClass('valid')
				.closest('.control-group').removeClass('error').addClass('success');
			},

            invalidHandler: function(){ $("#first").collapse('show')}
	  });

    jQuery.validator.addMethod("count", function(value, element) {
        var filled = $("input:filled").length + $("textarea:filled").length - 3 + $("input:checked").length;
        var percentage = filled / 15.0 * 100;

        $(".bar").css("width", ""+percentage+"%");
        $(".progress-info").text(""+filled+" ответов из 15")
        return true}, "");


    var header = $('header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            header.addClass("fixed-header");
        } else {
            header.removeClass("fixed-header");
        }
    });

});