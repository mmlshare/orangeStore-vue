<template>
    <Layout>
        <Content>
            <Form ref="queryForm" :model="queryForm" inline label-position="right" :label-width="80">
                <Row>
                    <Col span="8">
                        <FormItem :label-width="40" label="姓名" prop="name">
                            <Input v-model="queryForm.name"></Input>
                        </FormItem>
                        <FormItem :label-width="0">
                            <Button type="success" @click="submitQueryForm('queryForm')">查询</Button>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
            <Table stripe border :loading="loading" :columns="tableColumns" :data="tableDatas">
                <template slot-scope="{ row }" slot="userId">
                <strong>{{ row.userId }}</strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                    <Button type="error" size="small" @click="remove(index)">Delete</Button>
                </template>
            </Table>
        </Content>
        <Footer>
            <Page 
                size="small" 
                show-elevator 
                show-sizer 
                show-total
                :total="page.total" 
                :current="page.index"
                :page-size="page.size"
                :page-size-opts="[10, 20, 50, 100, 500]"
                @on-change="changeIndexPage"
                @on-page-size-change="changePageSize"
            />
        </Footer>
    </Layout>
</template>
<script>
export default {
    data(){
        return{
            title:'用户管理',
            loading:false,
            queryForm:{
                name:'',
            },
            page:{
                index: 1,
                size: 20,
                total: 0
            },
            tableColumns:[
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },{
                    title:'用户名',
                    key:'userId',
                    width:100,
                    slot: 'userId',
                    sortable: true,
                },{
                    title:'姓名',
                    key:'name',
                    width:100,
                    sortable: true,
                },{
                    title:'年龄',
                    key:'age',
                    width:110,
                    sortable: true,
                    filters:[
                        {
                            label:'<30',
                            value:1
                        },{
                            label:'>=30',
                            value:2
                        }
                    ],
                    filterMultiple:true,
                    filterMethod(value,row){
                        if(value===1){
                            return row.age<30;
                        }else if(value===2){
                            return row.age>=30;
                        }
                    }
                },{
                    title:'密码',
                    key:'password',
                    width:160,
                },{
                    title:'联系方式',
                    key:'phone',
                    resizable: true,
                    width:180,
                },{
                    title:'地址',
                    key:'address',
                    resizable: true,
                    width:300,
                },
                {
                    title: '操作',
                    slot: 'action',
                    width: 150,
                },
            ],
            tableDatas:[
                {
                    userId:'xpp',
                    name:'小鹏鹏',
                    age:25,
                    password:'woaixiaozhuzhu',
                    phone:'111',
                    address:'222'
                },
                {
                    userId:'xzz',
                    name:'小猪猪',
                    age:23,
                    password:'woaixiaopengpeng',
                    phone:'112221',
                    address:'2233332'
                }
            ],
            tableDatas2:[
                {
                    userId:'xpp',
                    name:'小鹏鹏',
                    age:25,
                    password:'woaixiaozhuzhu',
                    phone:'111',
                    address:'222'
                },
                {
                    userId:'xzz',
                    name:'小猪猪',
                    age:23,
                    password:'woaixiaopengpeng',
                    phone:'112221',
                    address:'2233332'
                }
            ],
            
        }
    },
    created(){
        this.submitQueryForm();
    },
    methods: {
        submitQueryForm(){
            const self=this;
            const postData=Object.assign({},self.queryForm,self.page);
            self.pig.get('queryUser.action',postData).then(res=>{
                if(res.success){
                    self.tableDatas=res.data.list;
                    self.page.total=res.data.total;
                }
            }).catch(()=>{
                self.tableDatas=self.tableDatas2.filter(item=>{
                    return item.name.indexOf(self.queryForm.name)>-1;
                });
                self.page.total=self.tableDatas.length;
            });
        },
        changeIndexPage(index){
            // i是分页中当前页的页码
            console.log(index);
            this.page.index = index;
            this.submitQueryForm();
        },
        changePageSize(size){
            console.log(size);
            this.page.index=1;
            this.page.size=size;
            this.submitQueryForm();
        },
        show(index){
            const _data=this.tableDatas[index];
            this.$Modal.info({
                title:`${_data.userId}-个人信息`,
                content: `
                    用户名：${_data.userId}<br>
                    姓名：${_data.name}<br>
                    年龄：${_data.age}<br>
                    密码：${_data.password}<br>
                    联系方式：${_data.phone}<br>
                    地址：${_data.address}<br>
                `
            });
        },
        remove(index){
            const self=this;
            const postData={
                userId:self.tableDatas[index].userId,
            };
            self.pig.get('deleteUser.action',postData).then(res=>{
                if(res.success){
                    self.submitQueryForm();
                }
            }).catch(()=>{
                self.tableDatas.splice(index,1);
            });
        }
    },
}
</script>
<style scoped lang="stylus">
    @import './User.styl'
</style>