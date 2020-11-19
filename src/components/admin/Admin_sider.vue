<template>
    <Row id="AdminSider">
        <Col span="24">
            <Menu active-name="" width="auto" theme="light" accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        订单管理
                    </template>
                    <MenuItem name="1-1">aaa</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1" to="/admin/user">bbb</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">aaa</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
    </Row>
</template>
<script>
export default {
    name:'AdminSider',
    data(){
        return{

        }
    }
}
</script>
<style lang="stylus" scoped>
    @import  './Admin_sider.styl'
</style>