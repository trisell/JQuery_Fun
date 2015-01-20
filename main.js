 /* Sets up top of page using bootstrap and some css magic
   I didn't want to attempt to push all of the CSS as inline CSS to make the page do what I wanted.
   I am content with pusing the HTML alone to the page as needed.
*/
var header = '<div class="head col-sm-12">'
  + "<p class='intro'>Bento's Sushi, Ramen, and Yakitori House.</p>"
  + "<p class='intro2'> It's Awesomesauce!<br><br></p>"
  + '</div>';







/*
  Setup of the tabs and tab data that are pushed with JQuery, I then use additional Jquery below to allow movement between tabs.
*/
var tabs = "<ul class='tabs nav nav-tabs'>"
 + "<li><a href='#tab1'>Sushi</a></li>"
 + "<li><a href='#tab2'>Yakitori</a></li>"
 + "<li><a href='#tab3'>Ramen</a></li>"
 + "</ul>"
 + "<div id='tab1'>"
 +   "<div class='container'>"
 +     "<div class='row'>"
 +       "<div class'col-sm-12 center'><h1 class='tab1'>We believe that sushi is as much about the beauty of food, as it is about the taste.</h1><br></div>"
 +       "<div class='col-sm-4'><img class='circle' src='./images/sushi2.jpg'></div>"
 +       "<div class='col-sm-4'><img class='circle' src='./images/sushi3.jpg'></div>"
 +       "<div class='col-sm-4'><img class='circle' src='./images/sushi4.jpg'></div>"
 +     "</div>"
 +   "</div>"
 + "</div>"
 + "<div id='tab2'>"
 +   "<div class='container'>"
 +     "<div class='row'>"
 +       "<div class'col-sm-12 center'><h1 class='tab2'>We make Yakitori in the most traditional way possible. Charcol, Fire, and only the finest cuts of meat.</h1><br></div>"
 +       "<div class='col-sm-4'><img class='circle' src='./images/yakitori1.jpg'></div>"
 +       "<div class='col-sm-4'><img class='circle' src='./images/yakitori2.jpg'></div>"
 +       "<div class='col-sm-4'><img class='circle' src='./images/yakitori3.jpg'></div>"
 +     "</div>"
 +   "</div>"
 + "</div>"
 + "<div id='tab3'>"
 +   "<div class='container'>"
 +     "<div class='row'>"
 +       "<div class'col-sm-12 center'><h1 class='tab3'>We strive to provide the most authentic Ramen experience outside of Japan.</h1><br></div>"
 +       "<div class='col-sm-4'><img class='circle' src='./images/ramen1.jpg'></div>"
 +       "<div class='col-sm-4'><img class='circle' src='./images/ramen2.jpg'></div>"
 +       "<div class='col-sm-4'><img class='circle' src='./images/ramen3.jpg'></div>"
 +     "</div>"
 +   "</div>"
 + "</div>"

$("#content").append(header);

$("#content").append(tabs);
/*
  Below code off of website http://www.jacklmoore.com/notes/jquery-tabs/
*/
$(document).ready(function(){

  $('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');
    console.log($links);
    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    // This function errored out and would not find the first hash. I ended up having to modify it to only look for the first link.
    // I have left the original code commented out.
    $active = $($links[0]);   //($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });
});