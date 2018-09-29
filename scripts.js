function scripts() {

  var windowWidth = $(window).width();
	if(windowWidth>=450){ windowWidth = windowWidth*0.5; }
  else { windowWidth = windowWidth*0.8; }

	$( ".imgLink" ).css({ 'max-width': windowWidth });

	// Formatting specifically for stackoverflow
	$( "p" ).siblings( "br" ).remove();
	$( "li" ).siblings( "br" ).remove();

	$( ".post-title" ).click(function(elem) {
		/* Hide/show job content*/
		if ( $(this).siblings().is( ":hidden" ) ) {
			$(this).siblings().slideDown( "slow" );
		} else {
			$(this).siblings().slideUp();
		}
	});

  // Subscribe to newsletter
	$( "#subscribe-header-button" ).click(function(elem) {
		/*subscribe user to mailing list*/
		var name  = $('#name').val();
		var email = $('#email').val();
		$('#subscribe-header-button').html('Working...');

		$.post( "subscribeUser.php", { name:name, email:email }, function( data ) {
			var responseBox = $('#subscribe-response');
			responseBox.html(data);
			if(data==="Success!"){
				$('#name').val('');
				$('#email').val('');
				$('#subscribe-header-button').html('Sign Up');
				setTimeout(function(){
					responseBox.html('');
				},3000);
			}
		});
	});

	$( "#contact" ).click(function(elem) {
		// event.preventDefault();
		var email='riknieu'+'@'+'gmail.com';
		window.location.href = "mailto:"+email+"?subject=Remote React Jobs Enquiry";
	});

  $( "#footer-post-job-mb" ).click(function(elem) {
    // event.preventDefault();
    // var email='rik'+'@'+'blockchaindevjobs.com';
    // window.location.href = "mailto:"+email+"?subject=Jobs Posting Enquiry";
    window.location = "/post/";
  });

  $( "#footer-post-job" ).click(function(elem) {
    // event.preventDefault();
    // var email='rik'+'@'+'blockchaindevjobs.com';
    // window.location.href = "mailto:"+email+"?subject=Jobs Posting Enquiry";
    window.location = "/post/";
  });

  $( "#premium-post-bar" ).click(function(elem) {
    // event.preventDefault();
    // var email='rik'+'@'+'blockchaindevjobs.com';
    // window.location.href = "mailto:"+email+"?subject=Please send me more info on budget and premium jobs postings.";
    window.location = "/post/";
  });

	$( ".icon" ).click(function(elem) {
		var height = window.innerHeight-40;
		window.scrollTo(9,height);
	});

  // Search Filter
  $('input').on('keyup', function(elem) {
    var searchTerm=elem.target.value.toLowerCase();
    var posts=$('.post-body-content');

    posts.map(function(i, post){
      var textFormatted=post.innerText.toLowerCase().replace(/\s{2,}/g,' ');
      var searchTermFound = textFormatted.indexOf(searchTerm)!==-1;

      var classes = $(post).attr("class").split(" ");
      var postCount = classes[1];

      if(searchTermFound===false){
        $('.post-count-'+postCount).addClass('hidden');
      } else {
        $('.post-count-'+postCount).removeClass('hidden');
      }
    });
  });

  // Store popular and hot clicks
  var popularAr=[];
  var hotAr=[];
  $('.apply-button-a').on('click', function(elem) {
    var id=elem.target.classList[1];
    var testClicked = hotAr.indexOf(id);
    if(testClicked===-1){
      // Add click
      hotAr.push(id);
      $.post( "clicks/", { type:'hot', no:id }, function( data ) {});
    }
  });

  $('.title').on('click', function(elem) {
    var id=elem.target.classList[1];
    var testClicked = popularAr.indexOf(id);
    if(testClicked===-1){
      // Add click
      popularAr.push(id);
      $.post( "clicks/", { type:'popular', no:id }, function( data ) {});
    }
  });

}

//////////////////////////////////////////////////////////////////////////////////////////
