<template>
    <section class="section">
        <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">

                <steps></steps>

                <header class="bd-header">
                    <div class="bd-header-titles">
                        <h1 class="title">
                            Calculadora Multicomponente
                        </h1>
                        <p class="subtitle is-4">
                            Calculo automático del precio a traves de distintos componentes de selección
                        </p>
                    </div>
                </header>

                <material-input ref="material" class='bloque'></material-input>

                <texture-input ref="texture" class='bloque'></texture-input>
        
                <extra-input ref="extras" class='bloque'></extra-input>
                
                <h4 class="title">Opción customizable</h4>
                <div class="field is-grouped is-grouped-center">
                    <span class="control">
                        <label class="checkbox" for="gift">
                            <input type="checkbox" name="gift" v-model="gift">
                            Marcar opción customizable
                        </label>
                    </span>
                </div>

                <div class="field" v-if="isGifted">
                    <label class="label" for="gift-message">Introducir mensaje</label>
                    <div class="control">
                        <textarea class="textarea" name="gift-message" placeholder="Mensaje opción unitaria" v-model="giftMessage"></textarea>
                    </div>
                </div>

                <h3 class="title is-2">Total: {{ calculeTotal }} <span></span> €</h3>
        

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-success " v-on:click="sendCalc">Enviar</button>
                    </div>
                    <div class="control">
                        <button class="button is-info" v-on:click="resetCalc">Reiniciar</button>
                    </div>
                </div>
        

            </div>
        </div>


    </section>
</template>

<script>


import MaterialInput from './MaterialInput'
import ExtraInput from './ExtraInput'
import TextureInput from './TextureInput'
import Steps from './Steps'
import { mapGetters } from 'vuex'

export default {
  name: 'Calculator',
  components: {
    MaterialInput,
    ExtraInput,
    TextureInput,
    Steps
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
    border-radius: 5px;
    background-color: #ddd;
}

.bloque {
  margin: 40px 0
}

.head{
    margin: 0px !important;
    margin-bottom: 2rem;
    padding: 5px 10px;
    background-color: #23D160;
    border-radius: 5px;
    position: relative;
    z-index: 1
}

.head h4 {
  color:white;
}

.dropper {
  animation-duration: .6s;
  margin-top: 15px !important;
}

@keyframes slideInDown {
    0% {
      transform: translate3d(0, -70%,0)
    }
  }
</style>