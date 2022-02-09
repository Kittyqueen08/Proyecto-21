class Ground{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var ground ={
            isStatic:true
            
        }
        this.body = Bodies.rectangle(x,y,w,h,ground);
        World.add(world,this.body);
    }
    display(){
var groundpos = this.body.position;
push();
translate(groundpos.x,groundpos.y);
rectMode(CENTER);
fill("pink");
rect(0,0,this.w,this.h);
pop();
    }
        


    
   

        
       
        

}
    
  
