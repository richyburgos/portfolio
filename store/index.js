import { createStore } from "vuex";
import { defineStore } from 'pinia'

// import quotes from './quotes/index'
// import services from './services/index'
// import supportedTechnologies from './supported-technologies/index'
// import memoryGame from './memory-game/index'
import profile from './modules/profile'
const store = () => {
    return new createStore({
        modules: {
            profile
        },
        state: {},
        mutations: {},
        actions: {},
        getters: {}
    })
}

// export default createStore
// const store = createStore({
//     modules: {
//
//         account: {
//             namespaced: true,
//
//             // module assets
//             state: () => ({
//
//             }), // module state is already nested and not affected by namespace option
//             getters: {},
//             actions: {},
//             mutations: {},
//
//             // nested modules
//             modules: {
//                 // inherits the namespace from parent module
//                 myPage: {
//                     state: () => ({}),
//                     getters: {}
//                 },
//
//                 // further nest the namespace
//                 posts: {
//                     namespaced: true,
//                     state: () => ({}),
//                     getters: {}
//                 }
//             }
//         }
//     }
// })
