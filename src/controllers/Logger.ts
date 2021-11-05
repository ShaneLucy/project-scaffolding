export default class Logger {
  static info(message: any) {
    console.log("\x1b[37m%s\x1b[0m", message);
  }

  static success(message: any) {
    console.log("\x1b[32m%s\x1b[0m", message);
  }

  static error(message: any) {
    console.error("\x1b[31m%s\x1b[0m", message);
  }
}