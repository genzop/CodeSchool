/*1.11 Modifying Multiple Elements
Did you know it's possible to change the text of multiple elements at once? Let's give it a try. Change all of the vacation titles to something different (your choice) by selecting the h2 elements and using the text() method.

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

$("h2").text("Mendoza, Argentina");
