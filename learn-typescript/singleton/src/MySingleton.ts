// MySingleton.ts
class MySingleton {
  private static instance: MySingleton;

  private constructor() {
    // 私有构造函数，防止外部实例化
  }

  static getInstance(): MySingleton {
    if (!this.instance) {
      this.instance = new MySingleton();
    }
    return this.instance;
  }

  test(): void {
    console.log("test test test");
  }
  // 其他方法和属性...
}

// export default MySingleton;