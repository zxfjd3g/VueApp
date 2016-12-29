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
    * 动态props: :age='myAge'
  * 组件: MyComponent
    * 所有props的属性都会成为component对象的属性, 模板页面可以直接引用
    * 在组件内的prop验证
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
* 组件间通信
  * 尽量通过props的方式实现组件间通信
  * 基本原则: 不要在子组件中直接修改父组件的状态数据
  * 可以使用vue的自定义事件机制实现组件间通信
    * 绑定事件监听
      * 方式一: 通过$on()
        ```
        this.$on('delete_todo', function (todo) {
          this.deleteTodo(todo)
        })
        ```
      * 方式二: 通过events选项
        ```
        events: {
          'delete_todo': function (todo) {
            this.deleteTodo(todo)
          }
        },
        ```
      * 方式三: 通过v-on绑定
        ```
        @delete_todo="deleteTodo"
        ```
    * 触发事件(3种情况)
      ```
      this.$emit(eventName, data): 在当前组件触发事件
      this.$dispatch(eventName, data): 分给父辈组件(冒泡)
      this.$broadcast(eventName, data): 广播给后代组件
      ```