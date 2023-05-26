// state
const state = () => ({
    yearsOfExperience: 0,
    startOfExperience: '2016-06-01'
})
// getters
const getters = {
    startOfExperience(state){
        return state.startOfExperience
    }
}
// actions
const actions = {

    getYearsOfExperience(context) {
        const start = new Date(context.getters['startOfExperience']);

        const yearsDiff = this.currentDate.getFullYear() - start.getFullYear();
        const monthsDiff = this.currentDate.getMonth() - start.getMonth();

        let duration = "";

        if (yearsDiff > 0) {
            duration += yearsDiff + (yearsDiff === 1 ? " Year " : " Years ");
        }

        if (monthsDiff > 0) {
            duration += monthsDiff + (monthsDiff === 1 ? " Month" : " Months");
        }

        context.commit('setYearsOfExperience')
        // return duration.trim();
    },
}

// mutations
const mutations = {
    setYearsOfExperience(state, payload){
        state.yearsOfExperience = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    // modules: {
    //     nested
    // }
}
