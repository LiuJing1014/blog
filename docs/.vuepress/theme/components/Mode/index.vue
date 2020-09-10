<template>
    <ThemeButton />
</template>

<script>
import ClickOutside from 'vue-click-outside'
// import ModePicker from './ModePicker'
import applyMode from '@theme/components/Mode/applyMode'
import ThemeButton from './ThemeButton'

export default {
    name: 'UserSettings',
    directives: {
        'click-outside': ClickOutside
    },
    components: {
        // ModePicker,
        ThemeButton
    },

    data () {
        return {
            showMenu: false
        }
    },

    // 为了在保证 modePicker 在 SSR 中正确开关，并实现管理，Mode 组件将负责 modePicker 关闭的情况
    mounted () {
        if(sessionStorage.getItem('theme') == 'dark'){
            applyMode('dark')
            if(this.$route.path == '/'){
                document.documentElement.style.setProperty('--nav-bg-color','')
                document.documentElement.style.setProperty('--nav-font-color','#ffffffcc')
                document.getElementById('themeImg').src = require('../../images/sun.png')
            }
        }else{
            applyMode('light')
            if(this.$route.path == '/'){
                document.documentElement.style.setProperty('--nav-bg-color','')
                document.documentElement.style.setProperty('--nav-font-color','#fff')
                document.getElementById('themeImg').src = require('../../images/moonLight.png')
            }
        }
    },
    watch:{
        $route(to){
            if(to.path == '/'){
                document.documentElement.style.setProperty('--nav-bg-color','')
                if(sessionStorage.getItem('theme') == 'dark'){
                    document.documentElement.style.setProperty('--nav-font-color','#ffffffcc')
                }else{
                    document.documentElement.style.setProperty('--nav-font-color','#fff')
                    document.getElementById('themeImg').src = require('../../images/moonLight.png')
                }
            }else{
                if(sessionStorage.getItem('theme') == 'dark'){
                    document.documentElement.style.setProperty('--nav-bg-color','#2f3133')
                    document.documentElement.style.setProperty('--nav-font-color','#ffffffcc')
                }else{
                    document.documentElement.style.setProperty('--nav-bg-color','#fff')
                    document.documentElement.style.setProperty('--nav-font-color','#242424')
                    document.getElementById('themeImg').src = require('../../images/moon.png')
                }
            }
        }
    },

    methods: {
        hideMenu () {
            this.showMenu = false
        }
    }
}
</script>

<style lang="stylus">
@require '../../styles/mode.styl'

.color-picker {
	position: relative;
	margin-right: 1em;
  cursor pointer;
	.color-button {
		align-items: center;
		height: 100%;
		.iconfont {
			font-size 1.4rem
			color: $accentColor
		}
	}

	.color-picker-menu {
		position: absolute;
		top: 40px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 150;
		&.menu-transition-enter-active,
		&.menu-transition-leave-active {
			transition: all 0.25s ease-in-out;
		}
		&.menu-transition-enter,
		&.menu-transition-leave-to {
			top: 50px;
			opacity: 0;
		}

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
		}
	}
}

@media (max-width: $MQMobile) {
	.color-picker {
		margin-right: 1rem;
		.color-picker-menu {
			left: calc(50% - 35px);
			&::before {
				left: calc(50% + 35px);
			}
		}
	}
}
</style>
