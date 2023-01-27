class Data {
  constructor(data = {}, error, meta) {
    this.data = data;
    this.meta = meta;
    this.error = error;
  }

  getCode() {
    return 200;
  }

  getResponse() {
    return {
      success: true,
      code: 200,
      data: this.data,
      meta: this.meta,
      error: this.error,
    };
  }
}

module.exports = {
  Data,
}