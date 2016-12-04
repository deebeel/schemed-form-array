import {FormArray, AbstractControl, ValidatorFn, AsyncValidatorFn} from '@angular/forms'
export class SchemedFormArray extends FormArray{

    constructor(private scheme?: ()=>AbstractControl, 
                controls: AbstractControl[] = [], 
                validator?: ValidatorFn,
                asyncValidator?: AsyncValidatorFn){
        super(controls, validator, asyncValidator);
    }

    public patchValue(value: any[] = [], opts: {onlySelf?: boolean}){        
        this.adjustControls(value.length); 
        super.patchValue(value, opts);
    }

    public reset(value: any[] = [], opts: {onlySelf?: boolean}){        
        this.adjustControls(value.length); 
        super.reset(value, opts);
    }
    public setValue(value: any[] = [], opts: {onlySelf?: boolean}){        
        this.adjustControls(value.length); 
        super.setValue(value, opts);
    }

    private adjustControls(newLength: number){
        let diff = newLength - this.length;
        if(diff > 0){
            while(diff--){
                this.push(this.scheme());
            }            
        } else if(diff < 0){
            while(diff++){
                this.removeAt(diff);
            }
        }
    }


}