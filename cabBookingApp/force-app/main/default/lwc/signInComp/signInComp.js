import { LightningElement } from 'lwc';
import validateCredentials from '@salesforce/apex/CabCustomerController.validateCredentials';
import { ShowToastEvent } from "lightning/platformShowToastEvent";//step-1 Import module
import { NavigationMixin } from "lightning/navigation";//step-1 Import module

export default class SingInComp extends NavigationMixin(LightningElement) {
    usernameValue='';//instance variable
    passwordValue='';
    handleUserName(event)
    {
//store current value:-event.target.value
        this.usernameValue=event.target.value;//yash
    }
    handlepassword(event)
    {
        this.passwordValue=event.target.value;
    }
    handleLogin()
    {
        validateCredentials({username:this.usernameValue,password:this.passwordValue})
        .then(result=>{
            if(result)
            {
                //navigate to Cab Wizard
                let cmpDef={componentDef:"c:cabWizard"};
//convert obj to string
//btoa->Encodes the JSON String into base 64 formate->one.app framework
let encodedDef=btoa(JSON.stringify(cmpDef));//eyJjb21wb25lbnREZWYiOiJjOnNpZ25JbkNvbXAiLCJhdHRyaWJ1dGVzIjp7fSwic3RhdGUiOnt9fQ
//NavigationMixin->sf module->navigation in LWC
    this[NavigationMixin.Navigate]({
        type: "standard__webPage",
        attributes: {
        url:"/one/one.app#"+encodedDef
        }
    });
                //Display Showtoast msg
                const showToastEvt = new ShowToastEvent({
        title: "Success",
        message:
        "Sign IN Successfully !! Welcome to premium Cab Services.",
        variant:'success',
    });
    //Step-3
    this.dispatchEvent(showToastEvt);
    console.log(result);

            }
            else{
                //Display Showtoast error msg
                console.log(result);
                const showToastEvt = new ShowToastEvent({
        title: "Error",
        message:
        "Invalid username or Password.",
        variant:'error',
    });
    //Step-3
    this.dispatchEvent(showToastEvt);
            }
        })
    }
}