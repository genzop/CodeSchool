/*2.11 Using last()
As you are looking through your code, you notice that someone else is selecting the last vacation with $("#vacations li:last"). You can refactor this code to find the last li within #vacations using traversal instead.

	<div id="vacations-wrapper">
		<h1>Vacation Packages</h1>
  		<ul id="vacations">
    		<li class="vacation america">
      			<h2>San Francisco, California</h2>
      			<span class="details">$700</span>
    		</li>
    		<li class="vacation america">
      			<h2>Washington DC, District of Columbia</h2>
      			<span class="details">$400</span>
    		</li>
    		<li class="vacation europe">
      			<h2>London, England</h2>
      			<span class="details">$1,100</span>
    		</li>
    		<li class="vacation asia">
      			<h2>Shanghai, China</h2>
      			<span class="details">$1,200</span>
    		</li>
  		</ul>
   
  		<ul class="sorting">
    		<li><a href="#">America</a></li>
    		<li><a href="#">Europe</a></li>
    		<li><a href="#">Asia</a></li>
  		</ul>
	</div>
*/

$("#vacations li").last();