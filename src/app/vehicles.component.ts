import { Component } from '@angular/core';
import { VehiclesService } from './vehicles.service';

@Component({
  selector: 'my-vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles = this.vehiclesService.getVehicles();
 
  constructor(private vehiclesService: VehiclesService) {  };
}
