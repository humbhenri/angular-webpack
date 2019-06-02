import template from './main.html';
app.component('mainComponent', {
    template: template,
    controller: function() {
        this.saveTodo = todo => {
            this.todos = this.todos || [];
            this.todos.push(todo);
        };
    }
});
