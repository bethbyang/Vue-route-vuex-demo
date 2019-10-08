<template>
    <div class="page2">
        {{msg}}
        <br/>
        <button @click="doClick()">点击后跳转到Page1,并传递参数</button>
        <p>用户名：<input type="text" v-model="user">密码：<input type="text" v-model="pass"></p>
        <button  @click="addUser()">点击后添加用户名和密码，并在下面显示</button>
        <p v-for="(item,index) in this.$store.state.list" :key="index">用户名：{{item.username}},密码：{{item.password}}</p>
    </div>
</template>

<script>
    export default {
        name: "Page2",
        data(){
            return {
                msg:'This is Page2',
                user:'',
                pass:''
            }
        },
        methods:{
            doClick(){
                this.$store.commit("addCount",1)
                this.msg+="  "+this.$store.state.count+"次"
                this.$router.push({name:'page1',params:{message:this.msg}});
            },
            addUser(){
                this.$store.commit("addList",{username:this.user,password:this.pass});
            }
        }
    }
</script>

<style scoped>
.page2{
    padding:20px;
    font-size:48px;
    background:#373737;
    color:#dcd0c0;
}
    button{
        background:#c0b283;
        color:#fefefe;
        padding:10px 20px;
        border:none;
    }
    input{border:1px solid #dcd0c0; margin-right:20px;}
    p{
        font-size:18px;
    }
</style>