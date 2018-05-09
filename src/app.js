import $ from 'jquery'
import { Car } from './classes/car.js'
import { Drone } from './classes/drone.js'
import { fleet } from './fleet-data.js'
import { FleetDataService } from './services/fleet-data-service.js'
import { AppBase } from './framework/app-base.js'
import { HomePage } from './pages/home.js'
import { CarsPage } from './pages/cars.js'
import { DronesPage } from './pages/drones.js'
import { MapPage } from './pages/map.js'

export class App extends AppBase {
  constructor() {
    super('Fleet Manager')
    this.dataService = new FleetDataService()
    this.dataService.loadData(fleet)

    this.addRoute('Home', new HomePage(), true)
    this.addRoute('Cars', new CarsPage())
    this.addRoute('Drones', new DronesPage())
    this.addRoute('Map', new MapPage())
  }
}

export let application = new App()
application.show($('body'))
