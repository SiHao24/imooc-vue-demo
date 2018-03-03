# imooc-vue-demo
MOOC网vue实现todolist demo  
## localhost
```javascript
   const STOREAGE_KAY = 'todos-vuejs';
   export default {
       fetch() {
           return JSON.parse(window.localStorage.getItem(STROAGE_KEY) || '[]')
       },
       save(items) {
           window.localStroage.setItem(STROAGE_KAY, JSON.stringify(items))
       }
   } 
```
### 如何划分组件
功能模块：--select, pagenation....  
页面区域：---header, footer, sidebar...  
### 父向子组件传参
通过props来注册父级里面的参数，子组件里面就可以通过this.本参数来获取父组件里面的参数
### 子向父组件传参
#### 自定义事件
1. 使用$on() 监听事件  
2. 使用$emit()在它上面触发事件  
3. 使用$dispatch()派发事件，事件沿着父链冒泡  (新版本已废弃)
4. 使用$broadcast()广播时间，事件向下传导给所有的后代(新版本已废弃)
