const MyNameApp = {
    data() {
        return {
            name: '',
            idade: 26,
            input_name: ''
        }
    }, //methods é onde fica as funções da aplicação
    methods: {
        submitForm(e) {
            e.preventDefault();
            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount('#app') 