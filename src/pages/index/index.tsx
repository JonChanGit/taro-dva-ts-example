import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {AtButton, AtList, AtListItem, AtForm, AtInput, AtActivityIndicator, AtToast, AtTabBar} from 'taro-ui'
import {BaseEventOrig, CommonEvent, CommonEventFunction} from "@tarojs/components/types/common";
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import {DataInterface, IndexProps, IndexState} from './index.interface'
import './index.less'

// import {  } from '../../components'

@connect(({index, loading}) => ({
  ...index,
  loading: loading.models['index']
}))

class Index extends Component<IndexProps, IndexState> {
  config: Config = {
    navigationBarTitleText: '示例页'
  }

  state: IndexState = {
    value: '五星红旗',
    openToast: false,
    toastText: '',
    current: 0
  }

  constructor(props: IndexProps) {
    super(props)
  }

  async getList() {
    await this.props.dispatch({
      type: 'index/getList',
      payload: this.state.value
    })
  }

  handleClick = (event: BaseEventOrig<any>): void => {
    console.log('handleClick', event)
  }
  printRecode = (recode: DataInterface): CommonEventFunction => {
    return () =>{
      console.log('printRecode', recode)
      this.setState({
        openToast: true,
        toastText: `${recode.content} 
        createTime: ${recode.createTime}
        mark: ${recode.mark} hots: ${recode.hots}
        frequency: ${recode.frequency}
        `
      })
    }
  }

  nextPage = () :void => {
    Taro.navigateTo({
      url: '/pages/hello/hello'
    })
  }

  componentDidMount() {
    this.getList()
  }

  onSubmit = (event: CommonEvent) => {
    console.log(event)
    this.getList()
  }
  onReset = (event: CommonEvent) => {
    console.log(event)
  }
  handleChange = (value: string) => {
    this.setState({
      value
    })
  }

  handleTabBarClick = (value) => {
    this.setState({
      current: value
    })
  }

  render() {
    let {data, loading} = this.props
    data = data || []
    const { openToast, toastText } = this.state
    return (
      <View className='fx-index-wrap'>
        <AtForm
          onSubmit={this.onSubmit}
          onReset={this.onReset}
        >
          <AtInput
            name='value'
            title='搜索关键字'
            type='text'
            placeholder='单行文本'
            value={this.state.value}
            clear
            onChange={this.handleChange}
          />
          <AtButton formType='submit'>提交</AtButton>
          <AtButton onClick={this.nextPage}>nextPage</AtButton>
        </AtForm>
        {
          loading ? <AtActivityIndicator color='#13CE66'></AtActivityIndicator> : null
        }
        <AtList>
          <AtListItem title='默认事件测试' onClick={this.handleClick}/>
          {
            data.map(i => (
              <AtListItem title={i.content} arrow='right' onClick={this.printRecode(i)} note={'收录时间：' + i.createTime + ' 收录次数：' + i.frequency}/>
            ))
          }
        </AtList>
        <AtToast isOpened={openToast} text={toastText} ></AtToast>
        <View style={{height: '90px'}}/>
        <AtTabBar
          fixed
          tabList={[
            { title: '待办事项', iconType: 'bullet-list', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
          ]}
          onClick={this.handleTabBarClick}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index

