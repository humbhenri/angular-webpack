const template = require('./todo.html');
console.log(app);

app.component('todo', {
    bindings: {
        newTodoCb: '&'
    },
    template: template,
    controller: function() {
        this.submit = form => {
            console.log(this.input);
            this.newTodoCb({ todo: this.input });
            this.input = '';
            form.$setPristine();
            form.$setUntouched();
        };
    }
});
