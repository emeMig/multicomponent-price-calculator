<template>
    <section class="section">
        <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">

                <steps id="steps-bar"></steps>

                <header class="bd-header">
                    <div class="bd-header-titles">
                        <h1 class="title is-4">
                            Calculadora Multicomponente
                        </h1>
                        <p class="subtitle is-5">
                            Calculo automático del precio de producto mediante componentes con distintas opciones de selección
                        </p>
                    </div>
                </header>

                <material-input ref="material" class='bloque' />

                <texture-input ref="texture" class='bloque' />
        
                <extra-input ref="extras" class='bloque' />

                <custom-input ref="custom" class="bloque" />
                
                <!-- <h4 class="title is-4 mt-6">Opción customizable</h4>
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
                </div> -->

                <h3 class="title is-3 totalPrice">Total: {{ calculeTotal }} <span></span> €</h3>
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
import CustomInput from'./CustomInput'
import Steps from './Steps'

import { mapGetters } from 'vuex'

export default {
  name: 'Calculator',
  components: {
    MaterialInput,
    ExtraInput,
    TextureInput,
    CustomInput,
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
      this.$refs.custom.resetDefault()
    }
  },
  computed: {
    ...mapGetters(['sumProducts']),
    calculeTotal: function() {
      let totalAmount = 0;
      for( const prop in this.sumProducts) {
        totalAmount += this.sumProducts[prop]
      }
      // totalAmount += this.gift ? this.getPrices('gift') : 0
      return totalAmount.toFixed(2).replace('.' , ',')
    },
    // isGifted: function() {
    //   return !!this.gift;
    // },
  }
}
</script>

<style>
#steps-bar {
  margin-bottom: 3rem;
}
.bd-header {
    margin-bottom: 3rem;
    padding: 1rem;
    border-radius: 5px;
    background-color: #ddd;
}

.bloque {
  margin: 20px 0
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
      transform: translate3d(0, -50%,0)
    }
  }

.totalPrice {
  margin-top: 3rem
}  
</style>