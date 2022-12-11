class movie{
  constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }

}
var m1={
  title:"Casino Royale",
  studio:"Eon productions",
  rating:"PG13"
}
console.log(m1)




/*calculate the uber price*/

function counter(distance) {
    let totalCost = 0, dist = distance * 1000;
    for (let m = 1; m <= dist; m++) {
      if (m <= 100) totalCost += 100;
      else totalCost += (m <= 500) ? 50 : 10;
    }
    return totalCost;
  }
  
  console.log(1000*.001,counter(.001))
  console.log(1000*.01,counter(.01))
  console.log(1000*.1,counter(.1))
  console.log(1000*.2,counter(.2))
  console.log(1000*.5,counter(.5))
  console.log(1000,counter(1))


  /*person to hold all the details*/

  var person1 = {
    name : vijay,
    age : 22,
    class : guvi,
    section : fsd
  }
  console.log(person1.name)

class person{
    constructor(name){
        this.name = name;
    }
    person2(){
        alert(this.name);
    }
}
let user = new person("ajith");
user.person2();