import Vue from 'vue';
import Router from 'vue-router';
import PianoRollContainer from '@/components/PianoRollContainer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PianoRollContainer',
      component: PianoRollContainer
    }
  ]
});
