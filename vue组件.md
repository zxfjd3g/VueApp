## vue组件
* 一个.vue文件就是一个vue组件
* 组成(3个部分)
  * 模板页面: 
    ```
    <template>
      页面模板
    </template>
    ```
  * JS默认模块对象: 
    ```
    <script>
      export default {
        data() {return {}},
        methods: {},
        computed: {},
        components: {}
      }
    </script>
    ```
  * 页面样式: 
    ```
    <style scoped>
      样式定义
    </style>
    ```
* 基本使用
  在父组件对象的components属性中配置组件模块对象
  ```
  <template>
    <Hello>
  </template>
  <script>
    import Hello from './components/Hello'
    export default {
      components: {
        Hello
      }
    }
  </script>
  ```
* 关于标签名与标签属性名书写问题:
  * 标签名与标签属性名不区分大小写
  * 标签名: 如果组件名是XxxYyy, 标签名必须为<xxx-yyy>
  * 属性名: 如果标签属性名为xxx-yyy, 组件得到的属性名为: xxxYyy
* 使用props传递数据
  * 组件标签: <my-component name='tom' :age='myAge' :set-name='setName'></my-component>
  * 组件: MyComponent
    * 所有props的属性都会成为vue对象的属性, 模板页面可以直接引用
    * 在组件内声明所有props属性
      ```
      //简写
      props: ['name', 'age', 'setName']
      //详写
      props: {
        name: {type: String},
        age: {type: Number},
        setNmae: {type: Function}
      }
      ```