const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Prueva',
        datos: [
            {Datos1: "1s", Datos2: "2s", Datos3: "3s"}
        ],
        nuevoDato1: '',
        nuevoDato2: '',
        nuevoDato3: '',
    },
    methods: {
        agregarDato () {
            this.datos.push({
                Datos1: this.nuevoDato1, Datos2: this.nuevoDato2, Datos3: this.nuevoDato3
            });
            console.log(this.nuevoDato1, this.nuevoDato2, this.nuevoDato3);
        }
    }
})