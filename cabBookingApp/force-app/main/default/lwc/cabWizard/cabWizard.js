import { LightningElement } from 'lwc';

export default class CabWizard extends LightningElement {

    currentStep = "1";

    get isStepOne() {
        return this.currentStep === "1";
    }

    get isStepTwo() {
        return this.currentStep === "2";
    }

    get isStepThree() {
        return this.currentStep === "3";
    }

    get showBack() {
        return this.currentStep === "2";
    }

    get showNext() {
        return this.currentStep === "1" || this.currentStep === "2";
    }

    handleNextClick() {

        if (this.currentStep === "1") {
            this.currentStep = "2";
        }
        else if (this.currentStep === "2") {
            this.currentStep = "3";
        }

    }

    handleBackClick() {

        if (this.currentStep === "3") {
            this.currentStep = "2";
        }
        else if (this.currentStep === "2") {
            this.currentStep = "1";
        }

    }

    handleFinishClick() {

        alert("Booking Completed Successfully 🚖");

        this.currentStep = "1";

    }
}