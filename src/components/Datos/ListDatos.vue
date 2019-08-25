<template lang="html">

<div class="container">
    <div class="row">
        <div class="col text-left">
          <div class="">
            <h2>Listado de libros</h2>
            <b-button size="sm" :to="{name: 'NuevoDatos'}" variant="primary">Nuevo Libro</b-button>

          </div>

          <br>
            <div class="col-md-12">
                <b-table striped hover :items="datos" :fields="fields">

                    <template slot="action" slot-scope="data">
                        <b-button size="sm" variant="primary" :to="{ name:'EditDatos', params: {datoId: data.item.id_ticket}}">
                        Editar
                        </b-button>
                        <b-button size="sm" variant="danger" :to="{ name:'DeletDatos', params: {datoId: data.item.id_ticket}}">
                        Eliminar
                        </b-button>

                    </template>

                </b-table>

            </div>

            </div>
        </div>
    </div>


</template>

<script>

import axios from 'axios';


export default{
    data () {
        return {
            fields: [
                { key: 'tk_nombre_apellido', label: 'Nombres'},
                { key:'tk_edad', label: 'Edad'},
                { key:'tk_profesion', label: 'Profesion'},
                { key:'tk_dni', label: 'DNI'},
                { key:'action', label: ''}

            ],
            datos: []
        }
    },

    methods: {
        getDatos(){
            const path = 'http://10.40.85.77:8000/api/ticket'
            axios.get(path).then((response) => {
                this.datos = response.data
            } )
            .catch((error) => {
                console.log(error)
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
