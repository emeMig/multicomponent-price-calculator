import Vue from 'vue';
import Vuex from 'vuex';
import products from './products'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        sumProducts: {
            material: 10,
            texture: 0,
            extras: 0,
            custom: 0
        },
        products
    },
    mutations: {
        SUM_MATERIAL (state, payload) {  
            state.sumProducts.material = payload         
        },
        SUM_TEXTURE (state, payload) {  
            state.sumProducts.texture = payload         
        },
        SUM_EXTRAS (state, payload) {  
            state.sumProducts.extras = payload         
        },
        SUM_CUSTOM (state, payload) {  
            state.sumProducts.custom = payload         
        }
    },
    actions: {
        sumMaterial(context,amount) {
            context.commit('SUM_MATERIAL', amount)
        },
        sumTexture(context,amount) {
            context.commit('SUM_TEXTURE', amount)
        },
        sumExtras(context,amount) {
            context.commit('SUM_EXTRAS', amount)
        },
        sumCustom(context,amount) {
            context.commit('SUM_CUSTOM', amount)
        },
    },
    getters: {
        materials(state) {
            return state.products.materials
        },
        textures(state) {
            return state.products.textures
        },
        extras(state) {
            return state.products.extras
        },
        customOption(state) {
            return state.products.customOption
        },
        sumProducts(state) {
            return state.sumProducts
        },
        getDefaultData(state) {
            return state.defaultData
        }
    },
})