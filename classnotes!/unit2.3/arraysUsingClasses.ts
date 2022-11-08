class Bird {
    name:string;
    canFly: boolean;
    hasFeathers: boolean = true;
    constructor(name:string,canFly: boolean){
        this.name= name;
        this.canFly= canFly;

    }
flapsWings() {
    if(this.canFly)
    console.log('${this.name}flaps its wings and takes off into the horizon')
    else
    console.log('${this.name}cant fly and is generally pretty bummed about it')

}
}
let bird: Array<Bird> = [
    new Bird ("Toucan", true),
    new Bird ("Penguin", false),
    new Bird ("Pidgeon", true),
    new Bird ("Emu", false)
]

birds.forEach((item: Bird) =>{
    item.flapsWings()
})