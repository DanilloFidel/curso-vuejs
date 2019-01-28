new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('hahahah');
        },
        recuperaValor(e){
            this.valor = e.target.value;
        }
    }
})