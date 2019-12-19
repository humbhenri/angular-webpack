app.service('TodoService', function() {
    this.save = todo => {
        this.todos = this.todos || [];
        this.todos.push({ text: todo, id: this.nextId() });
        return Promise.resolve();
    };

    this.list = () => {
        return Promise.resolve(this.todos);
    };

    this.id = 0;
    this.nextId = () => this.id++;
});
