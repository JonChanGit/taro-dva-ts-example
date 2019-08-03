
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { HelloProps, HelloState } from './hello.interface'
import './hello.less'
import {AtAvatar, AtCard} from "taro-ui";
// import {  } from '../../components'


@connect(({hello, loading}) => ({
  ...hello,
  loading: loading.models['index']
}))
class Hello extends Component<HelloProps,HelloState > {

state: HelloState = {}

config:Config = {
    navigationBarTitleText: 'Hello'
}
constructor(props: HelloProps) {
    super(props)
    this.state = {}
}

componentDidMount() {
    
}

render() {
    return (
    <View className='fx-hello-wrap'>
      <View className='at-row at-row--wrap'>
        <View className='at-col at-col-4' >
          <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
        </View>
        <View className='at-col at-col-4' >
          <AtAvatar text='凹凸实验室'></AtAvatar>
        </View >
        <View className='at-col at-col-4'>
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        </View >
        <View className='at-col at-col-4'>
          <AtAvatar  circle text='凹凸实验室'></AtAvatar>
        </View>
      </View>

      <AtCard
        note='小Tips'
        extra='额外信息'
        title='这是个标题'
        thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    </View>
    )
}
}
export default Hello
