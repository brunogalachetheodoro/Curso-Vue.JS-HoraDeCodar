<template>
    <div>
        <button @click="primeiro($event), segundo(txt1, $event)">Ativar Múltiplos Eventos</button>
        <p>{{multiplos_eventos}}</p>
    </div>
</template>

<script>
export default {
    name: 'MultiplosEventos',
    data(){
        return{
            multiplos_eventos:'',
            txt1:'Segundo Evento'
        }
    },
    methods: {
        primeiro(e){
            this.multiplos_eventos = 'Primeiro Evento Ativado'
        }, 
        segundo(txt, e){
            setTimeout(()=>this.multiplos_eventos = txt,500)
        }
    }
}
</script>
<style scoped>
    div{
        margin: 100px;
    }
</style>