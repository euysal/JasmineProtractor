var htmlRport=require('protractor-jasmine2-html-reporter');  
exports.config = {
 directConnect:true,

  capabilities: {
    'browserName': 'chrome'
  },
  
  framework: 'jasmine',

  specs: ['./src/jasmineDemo/spec.js'],
	
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
    
  onPrepare:function(){  
		browser.driver.manage().window().maximize();
		browser.ignoreSynchronization=true;
		browser.driver.manage().timeouts().implicitlyWait(10000);
		
		jasmine.getEnv().addReporter(
	       	 new htmlRport({
	         savePath: 'htmlReport/screenshots',
	         takeScreenshots: true
	        	  
	        })
	 	 );
  }
  
};
