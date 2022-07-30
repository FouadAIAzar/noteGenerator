// We need this to create a log of base 2. The fact that math doesn't
// have a native function to do this is sad. We ay not need it, but it's here.
function log(base, number) {
    return Math.log(number) / Math.log(base);
  }
  
  //This is not a robust function. It has one parameter,
  //which it will define as A4. It will calculate all frequencies
  //using f(x) = x*2^(n/12). If the octave register is below
  //4, then n will be negative, otherwise positive.
  //This function will return a dictionary with 
  //the note name and its register as the key, and the
  //frequency as the value.  
  
  function createFreqReference(referenceFrequency=440){
      noteFrequencies = {};
      octaveRegister = -2;
      noteName = 0;
      range = Math.abs((9-octaveRegister+1))*12;
      n = range/2;
      romanLetters = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#']
      
      for(let i=0; i<range; i++){
          key = romanLetters[noteName] + octaveRegister;
          noteFrequencies[key] = referenceFrequency*Math.pow(2,(i-n)/12);
          noteName++;
          if(noteName == 12){
              octaveRegister++;
              noteName = 0;
          }
      }
      return noteFrequencies
  }
  
f1 = createFreqReference(440)
//console.log(f1) //for testing
  