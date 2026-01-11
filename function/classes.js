class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    SetBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.SetBrand("fortuner");
let lexus = new ToyotaCar();
fortuner.SetBrand("fortuner");