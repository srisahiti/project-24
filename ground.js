class ground
{
	constructor(x,y,w,h)
	{
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		var options={
			isStatic:true			
			}
	
		this.body=Bodies.rectangle(x,y,w,h,options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER);
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}