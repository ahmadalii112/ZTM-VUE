const app = Vue.createApp({
    data() {
        return {
            firstname : "Ahmad",
            lastname : "Ali",
        }
    },
    methods: {
        fullName() {
            return `${this.firstname} ${this.lastname.toUpperCase()}`;
        }
    },

}).mount('#app');

// Proxy console.log(app); 
// setTimeout(() => {
//     app.lastname = 'Aiman'
// }, 2000)

/* const app1 = Vue.createApp({
    data() {
        return {
            firstname : "Aiman",
            lastname : "Jehanzaib",
        }
    },

}).mount('#app1'); */