class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() { }

  run() {
    this.setUp();
    const method = this[this.name].bind(this);
    method();
    this.tearDown();
  }

  tearDown() { }
}

class WasRun extends TestCase {
  constructor(name) {
    super(name);
    // this.wasRun;
  }

  setUp() {
    this.log = 'setUp ';
  }

  testMethod() {
    this.log = this.log + 'testMethod ';
  }

  tearDown() {
    this.log = this.log + 'tearDown ';
  }
}

class TestCaseTest extends TestCase {
  constructor(name) {
    super(name)
  }

  testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run();
    console.assert('setUp testMethod tearDown ' === test.log);
  }
}

new TestCaseTest('testTemplateMethod').run();
