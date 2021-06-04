<template>
    <div>

        <head-title text="Opcion Customizable" @showChange="show = !show" />

        <div class="field dropper is-grouped is-grouped-center animate__animated animate__slideInDown" v-if="show" >
            <span class="control">
                <label class="checkbox" for="custom">
                    <input type="checkbox" name="custom" v-model="custom" @change="updateAmount">
                    Marcar opción customizable (El precio es de €{{ this.customOption.price }})
                </label>
            </span>
        </div>
        <div class="field" v-if="isCustom">
            <label class="label" for="custom-message">Introducir mensaje</label>
            <div class="control">
                <textarea class="textarea" name="custom-message" placeholder="Mensaje opción customizada" v-model="customMessage"></textarea>
            </div>
        </div>
    </div>
                  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeadTitle from './HeadTitle'

export default {
    name: 'CustomInput',
    components: {
        HeadTitle
    },
    data() {
        return {
            show: false,
            custom: false,
            customMessage: null
        }
    },

    methods: {
        ...mapActions(['sumCustom']),
        resetDefault(){
            this.custom = false
            this.customMessage = null
        },
        updateAmount(){
            this.custom 
                ? this.sumCustom(this.customOption.price)
                : this.sumCustom(0)
        }  
    },

    computed: {
        ...mapGetters(['customOption']),
        isCustom: function() {
            return !!this.custom;
        },
    },
}
</script>

<style>

</style>