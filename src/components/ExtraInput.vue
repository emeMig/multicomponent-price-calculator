<template>
  <div>
    <head-title text="Multiopción" @showChange="show = !show" />
    
    <div class="field dropper is-grouped is-grouped-center animate__animated animate__slideInDown" v-if="show" >
      <ul>
        <li class="control" v-for="item in extras" v-bind:key="item.name">
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeadTitle from './HeadTitle'

export default {
  name: "ExtraInput",
  components: {
    HeadTitle
  },
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
