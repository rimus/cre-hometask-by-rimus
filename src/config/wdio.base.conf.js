export const config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  // ============
  // Capabilities
  // ============
  maxInstances: 2,

  capabilities: [
    { browserName: 'chrome' },
    { browserName: 'firefox' },
  ],

  // ===================
  // Test Configurations
  // ===================
  logLevel: 'info',
  bail: 0,

  // Base URL configuration with environment support
  baseUrl: 'https://saucedemo.com',

  // Timeouts
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  // ===================
  // Test Output
  // ===================
  reporters: [
    'spec',
  ],

  // ===================
  // Screenshots
  // ===================
  screenshotPath: './screenshots/',

  // =====
  // Hooks
  // =====

  /**
   * Gets executed before test execution begins
   */
  before: async function (capabilities, specs) {
    await browser.maximizeWindow();
  },

  /**
   * Gets executed after all tests are done
   */
  after: async function (result, capabilities, specs) {
    // Cleanup logic here if needed
  },

  /**
   * Function to be executed after a test (in Mocha/Jasmine)
   */
  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    // Take screenshot on failure
    if (!passed) {
      await browser.takeScreenshot();
    }
  },

  /**
   * Runs after a Cucumber Step (for Cucumber framework)
   */
  afterStep: async function (step, scenario, result, context) {
    // Take screenshot on step failure
    if (!result.passed) {
      await browser.takeScreenshot();
    }
  }
};
