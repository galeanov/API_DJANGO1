<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>¿Estas seguro que deseas eliminar este registro?</h3>
        <p>Nombres y Apellidos : {{ this.element.tk_nombre_apellido}}</p>
        <p>Edad : {{ this.element.tk_edad}}</p>
        <p>Profesion : {{ this.element.tk_profesion}}</p>
        <p>DNI : {{ this.element.tk_dni}}</p>
      </div>
    </div>

    <div class="row">
      <div class="col">

        <b-button v-on:click="deleteDatos" variant="danger">Eliminar

        </b-button>

      </div>

    </div>
  </div>
</template>

<script>

    import axios from 'axios'
    import swal from 'sweetalert'

export default{
    data () {
        return {
            datoId: this.$route.params.datoId,
            element: {
                tk_nombre_apellido: '',
                tk_edad: '',
                tk_profesion: '',
                tk_dni:''
            }
        }
    },

    methods:{
        getDatos(){
            const path = `http://localhost:8000/api/ticket/${this.datoId}`;

            axios.get(path).then((response)=>{
                this.element.tk_nombre_apellido = response.data[0].tk_nombre_apellido;
                this.element.tk_edad = response.data[0].tk_edad;
                this.element.tk_profesion = response.data[0].tk_profesion;
                this.element.tk_dni = response.data[0].tk_dni;
            })
                .catch((error)=>{
                    console.log(error);
                })
        },

        deleteDatos(){
            const path = `http://localhost:8000/api/tickets_delete/${this.datoId}`;

            axios.delete(path).then((response)=> {
                location.href = '/datos';
            })
                .catch((error)=>{
                    swal("No es posible eliminar el REGISTRO", "", "error");

                })



        }
    },

    created(){
        this.getDatos()
    }

}
</script>

<style lang="css" scoped>

</style>
