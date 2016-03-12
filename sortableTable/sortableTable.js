/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  // TODO: your code here!

$(document).ready(function() { 
   // $("#myTable").tablesorter();  // <-- 'myTable' is the id of your table   
   // Select elements to change
   var $tbody = $('tbody');
   var $rows = $tbody.children();

   // Get values from el + col index
   var getCellValue = function(rowE1, colIx){
    var td = rowE1.children[colIx];
    return $(td).text();
   };

   // Determine where value is string or number
   var getType = function(colIx) {
    var val = getCellValue($rows[0], colIx);
    return isNaN(val) ? 'srting' : 'number';
   };

   //Sort colum when table header clicked
   $('th').on('click', function(e) {
      var colIx = $(this).index();
      var type = getType(colIx);

      // detac rows and sort them by cell value
      // Detach is important because it prevent us from losing any listeners
      // We detach the element from its parent
      $rows.detach().sort(function (row1, row2) {
        var value1 = getCellValue(row1, colIx);
        var value2 = getCellValue(row1, colIx);
        if (type === 'string') return value1 > value2;
        if (type === 'number') return value1 - value2;
       })

      // append sorted rows back onto body
      $tbody.append($rows);
    });
}); // End of Document Ready

});

