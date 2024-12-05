<template>
    <img v-bind:src="avatar" :alt="descricao"> <!-- V-bind e : funcionam da mesma forma (os dois pontos é para ser mais resumido)-->
</template>
<script>

export default {
    name:'Picture',
    data(){
        return {
            avatar: '/img/avatar.png',
            descricao: 'Bruno Theodoro'
        }
    }    
}

</script>