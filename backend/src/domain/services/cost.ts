export default class Cost {

    private id: String;
    private type: string;
    private amount: Number;
    private value: Number;
    private createAt: Date;

    constructor( id:String, type: string, amount: Number, value: Number, createAt: Date){
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.value = value;
        this.createAt = createAt;
    }

}