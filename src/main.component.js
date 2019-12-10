import template from './main.html';
app.component('mainComponent', {
    template: template,
    controller: function(TodoService) {
        this.$onInit = () => {
            this.listTodos();
        };

        this.saveTodo = todo => {
            TodoService.save(todo).then(this.listTodos());
        };

        this.listTodos = () =>
            TodoService.list().then(todos => (this.todos = todos));
    }
});
