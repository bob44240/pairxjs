import { Subject } from 'rxjs/Rx';

/**
 * A ticket representing an active edit session in a formula bar
 * 
 * @export
 * @class FormulaTicket
 */
export class FormulaTicket {

    constructor(public name: string, public value: string, public subject: Subject<string>) {

    }

}


