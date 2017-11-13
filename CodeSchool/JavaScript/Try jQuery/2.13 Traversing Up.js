/*2.13 Traversing Up
You need to add some effects to all featured vacations, but there is a problem, only titles have the .featured class. You don't flinch, since you know how to traverse. Using traversal, select all tours that have a .featured class on their title by getting the parent() of featured titles.

 	<div id="tours-wrapper">
  		<h1>Guided Tours</h1>
  		<ul id="tours">
    		<li class="usa">
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
      			<h2 class="featured">Madrid, Spain</h2>
      			<span class="details">$1,577 for 5 nights</span>
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

$(".featured").parent();

