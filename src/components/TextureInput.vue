<template>
  <div>
    <h4 class="title">Opción visual</h4>
    <div class="columns is-mobile">
      <div class="column is-one-quarter">
        <div class="field">
          <div class="control">
            <div class="select">
              <select name="texture" v-model="texture" @change="updateAmount($event.target.value)">
                <option
                  v-for="item in textures"
                  v-bind:key="item.name"
                  :value="item.name"
                >{{item.label}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <figure class="image">
          <img :src="getTextureImage" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "TextureInput",
  data: function() {
    return {
      texture: "texture-0",
      image: ""
    };
  },
  methods: {
      ...mapActions(['sumTexture']),
      updateAmount: function(selected) {
          const amount = this.textures.filter(texture => texture.name == selected)[0].amount;
          this.sumTexture(amount) 
      },
      resetDefault(){
        this.texture = 'texture-0'
        this.sumTexture(0)
      }    
  },
  computed: {
    ...mapGetters(['textures']),
    getTextureImage: function() {
      if (this.texture == "texture-1") return "img/red.jpg";
      if (this.texture == "texture-2") return "img/orange.jpg";
      return "";
    }
  }
}

</script>

<style>
</style>
