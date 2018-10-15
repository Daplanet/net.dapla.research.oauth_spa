requirejs.config({
    paths: {
	'jquery': 'jquery.min',
        'escapes': 'escapes.min',
        'audio': 'audio.min',
	'screenful': 'screenfull.min',
	'terminal': 'jquery.terminal-min',
	'mousewheel': 'jquery.mousewheel-min'
    }, 
    shim: {
	'escapes': { deps: ['jquery']},
	'screenful': { deps: ['jquery'], exports: 'screenful'},
	'audio': { exports: 'audiojs' }
    }
});

var libs = [
    "jquery",
    "escapes",
    "audio",
    "screenful"
];

require(libs, function($, audiojs, audiojsInstance, screenful) {

  $(document).ready(function() {
    escapes('/screen.txt', function () {
      $(this).appendTo('#art');
      $("#art").fadeIn(500);
    });

    audiojs.createAll();
    screenfull.request();

    setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0009/1652.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
  });
});
