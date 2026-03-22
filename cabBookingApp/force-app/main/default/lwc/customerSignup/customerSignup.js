import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";//step-1 Import module
import { NavigationMixin } from "lightning/navigation";//step-1 Import module

//step-2
export default class CustomerSignup extends NavigationMixin(LightningElement) {
    showForm=false;
    handleSuccess(event)
    {
        //form->default nature->loading
        event.preventDefault();
        //Step 2
        const showToastEvt = new ShowToastEvent({
      title: "Success",
      message:
        "Sign up Successfully !! Welcome to premium Cab Services.",
        variant:'success',
    });
    //Step-3
    this.dispatchEvent(showToastEvt);
    }
    handlesignup()
    {
this.showForm=true;
    }
    handleSubmit()
    {
//implement NavigationMixin
// Navigate to the SignIn Page
let cmpDef={componentDef:"c:signInComp"};
//convert obj to string
//btoa->Encodes the JSON String into base 64 formate->one.app framework
let encodedDef=btoa(JSON.stringify(cmpDef));//eyJjb21wb25lbnREZWYiOiJjOnNpZ25JbkNvbXAiLCJhdHRyaWJ1dGVzIjp7fSwic3RhdGUiOnt9fQ
//NavigationMixin->sf module->navigation in LWC
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url:"/one/one.app#"+encodedDef//
      }
    });
    }
}