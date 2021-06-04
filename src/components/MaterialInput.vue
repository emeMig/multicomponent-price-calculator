<template>
    <div>        
        <head-title text="Opcion Alternativa" @showChange="show = !show" />
        <div class="field dropper animate__animated animate__slideInDown" v-if="show" >
            <div class="control">
                <ul>
                    <li v-for="item in materials" v-bind:key="item.name">
                        <label class="radio" >
                            <input type="radio" name="material" :value="item.name" v-model="material" @change="updateAmount($event.target.value)">
                            {{item.label}} 
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeadTitle from './HeadTitle'
export default {
    name: 'MaterialInput',
    components: {
        HeadTitle
    },
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
