<template>
    <div>
        <div class="columns head">
            <div class="column is-11">
                <h4 class="title is-4">{{ text }}</h4>
            </div>
            <div class="column">
                <button class="button is-success is-inverted" @click="showChange">
                    <i :class="arrowShow"></i>
                </button>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'HeadTitle',
    data() {
        return {
            show: false
        }
    },
    props: {
        text: String,
    },
    methods: {
        showChange(){
            this.show = !this.show
            this.$emit('showChange')
        }
    },
    computed: {
        arrowShow() {
            if (!this.show) return 'fas fa-arrow-down'
            return 'fas fa-arrow-up'
        }
    }    
}
</script>

<style>

</style>