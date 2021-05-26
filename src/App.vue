<template>
    <section class="section" id="app">
        <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">

                <header class="bd-header">
                    <div class="bd-header-titles">
                        <h1 class="title">
                            Personalizador de pajaritas
                        </h1>
                        <p class="subtitle is-4">
                            Tu pajarita al mejor precio 
                        </p>
                    </div>
                </header>

                <material-input ref="material"></material-input>

                <texture-input ref="texture"></texture-input>
        
                <extra-input ref="extras"></extra-input>
                
                <h4 class="title">Regalo</h4>
                <div class="field is-grouped is-grouped-center">
                    <span class="control">
                        <label class="checkbox" for="gift">
                            <input type="checkbox" name="gift" v-model="gift">
                            ¿Es para regalo?
                        </label>
                    </span>
                </div>

                <div class="field" v-if="isGifted">
                    <label class="label" for="gift-message">Mensaje de regalo</label>
                    <div class="control">
                        <textarea class="textarea" name="gift-message" placeholder="Mensaje para el regalo" v-model="giftMessage"></textarea>
                    </div>
                </div>

                <h3 class="title is-3">Total: {{ calculeTotal }} <span></span> €</h3>
        

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" v-on:click="sendCalc">Enviar</button>
                    </div>
                    <div class="control">
                        <button class="button is-text" v-on:click="resetCalc">Reiniciar</button>
                    </div>
                </div>
        

            </div>
        </div>


    </section>
</template>

<script>


import MaterialInput from './components/MaterialInput'
import ExtraInput from './components/ExtraInput'
import TextureInput from './components/TextureInput'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    MaterialInput,
    ExtraInput,
    TextureInput
  },
  data() {
    return {
      gift: false,
      giftMessage: null
    }
  },
  methods: {
    sendCalc: function() {
      // eslint-disable-next-line
      console.log('SendCalc!');
    },
    resetCalc: function() {
      this.$refs.material.resetDefault()
      this.$refs.texture.resetDefault()
      this.$refs.extras.resetDefault()
      this.gift = false
      this.giftMessage = null
    },
    getPrices: function(attribute) {
      const prices = {
        gift: 7.5
      };
      return prices[attribute];
    }
  },
  computed: {
    ...mapGetters(['sumProducts']),
    calculeTotal: function() {
      let totalAmount = 0;
      for( const prop in this.sumProducts) {
        totalAmount += this.sumProducts[prop]
      }
      totalAmount += this.gift ? this.getPrices('gift') : 0
      return totalAmount.toFixed(2).replace('.' , ',')
    },
    isGifted: function() {
      return !!this.gift;
    },
  }
}
</script>

<style>
.bd-header {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #ddd;
}
</style>
