const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine ,world 
var box1,mainGround,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
var box17,box18,box19,box20,box21,box22,box23,box24,box25,box26
var polygon,sling,ground2,ground3
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(300,450,50,70);
    box2 = new box(350,490,50,70);
    box3 = new box(400,490,50,70);
    box4 = new box(450,450,50,70);
    box5 = new box(500,490,50,70);
    box6 = new box(550,490,50,70);
    box7 = new box(600,450,50,70);
    box8 = new box(350,400,50,70);
    box9 = new box(400,400,50,70);
    box10 = new box(500,400,50,70);
    box11= new box(550,400,50,70);
  //  box12= new box(500,200,50,70);
    box13=new box(450,350,50,70)
    box14=new box(400,350,50,70)
    box15=new box(500,350,50,70)
   box16=new box(450,400,50,70)
    box17=new box(800,250,50,70)
    box18=new box(850,250,50,70)
    box19=new box(900,250,50,70)
    box20=new box(950,250,50,70)
    box21=new box(1000,250,50,70)
    box22=new box(850,200,50,70)
    box23=new box(900,200,50,70)
    box24=new box(950,200,50,70)
    box25=new box(900,150,50,70)
    box26=new box(450,300,50,70)
    polygon=new Polygon(20,200,100,100)
    ground2=new Ground(1000,300,500,10)
    ground3=new Ground(400,500,500,10)
    mainGround=new Ground(width/2,800,2000,50)
    sling=new Sling(polygon.body ,{x:100,y:600})
}

function draw(){
    background("black")
    Engine.update(engine)
    stroke("yellow")
    textSize(50)
    text("DRAG AND REALEASE THE POLYGON ",10,750)
    box1.display("skyblue","white")
    box2.display("skyblue","white")
    box3.display("skyblue","white")
    box4.display("skyblue","white")
    box5.display("skyblue","white")
    box6.display("skyblue","white")
    box7.display("skyblue","white")
    box8.display("pink","white")
   box9.display("pink","white")
   box10.display("pink","white")
    box11.display("pink","white")
  //  box12.display("pink","white")
   box13.display("green","white")
    box14.display("green","white")
    box15.display("green","white")
    box16.display("pink","white")
    box17.display("purple","white")
    box18.display("purple","white")
    box19.display("purple","white")
    box20.display("purple","white")
    box21.display("purple","white")
    box22.display("orange","white")
    box23.display("orange","white")
    box24.display("orange","white")
    box25.display("yellow","white")
    box26.display("red","white")
    polygon.display()
    ground2.display()
    ground3.display()
    mainGround.display()
   sling.display()
}
function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
  }
  
  
  function mouseReleased() {
    sling.fly();
  }
  
  function keyPressed() {
    if (keyCode === 32) {
      sling.attach(polygon.body);
    }
  }
