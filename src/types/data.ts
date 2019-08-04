/**
 * 查询结果
 */
export interface DataInterface {
  content: string,
  createDateTime: number,
  createTime: string,
  hots: string,
  id: string,
  link: string,
  mark: string,
  originalDataId: string,
  /**
   * 收录次数
   */
  frequency?: number
}
