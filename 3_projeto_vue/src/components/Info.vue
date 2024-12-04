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
    </div>
</template>
<script>
    export default{
        name:'Info',
        data(){
            return{
                esta_trabalhando: false,
                mostrar_email:true ,
                email:'bruno@email.com'
            }
        }
    }
</script>
