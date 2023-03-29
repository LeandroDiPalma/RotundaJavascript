/* 
Zoo Exercise
We are building a zoo inside a computer. Each animal species in our zoo has lots
of different, particular, behaviors, but all animals talk to each other in a similar
way. Specifically, they all implement a speak method, the output of which is the
arbitrary input string interspersed with an "animal sound" that is particular to that
type of animal. For example, the lion's speak function behaves like so:
 lion.speak( "I'm a lion" );
 "I'm roar a roar lion roar"
The tiger's speak function behaves similarly but with a different sound:
 tiger.speak( "Lions suck" );
 "Lions grrr suck grrr"
Please write logic and classes to support our zoo in JavaScript (using whatever
class model you like) with attention to code structure and readability.
*/
class Animal {
    constructor(sound) {
      this.sound = sound;
    }
  
    speak(words, delimiter = ' ') {
        if (typeof words !== 'string') {
          throw new TypeError('words parameter must be a string');
        }
    
        try {
          return words.split(delimiter).join(` ${this.sound} `) + ` ${this.sound}`;
        } catch (e) {
          console.error(`Error in speak method: ${e.message}`);
          return '';
        }
      }
  }
  
  class Lion extends Animal {
    constructor() {
      super("roar");
    }
  }
  
  class Tiger extends Animal {
    constructor() {
      super("grrr");
    }
  }
  
  const lion = new Lion();
  console.log(lion.speak("I'm a lion")); 
  
  const tiger = new Tiger();
  console.log(tiger.speak("Lions suck")); 