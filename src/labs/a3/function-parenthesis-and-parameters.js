function ParanthesisAndParameters(){
    const square = a => a * a;
    const plusOne = a => a + 1;
    
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <>
          <h2>Paranthesis and parameters</h2>
          twoSquared = {twoSquared} <br />
          square(2) = {square}<br/>
          threePlusOne = {threePlusOne}<br/>
          plusOne(3) = {plusOne}<br/>
        </>
      );
      
}

export default ParanthesisAndParameters;