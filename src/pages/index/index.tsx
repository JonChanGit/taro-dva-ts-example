import Taro, {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {AtButton, AtList, AtListItem, AtForm, AtInput, AtActivityIndicator} from 'taro-ui'
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
    value: '周杰伦'
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
    }
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

  render() {
    let {data, loading} = this.props
    data = data || []
    return (
      <View className='fx-index-wrap'>
        {
          loading ? <AtActivityIndicator color='#13CE66'></AtActivityIndicator> : null
        }
        <AtButton type='primary'>按钮文案</AtButton>
        <AtForm
          onSubmit={this.onSubmit}
          onReset={this.onReset}
        >
          <AtInput
            name='value'
            title='文本'
            type='text'
            placeholder='单行文本'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <AtButton formType='submit'>提交</AtButton>
          <AtButton formType='reset'>重置</AtButton>
        </AtForm>
        {
          loading ? <AtActivityIndicator color='#13CE66'></AtActivityIndicator> : null
        }
        <AtList>
          <AtListItem title='默认事件测试' onClick={this.handleClick}/>
          {
            data.map(i => (
              <AtListItem title={i.content} arrow='right' onClick={this.printRecode(i)}/>
            ))
          }
        </AtList>
      </View>
    )
  }
}

export default Index

