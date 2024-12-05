<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{nome}}</h2>
        <p v-if='esta_trabalhando'>Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Vue.JS</li>
        </ul>
        <p v-show='mostrar_email'>Mande uma mensagem para: <strong>{{email}}</strong></p>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
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
                mostrar_email:true ,
                email:'bruno@email.com',
                meu_link: '//www.globoesporte.com/saopaulo'
            }
        }
    }
</script>
