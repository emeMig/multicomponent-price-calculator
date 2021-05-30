<template>
    <div>        
        <div class="columns">
            <div class="column is-11">
                <h4 class="title">Opción alternativa</h4>
            </div>
            <div class="column">
                <button class="button is-success is-small" @click="show = !show">
                    <i class="fas fa-arrow-down"></i>
                </button>
            </div>
        </div>    
        <div class="field dropper animate__animated animate__slideInDown" v-if="show" >
            <div class="control">
                <label class="radio" v-for="item in materials" v-bind:key="item.name">
                    <input type="radio" name="material" :value="item.name" v-model="material" @change="updateAmount($event.target.value)">
                    {{item.label}}
                </label>
            </div>
        </div>
    </div>    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'MaterialInput',
    data() {
        return {
            material: 'material-1',
            show: false
        }
    },
    methods: {
        ...mapActions(['sumMaterial']),
        updateAmount(materialName){
            this.sumMaterial(this.materials.filter(m => m.name === materialName)[0].amount)
        },
        resetDefault() {
            this.material = 'material-1'
            this.sumMaterial(10)

        }
    },
    computed: {
        ...mapGetters(['materials'])
    }
}
</script>

<style>

</style>
