
var toDos =[];



function getAllTodos() {
  return toDos;
}

function addTodos(newPost){
toDos.push(newPost);
}

function deleteToDos(idx){
  toDos.splice(idx, 1);
}

function editToDos (idx, newPost){
  toDos.splice(idx, 1, newPost);

}

function addItemsToDom(data, templateStr, $target){
  var tmpl=_.template(templateStr);
  $target.append(tmpl(data));
}

function addAllToDos() {
  $('section').html('');

  _.each(getAllTodos(), function(el, idx){
    el.idx = idx;
    addItemsToDom(el, templates.toDos, $('section'));
  });
}

function getToDos(){
  var content = $('input[name="todo-item"]').val();
  return{
    content: content
  }
}


$(document).ready(function () {
  addAllToDos(toDos);

  $('form').on('submit' , function (event){
    event.preventDefault();
    var newToDo = getToDos();
    addTodos(newToDo);
    addAllToDos(getToDos());
    $('input').val('');
  });

$('section').on('click', '.delete', function(event){
  var idx =$(this).closest('article').data('idx');
  deleteToDos(idx);
  addAllToDos(getToDos());
});

$('section').on()

});
