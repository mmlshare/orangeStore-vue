<template>
<div class="layout">
    <Layout>
        <Sider hide-trigger>
            <AdminSider></AdminSider>
        </Sider>
        <router-view />
    </Layout>
</div>
</template>
<script>
import AdminSider from './Admin_sider'
export default {
    components:{
        AdminSider
    },
    data(){
        return{

        }
    },
}
</script>
<style lang="stylus" scoped>
    @import  './Admin.styl'
</style>