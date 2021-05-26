<template>
  <div>
    <h4 class="title">Extras</h4>
    <div class="field is-grouped is-grouped-center">
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
      extra: []
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
