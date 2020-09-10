<template>
    <div class="themeContainer" @click="changeTheme">
        <img :src="img" id="themeImg"/>
    </div>
</template>

<script>
import applyMode from '@theme/components/Mode/applyMode'
export default {
    name:'ThemeButton',
    mounted(){
        window.addEventListener('scroll', this.handleScroll,true);
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll,true);
    },
    created(){
        if(this.$route.path == '/' && sessionStorage.getItem('theme') != 'dark'){
            this.img == require('../../images/moonLight.png')
        }
    },
    data(){
        return{
            img:sessionStorage.getItem('theme') == 'dark'?require('../../images/sun.png'):require('../../images/moon.png')
        }
    },
    methods:{
        changeTheme(){
            let theme = sessionStorage.getItem('theme')
            theme == 'dark'?theme = 'light':theme = 'dark'
            applyMode(theme)
            sessionStorage.setItem('theme',theme)

            if(this.$route.path == '/'){
                this.img = theme == 'dark'?require('../../images/sun.png'):require('../../images/moonLight.png')
                document.documentElement.style.setProperty('--nav-bg-color','')
                if(sessionStorage.getItem('theme') == 'dark'){
                    document.documentElement.style.setProperty('--nav-font-color','#ffffffcc')
                }else{
                    document.documentElement.style.setProperty('--nav-font-color','#fff')
                }
            }else{
                this.img = theme == 'dark'?require('../../images/sun.png'):require('../../images/moon.png')
            }
        },
        //屏幕滚动
        handleScroll(){
            if(this.$route.path == '/'){
                if(document.documentElement.scrollTop > 0){
                    if(sessionStorage.getItem('theme') == 'dark'){
                        document.documentElement.style.setProperty('--nav-bg-color','#2f3133')
                        document.documentElement.style.setProperty('--nav-font-color','#ffffffcc')
                    }else{
                        document.documentElement.style.setProperty('--nav-bg-color','#fff')
                        document.documentElement.style.setProperty('--nav-font-color','#242424')
                        document.getElementById('themeImg').src = require('../../images/moon.png')
                    }
                }else{
                    document.documentElement.style.setProperty('--nav-bg-color','')
                    if(sessionStorage.getItem('theme') == 'dark'){
                        document.documentElement.style.setProperty('--nav-font-color','#ffffffcc')
                    }else{
                        document.documentElement.style.setProperty('--nav-font-color','#fff')
                        document.getElementById('themeImg').src = require('../../images/moonLight.png')
                    }
                }
            }
        },
    }
}
</script>

<style lang="scss">
    .themeContainer{
        width:40px;
        height:40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:6px;
        border-radius: 4px;
        cursor: pointer;

        img{
            width:30px;
            height:30px;
        }

        &:hover{
            background-color: var(--theme-hover-color);
        }
    }
</style>