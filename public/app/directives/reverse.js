angular.module('reverseDirective', [])  // This is use to create new directives

.filter('reverse', function(){

    return function(items) {
        return items.slice().reverse(); //in built method in js to reverse the order of array.
    }
});