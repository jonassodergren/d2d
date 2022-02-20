
var container = document.getElementById('links');

function search(searchTerm) {
  var results = idx.search("title:"+searchTerm);
  show(results);
}

function show(result){
container.innerHTML = '';
result.forEach(function(hit) {
    var html = ht.get(hit.ref);
    container.insertAdjacentHTML('beforeend', html);
  });

}
