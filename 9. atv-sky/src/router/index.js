import { createRouter, createWebHistory } from 'vue-router';
import Cabecalho from '@/components/Cabecalho.vue'
import Banner from '@/components/Banner.vue';
import Info from '@/components/Info.vue';
import Conteudo from '@/components/Conteudo.vue';
import Blocks from '@/components/Blocks.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cabecalho',
      name: 'cabecalho',
      component: Cabecalho,
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/text',
      name: 'text',
      component: Text
    },
    {
      path: '/conteudo',
      name: 'conteudo',
      component: Conteudo
    },
    {
      path: '/blocks',
      name: 'blocks',
      component: Blocks
    }
  ],
})

export default router
