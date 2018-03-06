var user=require('./homePage.js');
var data=require('./getData.json');

describe('Welcome to AngularJS website for Jasmine demo', function(){
	var name=data.name;
	var list1=data.list[0];
	var list2=data.list[1];
	var list3=data.list[2];
	var list4=data.list[3];
	
	it('User should get hello after entering name succesfully', function(){
		browser.get(data.url);
		browser.manage().window().maximize();
		user.validateHomePage();
		user.enterName(name);
		user.validateName(name);
	});
	
    it('User should add list point in the list succesfully', function(){
    	browser.get(data.url);
    	user.enterPoint(list1);
    	user.validateLastestList(list1);
    	
    	user.enterPoint(list2);
    	user.validateLastestList(list2);
    	
    	user.enterPoint(list3);
    	user.validateLastestList(list3);
    	
    	user.enterPoint(list4);
    	user.validateLastestList(list4);
	});
    
});