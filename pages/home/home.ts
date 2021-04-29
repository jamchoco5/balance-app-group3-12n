import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { parseIsolatedEntityName } from 'typescript';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ["home.css"]
})
export class HomePage {
  BTAmount: number;
  PayTerm: number;
  tip: number;
  tap: number;
  mp: number;
  
  constructor(public navCtrl: NavController) {
  }
  calculateTIP() {
    this.tip =(this.BTAmount * 0.015) * (this.PayTerm);
    this.tip = parseFloat(this.tip.toFixed(2));
  }
  calculateTAP() {
    this.tap = Number(this.BTAmount) + Number(this.tip);
    this.tap = parseFloat(this.tap.toFixed(2));
  }
  calculateMP() {
    this.mp = Number(this.tap)/Number (this.PayTerm);
    this.mp = parseFloat(this.mp.toFixed(2));
  }
}