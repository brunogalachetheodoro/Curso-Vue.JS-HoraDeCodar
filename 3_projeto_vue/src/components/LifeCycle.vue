<template>
    <div>
        <h1>Meu nome é: {{nome}}</h1>
    </div>
    
</template>

<script>
export default {
    name: 'LifeCycle',
    teste:'testando',
    data() {
        return {
        nome: 'Ainda não sei'
        }
    },
    created() {
        setTimeout(()=>{
            this.nome = 'Bruno'
        },2000)
    }, 
    mounted() {
       setTimeout(()=>{
            this.nome = 'João'
        },4000)
    },
}
</script>
