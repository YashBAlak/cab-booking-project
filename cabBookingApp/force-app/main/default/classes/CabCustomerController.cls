public with sharing class CabCustomerController {
    //Method annotating indicating that the method can be called from lwc component and supports caching.
    @AuraEnabled(cacheable=true)
    public static Boolean validateCredentials(String username,String password){
            //variable to store the validation result
            Boolean result;
            //Check if either username or password null
            if(username== null || password==null)
            {
            //if any is null,set result to false
            result=false;
            }
            //Query to fetch customer records matching the provided username
        List<Cab_Customer__c> con_List=[Select ID,Username__c,Password__c from Cab_Customer__c where Username__c=: username Limit 1];
        //if no record is found
        if(con_List.size()==0)
        {
            result=false;
        }
        else {
            
                //check if the password matches the stored password for the found record
                if(con_List[0].Password__c==password)
                {
                    result=true;
                }
                else {
                    
                        result=false;                    
                }
            }
            //return the validation result
            return result;//false
        }
        }