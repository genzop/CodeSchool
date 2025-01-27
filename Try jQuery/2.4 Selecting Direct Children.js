/*2.4 Selecting Direct Children
Uh oh, it looks like we selected more than we wanted. We've also selected all the voting nav list items. Let's use a direct child selector to only select the li items that are direct children of #tours.
	
	<div id="tours-wrapper">
  		<h1>Guided Tours</h1>
  		<ul id="tours">
    		<li class="america">
      			<h2>New York, New York</h2>
      			<span class="details">$1,899 for 7 nights</span>
      			<ul class="vote"><li><a href="#">↑</a></li><li><a href="#">↓</a></li></ul>
    		</li>
    		<li class="europe">
      			<h2>Paris, France</h2>
      			<span class="details">$2,499 for 7 nights</span>
      			<ul class="vote"><li><a href="#">↑</a></li><li><a href="#">↓</a></li></ul>
    		</li>
    		<li class="europe sale">
      			<h2>Madrid, Spain</h2>
      			<span class="details">$1,577 for 5 nights</span>
      			<ul class="vote"><li><a href="#">↑</a></li><li><a href="#">↓</a></li></ul>
    		</li>
    		<li class="asia">
      			<h2>Tokyo, Japan</h2>
      			<span class="details">$1,999 for 5 nights</span>
      			<ul class="vote"><li><a href="#">↑</a></li><li><a href="#">↓</a></li></ul>
    		</li>
  		</ul>

		<ul class="sorting">
    		<li><a href="#">America</a></li>
    		<li><a href="#">Europe</a></li>
    		<li><a href="#">Asia</a></li>
  		</ul>
	</div>
*/


$("#tours > li");