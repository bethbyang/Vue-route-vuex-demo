<template>
    <div class="page1">
        {{msg}}
        <br/><button @click="doClick()">点击后跳转到page2</button>
        <p>通过page2传递过来的数据：{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "Page1",
        data(){
            return {
                msg:'This is Page1',
                message:this.$route.params.message
            }
        },
        methods:{
            doClick(){
                alert(this.msg);
                this.$router.push('/page2');
            }
        }
    }
</script>

<style scoped>
.page1{
    padding:20px;
    font-size:48px;
    background:#0375b4;
    color:#ffce00;
}
    button{
        background:#262228;
        color:#ffce00;
        border:none;
        padding:10px 20px;
    }
    p{
        font-size:18px;
    }
</style>