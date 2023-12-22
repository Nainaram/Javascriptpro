function Bottleofbeers(beers){
    var beers = this.beers;
    while (beers > 0){
        console.log(beers + "bottles of beer on the wall," + beers +"bottles of beer.");
        console.log("Take one down and pass it around," + (beers-1) +"bottles of beer on the wall.");
        beers--;

    }
}
beers =99;
Bottleofbeers(beers);