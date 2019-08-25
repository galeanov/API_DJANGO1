<template lang="html">

<div class="container">
    <div class="row">
        <div class="col text-left">
            <h2>Editar Datos</h2>

        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">

                    <form @submit="onSubmit">


                        <div class="form-group row">
                            <label for="tk_nombre_apellido" class="col-sm-2 col-form-label">Nombres y Apellidos</label>

                          <div class="col-sm-6">
                                <input type="text" placeholder="Titulo" name="tk_nombre_apellido" class="form-control" v-model.trim="form.tk_nombre_apellido">
                            </div>

                        </div>

                      <div class="form-group row">
                            <label for="tk_edad" class="col-sm-2 col-form-label">Edad</label>

                          <div class="col-sm-6">
                                <input type="text" placeholder="Edad" name="tk_edad" class="form-control" v-model.trim="form.tk_edad" >
                            </div>

                        </div>
                      <div class="form-group row">
                            <label for="tk_profesion" class="col-sm-2 col-form-label">Profesion</label>

                          <div class="col-sm-6">
                                <input type="text" placeholder="Profesión" name="tk_profesion" class="form-control" v-model.trim="form.tk_profesion" >
                            </div>

                        </div>
                      <div class="form-group row">
                            <label for="tk_dni" class="col-sm-2 col-form-label">Descripcion</label>

                          <div class="col-sm-6">
                                <input type="text" placeholder="DNI" name="tk_dni" class="form-control" v-model.trim="form.tk_dni" >
                            </div>

                        </div>


                      <div class="rows">
                        <div class="col text-left">
                          <b-button type="submit" variant="primary">Editar</b-button>
                          <b-button type="submit" class="btn-large-space" :to="{name: 'ListDatos' }">Cancelar</b-button>

                        </div>

                      </div>
                      </form>
                </div>

        </div>
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
            form: {
                tk_nombre_apellido: '',
                tk_edad: '',
                tk_profesion: '',
                tk_dni:''
            }
        }
    },

    methods:{
        onSubmit(evt){
            evt.preventDefault()

            const path = `http://10.40.85.77:8000/api/ticket_update/${this.datoId}`

            axios.put(path, this.form).then((response)=>{
                this.form.tk_nombre_apellido = response.data.tk_nombre_apellido;
                this.form.tk_edad = response.data.tk_edad;
                this.form.tk_profesion = response.data.tk_profesion;
                this.form.tk_dni = response.data.tk_dni;

                swal({
                    title: "Datos actualizado existosamente!",
                    text: "",
                    icon: "success"
                }).then(function() {
                    window.location.href = '/datos'
                });


            }).catch((error)=>{
                    console.log(error)
            })

        },

        getDatos(){
            const path = `http://10.40.85.77:8000/api/ticket/${this.datoId}`

            axios.get(path).then((response)=>{

                this.form.tk_edad = response.data[0].tk_edad
                this.form.tk_nombre_apellido = response.data[0].tk_nombre_apellido
                this.form.tk_profesion = response.data[0].tk_profesion
                this.form.tk_dni = response.data[0].tk_dni
console.log(response.data)
            }).catch((error)=>{
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
