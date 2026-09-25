//Conditional Rendering (Null): Render nothing if a data array is empty (prevent broken UI).
const user = [];

function ConditionalNull() {
  return;
  {
    user.length === 0 && null;
  }
}

export default ConditionalNull;
