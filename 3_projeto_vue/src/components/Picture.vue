<template>
    <div>
        <img v-bind:src="avatar" :alt="descricao"> <!-- V-bind e : funcionam da mesma forma (os dois pontos é para ser mais resumido)-->
        <MudarImagem @mudar-imagem='trocarImagem' />
    </div>
</template>
<script>
import MudarImagem from './MudarImagem.vue'

export default {
    name:'Picture',
    components:{
        MudarImagem
    },
    data(){
        return {
            avatar: '/img/avatar.png',
            descricao: 'Bruno Theodoro'
        }
    } ,
    methods: {
        trocarImagem() {
            this.avatar = '/img/avatar2.png'
        }
    } 
}

</script>