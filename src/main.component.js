import template from './main.html';
import './message.service';

app.component('mainComponent', {
    template: template,
    controller: function(TodoService, MessageService) {
        this.$onInit = () => {
            this.listTodos();
        };

        this.saveTodo = todo => {
            TodoService.save(todo)
                .then(
                    MessageService.setMessage({
                        msg: 'TODO saved',
                        msgType: 'alert-success'
                    })
                )
                .then(this.listTodos());
        };

        this.listTodos = () =>
            TodoService.list().then(todos => (this.todos = todos));

        this.msgService = MessageService;
    }
});
