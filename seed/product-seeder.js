var Product = require("../models/product");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
  new Product({
    imagePath:'images/bags.jpg' ,
    title:'Fashionable bag',
    description:'Get colorful accessories for spring like a long wallet from Comme des Garçons, a fuchsia J.Crew crossbody bag,or a tasseled key fob from Kate Spade—plus a wedge-shaped Baggu pouch.',
    price: 2500
  }),

  new Product({
    imagePath:'images/sunglasses.jpg' ,
    title:'Sunglasses',
    description:'Make a style statement this summer with cat-eye sunglasses like a pair of Stephane Christian half-frames, some iridescent blue Dior frames,Thom Browne.',
    price: 1500
  }),

  new Product({
    imagePath:'images/shoe.jpg' ,
    title:'Hiking Boots',
    description:'Embrace the monochrome with items from the new Nike and KAWS collaboration, like a pair of grey Air Jordan IVs, a hooded sweatshirt  or a flat brim Jumpman hat—plus a Nike x  coachs jacket',
    price: 3700
  }),

  new Product({
    imagePath:'images/watch.jpeg' ,
    title:'Girls Watch',
    description:'Fashion design japan movement stainless steel ladies watch Product parameter OEM service Packaging & Shipping 1.Free packaging: ...',
    price: 1000
  }),

  new Product({
    imagePath:'images/heels.jpg' ,
    title:'High Heels',
    description:'Make a style statement this summer with cat-eye sunglasses like a pair of Stephane Christian half-frames, some iridescent blue Dior frames,Thom Browne.',
    price: 2300
  }),

  new Product({
    imagePath:'images/hairClips.jpg' ,
    title:'Hair Clip',
    description:'Embrace the monochrome with items from the new Nike and KAWS collaboration, like a pair of grey Air Jordan IVs, a hooded sweatshirt, or a flat brim Jumpman hat—plus a Nike  coachs jacket',
    price: 800
  }),


];

var done=0;
for (var i =0 ; i <products.length ;i++){
  products[i].save(function(err,result){
      done=done+1;
      if(done === products.length){
        exit();
      }
  });
}

function exit(){
    mongoose.disconnect();
}
