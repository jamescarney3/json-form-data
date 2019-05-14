
export default class JSONFormData {
  constructor(node) {
    try {
      if (!node) {
        throw new Error('JSONFormData constructor must be passed a form element');
      }

      if (node.tagName !== 'FORM') {
        throw new Error('JSONFormData constructor must be passed a form element');
      }
      
      this._data = {};
    }
    catch (e) {
      // istanbul ignore next
      // this is test and debug environment specific behavior
      if (process.env.NODE_ENV === 'debug' || process.env.NODE_ENV === 'test') {
        console.error(e);
      }
    }
  }
}
