var deliCue = []; //<<global variable to pass through multiple functions. Array type

//This function takes an empty array and adds a customers name to the end of the curent legnth
//returns a string using the concatenation method

function takeANumber(deliCue, name){
  deliCue.push(name);
  return "Welcome, " + name + ". You are number " + deliCue.length + " in line.";
}

//This function checks how many people are in line and removes them as they come on 

function nowServing(deliCue){ 
  if (!deliCue.length){ //<<<other way it could be written (deliCue.length === 0)
    return "There is nobody waiting to be served!"; //if line is empty
  }
  //if line is not empty, execute code below
  else {  
    var name = deliCue[0];     //assigns the deliCue to name and begins at index 0, (1st person on line)
    deliCue.splice(0, 1);    //adds nothing but removes 1 from the array 
    return "Currently serving " + name + ".";    //return value
  }
}

function currentLine(deliCue){
  
  var line = []; //<<local variable use only for the above named function
  let i = 0;
  
  while (i < deliCue.length){
    line.push(``+[i+1]+`. `  +deliCue[i]); 
    i++;
  }
  
  if (deliCue.length === 0){
    return "The line is currently empty.";
  }
     else {
      return (`The line is currently: ` + line.join(`, `) );
  }

}