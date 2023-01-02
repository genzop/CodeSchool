/*2.7 The :even Selector
Part of our design wishlist is to add row striping to our list. We could do this with CSS, but doing it with JavaScript also sounds fun. Within our #tours list, find the direct children li elements, and then use the :even pseudo selector to select every other li element.

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

$("#tours > li:even");