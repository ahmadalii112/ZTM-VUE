const app = Vue.createApp({
    data() {
        return {
            firstname : "Ahmad",
            lastname : "Ali",
        }
    },

}).mount('#app');

setTimeout(() => {
    app.lastname = 'Aiman'
}, 2000)

/* const app1 = Vue.createApp({
    data() {
        return {
            firstname : "Aiman",
            lastname : "Jehanzaib",
        }
    },

}).mount('#app1'); */