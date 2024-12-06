<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{nome}}</h2>
        <p v-if='esta_trabalhando'>Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Utilizo as seguintes tecnologias para back-end:</p>
         <ul>
            <li v-for='(technology, index) in backend_tec' v-bind:key="index">{{technology}}</li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end:</p>
        <ul>
            <li v-for="technology in front_tec" :key='technology.id'> {{technology.language}} </li>
        </ul>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show='mostrar_email'>Mande uma mensagem para: <strong>{{email}}</strong></p>
        <p class="color-email">Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
        <Picture/>
    </div>
</template>
<script>
import Picture from './Picture.vue'
    export default{
        name:'Info',
        components:{
            Picture
        },
        data(){
            return{
                esta_trabalhando: false,
                mostrar_email: false ,
                email:'bruno@email.com',
                meu_link: '//www.globoesporte.com/saopaulo',
                textoBotao: 'Mostrar e-mail',
                backend_tec:['JavaScript','PHP','Phyton'],
                front_tec:[
                    {id: 1, language:'HTML'},
                    {id: 2, language:'CSS'},
                    {id:3, language:'JavaScript'}
                ]
            }
        },
        methods: {
            showEmail(){
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email) {
                    this.textoBotao = 'Mostrar e-mail'
                } else {
                    this.textoBotao = 'Ocultar e-mail'
                }
            }
        }
    }
</script>
