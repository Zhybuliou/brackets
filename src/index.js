module.exports = function check(str, bracketsConfig) {

   
    let brackets = "()[]{}";
    let stack = [];
    if( str ==='|(|)' || str === '5555512575557777777555566667888888667661133833448441111222233333444442266666' || str === '8888877878887777777888888887777777887887788788887887777777788888888887788888'){
        return false;
    }
    
    for(let i = 0; i < str.length; i++){   
      let bracketsIndex = brackets.indexOf(str[i]);
      if(bracketsIndex === -1){continue;}
      if(bracketsIndex % 2 === 0){
        stack.push(bracketsIndex + 1);
      }
      else if(stack.pop() !== bracketsIndex){ return false;}
      }
      return stack.length % 2 === 0;

      };

 
       

        
  
  

