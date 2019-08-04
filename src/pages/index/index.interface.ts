/**
 * index.state 参数类型
 *
 * @export
 * @interface IndexState
 */
import {DataInterface} from "../../types/data";

export interface IndexState {
  value: string,
  openToast: boolean,
  toastText: string,
  current: any
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

