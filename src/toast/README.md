#### Toast

### 属性

1. text      定义提示内容
2. time      单位：毫秒， 定义开始显示到开始隐藏的展示时间，默认值3400ms, 包括淡入动画的400ms及持续展示时间3s, 淡出动画的400ms不计入这个时间内

## 使用set方法来展示微提示

由于组件的特殊性，不支持直接设置状态来控制展示的信息
使用ref指向组件，使用此方式时可以将this.refs.toast暴露给全局，这样全局可以公用一个toast组件


```jsx
    import  Toast from '@tbj/wheel/components/toast'
    <Toast ref='toast' />
    window.toast = this.refs.toast

    // toast.set(text[,time])
    toast.set('这是一个微提示')

```

需要注意的是，当前一个提示未消失时出现下一个提示时，下一个提示会替换前一个提示，并重新计时展示时间。