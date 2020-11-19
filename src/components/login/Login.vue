<template>
<div>
    <div class="login_background">
    </div>
    <div class='login-page'>
        <Form class="login-form" ref="loginForm" :model="loginForm" :rules="ruleItem">
            <h3>Login</h3>
            <FormItem label="username" class="form-item" prop="user">
                <Input v-model="loginForm.user" type="text" placeholder="请输入用户名"/>
            </FormItem>
            <FormItem label="password" class="form-item" prop="password">
                <Input v-model="loginForm.password" type="password" @keyup.enter.native="submitForm" password placeholder="请输入密码"/>
            </FormItem>
            <FormItem label="">
                <Button type="success" @click="submitForm('loginForm')" size="large">
                    Sign in
                </Button>
            </FormItem>
        </Form>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            imgSrc:require('../../assets/images/orange_login.jpg'),
            loginForm:{
                user:'',
                password:'',
                // loading:false,
            },
            ruleItem:{
                user:[
                    {
                        required:true,
                        message:'用户名不能为空',
                        trigger:'blur',
                    }
                ],
                password:[
                    {
                        required:true,
                        message:'密码不能为空',
                        trigger:'blur',
                    }
                ]
            }
        }
    },
    methods: {
        submitForm(name){
            const self=this;
            self.$refs[name].validate(valid=>{
                if(valid){
                    // self.loading=true;
                    self.pig.get('login.action',self[name]).then((res)=>{
                        // self.loading=false;
                        if(res.success){
                            self.$Message.success('登录成功');
                            self.$router.replace('/admin');
                        }
                    }).catch(()=>{
                        self.$Message.success('登录成功');
                        self.$router.replace('/admin');
                    });
                }
            });
        }
    },
}
</script>

<style scoped lang="stylus">
    @import './Login.styl'
</style>