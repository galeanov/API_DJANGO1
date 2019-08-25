import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListDatos from '@/components/Datos/ListDatos'
import EditDatos from '@/components/Datos/EditDatos'
import DeletDatos from '@/components/Datos/DeletDatos'
import NuevoDatos from '@/components/Datos/NuevoDatos'





Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/datos',
      name: 'ListDatos',
      component: ListDatos
    },
    {
      path: '/datos/:datoId',
      name: 'EditDatos',
      component: EditDatos
    },
    {
      path: '/datos/:datoId/deletei',
      name: 'DeletDatos',
      component: DeletDatos
    },
    {
      path: '/datos/new',
      name: 'NuevoDatos',
      component: NuevoDatos
    },





  ],
  mode: 'history'
})
