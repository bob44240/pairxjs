/**
 *
 * Update the fields of an object based on a specification object.
 *
 * @export
 * @param {*} x object to update
 * @param {*} spec a specifications object with key-value pairs for fields to be updated
 * @return {*} the updated object
 */
export function updateObject(x:any, spec:any ):any {
  // console.log(x);
  // console.log(spec);
    Object.keys(spec).forEach((key,index) => {

      // console.log(key,index);
      // console.log(x,x.hasOwnProperty(key))
      if (x.hasOwnProperty(key)) {
        x[key] = spec[key];
      } else {

           console.log(x);
        console.log(key);
        console.log(spec);
          throw new Error("Attempted to set invalid property." + key)
      }
    });

    return x;
};
