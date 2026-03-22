import { LightningElement } from 'lwc';

import Cab_Reservation__c from '@salesforce/schema/Cab_Reservation__c';

import NAME from '@salesforce/schema/Cab_Reservation__c.Name';
import Customer_Name__c from '@salesforce/schema/Cab_Reservation__c.Customer_Name__c';
import TRAVELDATE from '@salesforce/schema/Cab_Reservation__c.Travel_Date_Time__c';
import TRAVELFROM from '@salesforce/schema/Cab_Reservation__c.Travel_Form__c';
import TRAVELTO from '@salesforce/schema/Cab_Reservation__c.Travel_To__c';

import Aadhar_Number__c from '@salesforce/schema/Cab_Reservation__c.Aadhar_Number__c';
import Customer_Email__c from '@salesforce/schema/Cab_Reservation__c.Customer_Email__c';
import Number_of_travelers__c from '@salesforce/schema/Cab_Reservation__c.Number_of_travelers__c';
import Vehicle__c from '@salesforce/schema/Cab_Reservation__c.Vehicle__c';
import Price_Per_Km__c from '@salesforce/schema/Cab_Reservation__c.Price_Per_Km__c';
import Driver__c from '@salesforce/schema/Cab_Reservation__c.Driver__c';
import Driver_Email__c from '@salesforce/schema/Cab_Reservation__c.Driver_Email__c';

import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CabReservationComp extends LightningElement {

    objectApiName = Cab_Reservation__c;

    openModalPopup = false;
    recordId;

    fields = [
        NAME,
        Customer_Name__c,
        Customer_Email__c,
        Aadhar_Number__c,
        TRAVELDATE,
        TRAVELFROM,
        TRAVELTO,
        Number_of_travelers__c,
        Vehicle__c,
        Price_Per_Km__c,
        Driver__c,
        Driver_Email__c
    ];

    handleSubmit() {

        const showToastEvent = new ShowToastEvent({
            title: "Success",
            message: "Cab Booked Successfully 🚖",
            variant: "success"
        });

        this.dispatchEvent(showToastEvent);
    }

    handleSuccess(event) {

        this.recordId = event.detail.id;

        console.log("Record ID = " + this.recordId);

        this.openModalPopup = true;
    }

    closeModal() {
        this.openModalPopup = false;
    }

}