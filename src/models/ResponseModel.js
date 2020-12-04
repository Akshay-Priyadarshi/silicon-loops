export default class ResponseModel {
  data;
  errors;

  constructor({ data = null, errors = null }) {
    this.data = data;
    this.errors = errors;
  }
}
