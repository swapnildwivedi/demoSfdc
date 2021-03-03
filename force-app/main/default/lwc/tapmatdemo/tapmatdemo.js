import { LightningElement,track } from 'lwc';

export default class Tapmatdemo extends LightningElement {
    @track recordId;
    successHandler(event){
    this.recordId = event.detail.id;    
    }

}