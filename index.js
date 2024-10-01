const truthyValue = 'This value is truthy.';
const falseyValue = 0;

!!truthyValue;
console.log(!!truthyValue)

//The JavaScript engine reads from left to right: it sees the first ! and looks to the right to check what we're asking it to invert (!truthyValue). It then sees the second ! and looks to the right again, this time finding our truthyValue variable. At this point, the engine resolves truthyValue to "This value is truthy.", which (as it tells us) is truthy. It then executes the inner ! operator on it. !truthyValue returns false, so instead of !!truthyValue JavaScript is now evaluating !false. Executing the outer ! operator on false returns true.