class BadRequestException extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequest";
    this.message = message;
    this.code = 400;
  }

  getCode() {
    return this.code;
  }

  getResponse() {
    return {
      success: false,
      code: this.code,
      error: this.name,
      message: this.message
    };
  }
}

class UnauthorizedException extends Error {
  constructor(message) {
    super(message);
    this.name = "Unauthorized";
    this.message = message;
    this.code = 401;
  }

  getCode() {
    return this.code;
  }

  getResponse() {
    return {
      success: false,
      code: this.code,
      error: this.name,
      message: this.message
    };
  }
}

class ForbiddenException extends Error {
  constructor(message) {
    super(message);
    this.name = "Forbidden";
    this.message = message;
    this.code = 403;
  }

  getCode() {
    return this.code;
  }

  getResponse() {
    return {
      success: false,
      code: this.code,
      error: this.name,
      message: this.message
    };
  }
}

class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFound";
    this.message = message;
    this.code = 404;
  }

  getCode() {
    return this.code;
  }

  getResponse() {
    return {
      success: false,
      code: this.code,
      error: this.name,
      message: this.message
    };
  }
}

class ConflictException extends Error {
  constructor(message) {
    super(message);
    this.name = "Conflict";
    this.message = message;
    this.code = 409;
  }

  getCode() {
    return this.code;
  }

  getResponse() {
    return {
      success: false,
      code: this.code,
      error: this.name,
      message: this.message
    };
  }
}

class InternalServerErrorException extends Error {
  constructor(message) {
    super(message);
    this.name = "InternalServerError";
    this.message = message;
    this.code = 500;
  }

  getCode() {
    return this.code;
  }

  getResponse() {
    return {
      success: false,
      code: this.code,
      error: this.name,
      message: this.message
    };
  }
}

module.exports = {
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
}