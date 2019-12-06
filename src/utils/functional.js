
function composeP(...args) {
    return args.reduce((accumulator, currentFunction) => async (...params) => {
      const result = await currentFunction(...params);
      return accumulator(result);
    });
  }
  
export default composeP;