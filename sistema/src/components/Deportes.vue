<template>
    <v-layout align-start>
        <v-flex>
            <v-data-table :headers="headers" :items="deportes" sort-by="calories" class="elevation-1">
            <template v-slot:item.urlImagen="{ item }">
            <div class="p-2">
              <v-img :src="item.urlImagen" :alt="item.urlImagen" height="40px" width="40"></v-img>
            </div>
          </template>
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>Deportes</v-toolbar-title>
                <v-divider
                  class="mx-4"
                  inset
                  vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-text-field class="text-xs-center" v-model="search" append-icon="search" label="Búsqueda" single-line hide-details></v-text-field>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark class="mb-2" v-on="on">Nuevo</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.titulo" label="Titulo"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-img :src="editedItem.urlImagen" ></v-img>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.lugarEvento" label="Lugar"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.organiza" label="Organiza"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.para" label="Para"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.fecha" label="Fecha"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.hora" label="Hora"></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.opciones="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>

        </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      deportes:[],
      dialog: false,
      headers: [
        {
          text: 'Titulo',
          align: 'start',
          sortable: false,
          value: 'titulo',
        },
        { text: 'Imagen', value: 'urlImagen', sortable:false },
        { text: 'Lugar', value: 'lugarEvento',sortable:false },
        { text: 'Organiza', value: 'organiza' },
        { text: 'Para', value: 'para' },
        { text: 'Fecha', value: 'fecha' },
        { text: 'Hora', value: 'hora' },
        { text: 'Opciones', value: 'opciones', sortable: false },
      ],
      search: '',
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Deporte' : 'Editar Deporte'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
      this.initialize()
      this.listar();
    },
    methods: {
      listar()
      {
        let me=this;
        axios.get('api/Eventos/Listar').then(function(response)
        {
          me.deportes=response.data;
        }).catch(function(error)
        {
          console.log(error);
        });
      },
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Estas seguro de Eliminar este Elemento?') && this.desserts.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
