---
title: 动态添加表单项element-ui
date: 2020-09-09
tags:
 - Element-ui
---

```html
<template>
    <AddPageContent :title="title" @submitForm="submitForm('ruleForm')" num='1'>
        <div slot="table" id="addProduct">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
                <el-form-item label="一级分类：" prop="primaryClassification">
                    <el-select v-model="ruleForm.primaryClassification" placeholder="请选择一级分类" class="inputLong">
                        <el-option label="1" value="1"></el-option>
                        <el-option label="2" value="2"></el-option>
                        <el-option label="3" value="3"></el-option>
                        <el-option label="4" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="二级分类：" prop="secondaryClassification">
                    <el-select v-model="ruleForm.secondaryClassification"  placeholder="请选择二级分类" class="inputLong">
                        <el-option label="11" value="11"></el-option>
                        <el-option label="22" value="22"></el-option>
                        <el-option label="33" value="33"></el-option>
                        <el-option label="44" value="44"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="产品名称：" prop="productName">
                    <el-input v-model="ruleForm.productName" placeholder="请输入产品名称" class="inputLong"></el-input>
                </el-form-item>
                <el-form-item label="依赖方名称：" prop="relyingPartyName">
                    <el-select v-model="ruleForm.relyingPartyName" placeholder="请选择依赖方" class="inputLong">
                        <el-option label="12" value="12"></el-option>
                        <el-option label="13" value="13"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item v-for="(item, index) in ruleForm.productPrice" :label="index == 0?'产品价格：':''" :key="item.key" :prop="'productPrice.' + index" :rules="productPrice">
                    <el-input v-model="item.price"  style="width:120px"></el-input>
                    <span style="margin-left:10px">元</span>
                    <el-input v-model="item.times" style="width:120px;margin-left:30px"></el-input> 
                    <span style="margin-left:10px">次</span>
                    <el-input v-model="item.years" style="width:120px;margin-left:30px"></el-input> 
                    <span style="margin-left:10px">年</span>
                    <div class="addMore">
                        <img v-if="index == 0"  src='../../../assets/add-mini.png' @click="addDomain"/>
                        <img v-else  src='../../../assets/sub-mini.png'  @click.prevent="removeDomain(item)"/>
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </AddPageContent>
</template>
```

```js
<script>
import AddPageContent from '../../../components/AddPageContent' //中间内容组件
import {validatePrimaryClassification,validateSecondaryClassification,validateProductNewName,validateRelyingPartyName} from '../../../utils/formValidateUtil'
export default {
    name:'AddProduct',
    components:{
        AddPageContent,
    },
    mounted(){
        if(this.$route.query.type == 'edit'){
            this.title = '编辑产品'
        }
    },
    data() {
        var validateProductPrice = (rule, value, callback) => {
            if (!value.price) {
                callback(new Error('请输入产品价格'));
            }else if(!value.times){
                callback(new Error('请输入次数'));
            }else if(!value.years){
                callback(new Error('请输入年数'));
            }else{
                callback()
            }
        };
        return {
            title:'添加产品',

            priceArr:[], //用来存储价格组件
            componentData:[], //存储价格组件传递过来的值
            
            ruleForm: {
                primaryClassification: '', //一级分类
                secondaryClassification: '', //二级分类
                productName: '', //产品名称
                relyingPartyName:'', //依赖方名称
                productPrice: [{price:'',times:'',years:'',key: Date.now()}], //产品价格
            },
            rules: {
                primaryClassification: [{ validator: validatePrimaryClassification, trigger: 'change' }],
                secondaryClassification: [{ validator: validateSecondaryClassification, trigger: 'change' }],
                productName: [{ validator: validateProductNewName, trigger: 'blur' }],
                relyingPartyName: [{ validator: validateRelyingPartyName, trigger: 'change' }]
            },
            productPrice: [{ validator: validateProductPrice, trigger: 'blur' }] //产品价格的校验
        };
    },
    methods: {
        removeDomain(item) {
            var index = this.ruleForm.productPrice.indexOf(item)
            if (index !== -1) {
                this.ruleForm.productPrice.splice(index, 1)
            }
        },
        addDomain() {
            this.ruleForm.productPrice.push({price:'',times:'',years:'',key: Date.now()});
        },
    }
}
</script>
```

```css
<style scoped lang="scss">
    .addMore{
        display: inline-block;
        position: relative;

        img{
            position: absolute;
            top:-5px;
            left:30px;
            transform: translate(-50%,-50%);
            cursor: pointer;
        }
        
    }
</style>
```

