import BaseGacha from './base-gacha'
import drops from '../data/farewell-of-snezhnaya.json'

export default class FarewellOfSnezhnaya extends BaseGacha {
  constructor() {
    super(drops)
    this.probabilityRange = this.generateProbabilityRange(943, 51, 6)
  }
}
