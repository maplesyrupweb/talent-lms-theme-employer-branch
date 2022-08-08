/* Userway Assessibility Integration */

(function(d){var s = d.createElement("script");s.setAttribute("data-account", "tWoEr9mmVy");s.setAttribute("src", "https://cdn.userway.org/widget.js");(d.body || d.head).appendChild(s);})(document)

$('fieldset').has('legend:contains("Completion rules")').hide();



//Accordion on the course page

$(function(){
var tree=$("#tl-dynamic-tree.tl-tree-courses-list");
if(tree.length!=0){
  tree.dynatree("getRoot").visit(function(node){
  if(node.getLevel()==1){
    node.expand(false);
  }
});
}})

// The height of embedded scorm modules (Articulate Rise)
$('.tl-scorm-frame').css("height", "80vh");

//Freshworks Widget

window.fwSettings={
	'widget_id':73000001474
	};
	!function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
                                                                                                          
var freshdesk = document.createElement('script');
freshdesk.src = "https://widget.freshworks.com/widgets/73000001474.js";
document.getElementsByTagName('head')[0].appendChild(freshdesk);

var freshdesk1 = document.createElement('script');
freshdesk1.src = "https://assets.freshdesk.com/widget/freshwidget.js";
document.getElementsByTagName('head')[0].appendChild(freshdesk1);
                                                               
/* Add alt text manually */                                                               
$('img[src="https://d3j0t7vrtr92dk.cloudfront.net/case/1649109608_1611080594_logo_small_case__2_.png?"]').attr('alt', 'CASE LOGO');
                                                               
/* Add alt text manually */                                                                                                                      $('img[src="https://supportedemployment.ca/wp-content/uploads/2022/06/CASE_Logo_Compressed.jpg"]').attr('alt', 'CASE logo');
                                                               
/* Add alt text manually */                                                                                                                      
$('img[src="https://supportedemployment.ca/wp-content/uploads/2022/06/Why_CASE_thumbnail.jpg"]').attr('alt', 'A woman by her office window typing on her computer');
                         
/* Add alt text manually */                                                                                                                              
$('img[src="https://supportedemployment.ca/wp-content/uploads/2022/06/CASE_whats_the_difference.jpg"]').attr('alt', 'A person using her hands at a meeting, possibly for sign language or body language');

/* Add alt text manually */                                                                                                                      $('img[src="https://supportedemployment.ca/wp-content/uploads/2022/06/CASE_news_and_events.jpg"]').attr('alt', 'A young man in a blue employee uniform holding a tablet computer and smiling');
                                                               
/* Add alt text manually */                                                               
$('img[src="https://d3j0t7vrtr92dk.cloudfront.net/case/1656354780_CASE-LMS-Hero-Image.png?"]').attr('alt', 'Two woman looking at a computer screen together.');
                                                               
/* Add alt text manually */                                                                                                                      $('img[src="https://d3j0t7vrtr92dk.cloudfront.net/case/1656354780_CASE-LMS-Hero-Image.png"]').attr('alt', 'Two woman looking at a computer screen together.');

/* Add a message for in case of blank screen */                                                               
                                                               
if($('#scorm-frame').length){
  $('<div class="text-center" style="color:black; padding-left:5px; font-size:16px; background-color: #881825;      color:white"><i class="bi bi-info-circle icons"></i>If you are seeing a blank screen in your module, please refer to this <a href="https://supportedemployment.freshdesk.com/support/solutions/articles/73000566955-if-your-module-is-displaying-as-a-blank-screen" target="_blank" style="color:white; text-decoration:underline"> article</a> or submit a <a href="https://supportedemployment.freshdesk.com/support/tickets/new" target="_blank" style="color:white; text-decoration:underline">help ticket</a> or reach out to CASE for support: <a style="color:white; text-decoration:underline" href="mailto:albert@supportedemployment.ca?subject=Blank%20screen%20for%20module">albert@supportedemployment.ca</a></div>').appendTo($('.readability'));
}


// Microsoft Clarity                                                              
                                                               
(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "cvi7f3l2yq");

// Google Analytics
  
$.getScript("https://www.googletagmanager.com/gtag/js?id=G-ZLEF8K2EJV",function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZLEF8K2EJV');
});

//Assignment footer
if($('.tl-assignment-area').length){
  $('<div class="text-center footer-message" style="color:black; padding-left:5px; font-size:16px; background-color: #881825; color:white"><i class="bi bi-info-circle icons"></i> If you need help zipping files, please refer to this <a href="https://supportedemployment.freshdesk.com/support/solutions/articles/73000572049-how-to-zip-files-for-assignments" target="_blank" style="color:white; text-decoration:underline"> article</a> or submit a <a href="https://supportedemployment.freshdesk.com/support/tickets/new" target="_blank" style="color:white; text-decoration:underline">help ticket</a> or reach out to <a style="color:white; text-decoration:underline" href="mailto:albert@supportedemployment.ca?subject=Zip%20files%20for%20module">CASE</a> for support</div>').insertAfter($('.tl-assignment-area'));
  }

// Assignment footer. This will appear on every page that has an assignment unit currently and in the future

if($('.tl-hr-content').length){
$('<div class="text-center" style="color:black; padding-left:5px; font-size:16px; background-color: #881825; color:white"><i class="bi bi-info-circle icons"></i> If you need help zipping files, please refer to this <a href="https://supportedemployment.freshdesk.com/support/solutions/articles/73000572049-how-to-zip-files-for-assignments" target="_blank" style="color:white; text-decoration:underline"> article</a> or submit a <a href="https://supportedemployment.freshdesk.com/support/tickets/new" target="_blank" style="color:white; text-decoration:underline">help ticket</a> or reach out to CASE for support: <a style="color:white; text-decoration:underline" href="mailto:albert@supportedemployment.ca?subject=Zip%20files%20for%20module">albert@supportedemployment.ca</a></div>').insertBefore($('.tl-hr-content'));
}

//Load Bootstrap Icons                                          
var styles=document.createElement('link');
styles.href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css';
styles.rel="stylesheet";
document.getElementsByTagName('head')[0].prepend(styles);