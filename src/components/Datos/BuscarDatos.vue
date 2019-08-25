<template lang="html">

<div class="container">
    <div class="row">
        <div class="col text-center">
            <h2>Buscar Libro</h2>

        </div>
    </div>

    <div class="row ">
        <div class="col-md-6 col-center ">
            <div class="card">
                <div class="card-body">

                    <form @submit="onSubmit">

                        <div class="form-group row">
                            <label for="title" class="col-sm-2 col-form-label">Titulo</label>

                          <div class="col-sm-9">
                                <input type="text" placeholder="Titulo"  name="title" class="form-control">
                            </div>

                        </div>

                      <div class="rows">
                        <div class="col text-center">
                          <b-button v-on:click="getDatos" variant="primary">Buscar</b-button>
                          <b-button type="submit" class="btn-large-space" :to="{name: 'ListDatos' }">Regresar</b-button>

                        </div>

                      </div>
                      </form>


                </div>




        </div>

          <br>


          <div class="card">
                <div class="card-body">

                    <form @submit="onSubmit">

                        <div class="form-group row">
                            <label for="description" class="col-sm-2 col-form-label">Descripción</label>

                          <div class="col-sm-9">
                                <input type="text" placeholder="Descripcion" name="description" class="form-control" v-model.trim="form.description">
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
            title: this.title,
            form: {
                description: ''

            }
        }
    },

    methods:{
       getDatos(){
            const path = `http://localhost:8000/api/v1.0/datos/${this.title}/`

            axios.get(path).then((response)=>{
                this.form.title = response.data.title,
                this.form.description = response.data.description
            })
                .catch((error)=>{
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

  .col-center{
    float: none;
    margin: 0 auto;
}

</style>
