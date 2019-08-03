/**
 * index.state 参数类型
 *
 * @export
 * @interface IndexState
 */
export interface IndexState {
  value: string
}

/**
 * index.props 参数类型
 *
 * @export
 * @interface IndexProps
 */
export interface IndexProps {
  dispatch?: any,
  data?: Array<DataInterface>,
  loading?: boolean
}

export interface DataInterface {
  content: string,
  createDateTime: number,
  createTime: string,
  hots: string,
  id: string,
  link: string,
  mark: string,
  originalDataId: string,
}
