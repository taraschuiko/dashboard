jQuery(document).ready(function($) {
	$('.menu-item').click(function(event) {
		var cl = "#" + $(this).attr("id") + "-tab";
		$(cl).slideToggle(200);
		if ($(cl).length) {
			$(this).toggleClass('menu-item--active');
		}
	});

	$('.folder').click(function(event) {
		var cl = "#" + $(this).attr("id") + "-tab";
		$(cl).slideToggle(200);
	});

	var profileImage = $('.profile-image').data('image');
	$('.profile-image').css('background', 'url(' + profileImage + ')');

	// Aside height

	if (window.matchMedia('(min-width: 767px)').matches) {
		var height = $(document).outerHeight();
		$('.aside').css('minHeight', height);
	}

	// Shevron items add padding

	$('.menu-item:has(.menu-item_shevron)').css('padding-right', '38px');

	// Color of table values

	$('.entries-table td:contains("+")').css('color', '#14BF44');
	$('.entries-table td:contains("-")').css('color', '#E54D42');
});

// Chart

var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
    	labels: ["January", "February", "March", "April", "May", "June", "July"],
    	datasets: [{
    		label: "Weight",
    		backgroundColor: 'rgb(218,246,231)',
    		borderColor: 'rgb(20,191,68)',
    		pointRadius: 10,
    		pointHoverRadius: 10,
    		pointBackgroundColor: '#fff',
    		pointHoverBackgroundColor: '#fff',
    		pointBorderWidth: 3,
    		data: [287, 285, 276, 275, 278, 285, 287],
    	}]
    },

    // Configuration options go here
    options: {
    	responsive: true,
    	legend: {
    		display: false
    	},
    	scales: {
    		xAxes: [{
    			display: false,
    		}],
    	},
    	tooltips: {enabled: false},
    	layout: {
    		padding: {
    			left: 0,
    			right: 12,
    			top: 0,
    			bottom: 0
    		}
    	}
    }
});