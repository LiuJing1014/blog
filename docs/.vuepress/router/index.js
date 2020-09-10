import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  	{
		path: '/basicKnowledge',
		redirect: '/basicKnowledge/HTML/pre/',
	}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
