import { Vehicle } from './vehicle.js'

export class Drone extends Vehicle {
  constructor(license, model, latLong) {
    super(license, model, latLong)
    this.aitTimeHours = null
    this.base = null
  }

}
