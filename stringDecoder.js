const decoder = code => {
    let result = [];
  
    for (let i = 0; i < code.length; i++) {
      if (!isNaN(+code[i])) {
        i += +code[i];
      } else {
        result.push(code[i]);
      }
    }
  
    return result.join('');
  };
  
  console.log(decoder('0h2xce5ngbrdy'));
  console.log(decoder('3vdfn'));
  console.log(decoder('0r'));
  console.log(decoder('2bna0p1mp2osl0e'));
  console.log(decoder('0y4akjfe0s'));
  
  // an alternate solution:
  const decoderBackwards = code => {
    let result = [code[code.length -1]];
  
    for (let i = code.length - 2; i > 1; i--) {
      if (!isNaN(+code[i])) {
        result.unshift(code[i - 1]);
      }
    }
  
    return result.join('');
  };
  
  console.log(decoderBackwards('0h2xce5ngbrdy'));
  console.log(decoderBackwards('3vdfn'));
  console.log(decoderBackwards('0r'));
  console.log(decoderBackwards('2bna0p1mp2osl0e'));
  console.log(decoderBackwards('0y4akjfe0s'));