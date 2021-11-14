import Generator from './Generator'
import { OptionSection } from '../Interfases'

export default class extends Generator {
  public getDragonWithTiger(labelArray: Array<string>): Array<OptionSection> {
    let data: OptionSection[] = []

    labelArray.forEach((element: string, index: number) => {
      const optionsArray: Array<string> = []

      for (var i = 1; i <= 10; i++) {
        var num = index + 1
        if (num !== i) {
          optionsArray.push(num + '龙' + i + '虎')
        }
      }

      data = data.concat(super.generatBetOptions(optionsArray, false, labelArray.slice(index, index + 1)))
    })
    return data
  }

  public generatBetOptionsPK10(titles?: Array<string>): Array<OptionSection> {
    if (titles) {
      return super.generatBetOptions(super.generatButtonNumbers(1, 10, false), true, titles)
    } else {
      return super.generatBetOptions(super.generatButtonNumbers(1, 10, false), true)
    }
  }

  public getAllPailieZuheGuanYa(data: any, len: number, numArr: any, arr: any) {
    for (var i = 0; i < data[len].length; i++) {
      if (len === 0) {
        if (!arr.includes(data[len][i])) numArr.push(arr.concat([data[len][i]]))
      } else {
        if (arr.includes(data[len][i])) {
          continue
        } else {
          this.getAllPailieZuheGuanYa(data, len - 1, numArr, arr.concat([data[len][i]]))
        }
      }
    }
  }
}
