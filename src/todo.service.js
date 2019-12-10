app.service('TodoService', function() {
    this.save = todo => {
        this.todos = this.todos || [];
        this.todos.push(todo);
        return Promise.resolve();
    };

    this.list = () => {
        return Promise.resolve(this.todos);
    };
});
