<template>
  <div>
    <div class="columns">
      <div class="column is-11">
          <h4 class="title">MultiOpción</h4>
      </div>
      <div class="column">
          <button class="button is-success is-small" @click="show = !show">
              <i class="fas fa-arrow-down"></i>
          </button>
      </div>
    </div> 
    <div class="field dropper is-grouped is-grouped-center animate__animated animate__slideInDown" v-if="show" >
      <span class="control" v-for="item in extras" v-bind:key="item.name">
        <label class="checkbox" :for="item.name">
          <input
            type="checkbox"
            :name="item.name"
            :value="item.name"
            v-model="extra"
            @change="updateAmount"
          />
          {{item.label}}
        </label>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "ExtraInput",
  data: function() {
    return {
      extra: [],
      show: false
    };
  },
  methods: {
    ...mapActions(['sumExtras']),
    updateAmount: function() {
      let totalExtras = 0
      this.extra.forEach( e => 
        totalExtras += this.extras.find(elem => elem.name === e).amount 
      )
      this.sumExtras(totalExtras)
    },
    resetDefault(){
        this.extra = []
        this.sumExtras(0)
    }  
  },
  computed: {
    ...mapGetters(['extras'])
  }
};
</script>

<style>
</style>
