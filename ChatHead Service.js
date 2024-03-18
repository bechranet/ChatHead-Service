//Called when service is started.
function OnStart()
{
	app.ShowPopup( "start" );
	
	//Create Overlay control.
	ovl = app.CreateOverlay();
	
   lay = app.CreateLayout( "Linear", "Vertical" );
    
    	lay2 = app.CreateLayout( "Linear", "Vertical" );
	lay2.SetBackground( "/Sys/Img/BlueBack.jpg" );
	

    btnA = app.CreateButton( "A", 0.2, 0.1 );
    lay.AddChild( btnA );
    btnA.SetOnTouch( call );
    
    /*
      btnC = app.CreateButton( "C", 1, 1 );
    lay2.AddChild( btnC );
*/

    app.AddLayout( lay );
 
}

function call(){
    app.Call("32900000000")
     ovl.AddLayout( lay2,1,1);
    }

//Handle chat head image touches.
function img_OnTouch( ev )
{
    console.log("tasto premuto")
    
    /*
    if( ev.action=="Down" ) 
    {
        console.log("down")
        //Store chat head start position.
        headX = chatLeft; headY = chatTop;
        
        //Store finger down start position.
        startX = ev.screenX; startY = ev.screenY;
        dx = 0; dy = 0;
    }
    else if( ev.action=="Move" ) 
    {
        console.log("muovi")
        //Calculate distance moved by finger.
        dx = ev.screenX - startX;
        dy = ev.screenY - startY;
        
        //Move chat head layout.
        chatLeft = headX+dx; chatTop = headY+dy;
        ovl.SetPosition( layHead, chatLeft, chatTop )
    }
    else if( ev.action=="Up" ) 
    {
        console.log("sopra")
        //Make sure main app is running.
        if( Math.abs(dx) < 0.001 ) 
            
    }
    */
    
    
   // app.StartApp();
}



//Called when we get a message from main app.
function OnMessage( msg )
{
    console.log( msg );
    
    //Add chat head layout to overlay.
    if( msg=="add" )  ovl.AddLayout( layHead, chatLeft, chatTop );
    else ovl.RemoveLayout( layHead );
}
