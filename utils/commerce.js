import Commerce from '@chec/commerce.js';
let commerce = null;
function getCommerce(commercePublicKey) {
  if (commerce) {
    return commerce;
  } else {
    const publicKey = commercePublicKey || 'pk_test_249518277b9250eee50b2f33a3ce567f671a4e14740ec';
    const devEnvironment = process.env.NODE_ENV === 'development';
    if (devEnvironment && !publicKey) {
      throw Error('Commerce public API key not found.');
    }
    commerce = new Commerce(publicKey, devEnvironment);
    return commerce;
  }
}

export default getCommerce;
