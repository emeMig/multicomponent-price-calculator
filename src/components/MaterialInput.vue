<template>
    <div>
        <h4 class="title">Opción alternativa</h4>
        <div class="field">
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
            material: 'material-1'
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
