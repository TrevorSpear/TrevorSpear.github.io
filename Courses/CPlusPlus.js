/**
 * Created by TrevorSpear on 6/17/17.
 */



function CPlusPlus_display() {
    var Display = '<h2>Basics to C++</h2><hr>';
        Display +='<h5>This course is suppose to teach someone that has no knowledge in C++</h5>';
        Display +='<h3>Table of Contents</h3>';
        Display +='Something';

        Display +='<h4>Types</h4>';
        Display +='<h6>There are many types in C++ like:</h6>';

        Display +='<h5>Common</h5>';
        Display +='<h6>String: Array of characters</h6>';
        Display +='<h6>char: One single character</h6>';
        Display +='<h6>int: A whole number</h6>';
        Display +='<h6>float: an int that can be a decimal number</h6>';
        Display +='<h6>boolean: True or False</h6>';

        Display +='<h6>Uncommon</h6>';
        Display +='<h6>void: Can be anything! Absence of types! (But very dangerous to use and highly recommended <b>NOT</b> to use)</h6>';
        Display +='<h6>long: Really big int</h6>';
        Display += '<h6>There are so many more types because it is C++ gives you free range, but for the basic to intermediate one will never use</h6>';


    document.getElementById("CPlusPlus").innerHTML = Display;
}