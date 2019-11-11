import { AbstractControl, ValidationErrors } from '@angular/forms';
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
    // Below line refers to a Validation of Synchronus Validation function
    // static shouldBeUnique(control: AbstractControl): ValidationErrors | null {

    // Below is for Asynchronus Validation function
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        // Below return is for Asynchronus ValidationFunction 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'mosh') resolve ({ shouldBeUnique: true }); 
                else resolve(null);
            }, 2000);

        });


        // The setTimeout Function is outside this Promise function in Synchonus
        // setTimeout(() => {
        //     if (control.value === 'mosh') { return { shouldBeUnique: true }; }
        //     return null;
        // }, 2000);

       
        // Required a null to be returned in Synchronus
        //   return null;
    }
}
