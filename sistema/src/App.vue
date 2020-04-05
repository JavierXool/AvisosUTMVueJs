<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
        <v-list dense>
        <template>
          <v-list-item  :to="{name:'Home'}">
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Inicio
            </v-list-item-title>
          </v-list-item >
        </template>
        <template>
          <v-list-item  :to="{name:'Usuario'}">
            <v-list-item-action>
              <v-icon>android</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Usuarios
            </v-list-item-title>
          </v-list-item >
        </template>

        <template>
          <v-list-item  :to="{name:'EvaluacionDocente'}">
            <v-list-item-action>
              <v-icon>assignment_ind</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Evaluación Docente
            </v-list-item-title>
          </v-list-item >
        </template>
        <template>
          <v-list-item  :to="{name:'Calificaciones'}">
            <v-list-item-action>
              <v-icon>assignment</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              Calificaciones
            </v-list-item-title>
          </v-list-item >
        </template>
        <template>
          <v-list-group>
            <v-list-item  slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Horarios
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Deportes'}">
              <v-list-item-action>
                <v-icon>face</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  DA
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Conferencias'}">
              <v-list-item-action>
                <v-icon>build</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  DI
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Actividades'}">
              <v-list-item-action>
                <v-icon>computer</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  TIC
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>
        </template>

        
        <template>
          <v-list-group>
            <v-list-item  slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  Eventos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Deportes'}">
              <v-list-item-action>
                <v-icon>grade</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Deportes
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Conferencias'}">
              <v-list-item-action>
                <v-icon>accessibility</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Conferencias
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Actividades'}">
              <v-list-item-action>
                <v-icon>extension</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Actividades
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>
        </template>


      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Aplicación Industrial</span>
      </v-toolbar-title>

      <v-spacer />


    </v-app-bar>
    <v-content>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view/>
        </v-slide-y-transition>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      
    }),
  }
</script>
