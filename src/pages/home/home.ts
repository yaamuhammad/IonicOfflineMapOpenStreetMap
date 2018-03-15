import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import "leaflet";
import "leaflet-tilelayer-mbtiles-ts";

declare var L: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    map: L.Map;
    center: L.PointTuple;
    
    constructor(public navCtrl: NavController) { }

    ionViewDidEnter() {  
        this.prepareMap();
    }

    prepareMap() {
        this.map = L.map('map', {
            center: [-6.177635, 106.826439],
            zoom: 7,
            minZoom: 7,
            maxZoom: 10,
            attributionControl: true,
            zoomControl:true
        });

        // Database menggunakan file png di asset (offline)
        L.tileLayer('./assets/imgs/maps/{z}/{x}/{y}.jpg').addTo(this.map);

        // Database Online, dg query langsung ke website open street map
        // L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
        //    .addTo(this.map); 
    }
}
