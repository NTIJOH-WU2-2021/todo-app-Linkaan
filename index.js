const { createApp } = Vue;

const App = {
    name: "App",
    data() {
        return {
            text: "",
            todos: [{
                id: 0,
                text: "exempel"
            }],
            counter: 0,
            doShowComplete: true,
            search: ""
        };
    },
    methods: {
        onAdd() {
            this.todos.push({id: ++this.counter, text: this.text})
        }
    }
};

const app = createApp(App);

app.component('item', {
    name: "Item",
    props: ['todo'],
    data() {
        return {
            done: false
        }
    },
    methods: {
        delTodo() {
            this.$parent.todos = this.$parent.todos.filter(f => f.id != this.todo.id);
        },
        toggleTodo() {
            this.done = !this.done;
        }
    },
    template: `#item-template`
});

app.mount("#app");
