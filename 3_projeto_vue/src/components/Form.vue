<template>
    <form action="">

            <InputText /><br>
            <InputText /><br>
            <Submit />
    </form>    
</template>

<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    }
}
</script>
