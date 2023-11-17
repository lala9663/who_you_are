document.querySelector('.search-container button').addEventListener('click', function() {
    var filter = document.querySelector('#search-type').value;
    var input = document.querySelector('.search-container input');
    var filterValue = input.value.toUpperCase();
    var table = document.getElementById('myTable');
    var rows = table.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td')[filter === 'num' ? 0 : filter === 'title' ? 1 : 2];
        if (cells) {
            var txtValue = cells.textContent || cells.innerText;
            if (txtValue.toUpperCase().indexOf(filterValue) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
});


document.getElementById('writePostBtn').addEventListener('click', function() {
    window.location.href = 'https://www.naver.com/';
  });