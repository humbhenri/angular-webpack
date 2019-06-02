import template from './todoList.html';
app.component('todoList', {
    bindings: {
        list: '<'
    },
    template: template
});
