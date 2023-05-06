import { LightningElement } from 'lwc';

export default class GeneralInformation extends LightningElement {

    get transactionOptions(){
        return [
        
                { label: 'New', value: 'New' },
                { label: 'Rewrite', value: 'Rewrite' },
                {label :'5th Vehicle(not NB)', value: '5th Vehicle(not NB)'},
                {label:'Renewal', value:'Renewal'}
            ];       
    }
   get agencycodeOptions()
    {
        return[
            {label:'R0114',value:'R0114'},
            {label:'R0115',value:'R0115'},
            {label:'R0116',value:'R0116'},
            {label:'R0117',value:'R0117'},
            {label:'R0117',value:'R0117'},
        ]
    }
    
}