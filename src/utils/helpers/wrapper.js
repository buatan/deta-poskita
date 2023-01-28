class Data {
  constructor(data = {}, meta, message = 'OK', code = 200) {
    this.data = data;
    this.meta = meta;
    this.message = message;
    this.code = code;
  }

  getCode() {
    return this.code;
  }

  getResponse() {
    return {
      success: true,
      code: this.code,
      data: this.data,
      message: this.message,
      meta: this.meta,
    };
  }
}

module.exports = {
  Data,
}