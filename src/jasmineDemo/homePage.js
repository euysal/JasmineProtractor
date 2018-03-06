var homePage= function(){
	
	this.validateHomePage=function(){
		expect(element(by.model("yourName")).isPresent()).toBeTruthy();
		expect(element(by.model("todoList.todoText")).isPresent()).toBeTruthy();
		console.log("\"Name\" & \"list\" textbox present");
		browser.sleep(500);
		return this;
	}
	
	this.enterName= function(name){
		element(by.model("yourName")).sendKeys(name);
		browser.sleep(2000);
		console.log(name + " entered");
		return this;
	}
	
	this.enterPoint= function(point){
		element(by.model("todoList.todoText")).sendKeys(point);
		browser.sleep(2000);
		console.log(point + " point entered");
		var btn = element(by.css('[value="add"]'));
	    btn.click();
		browser.sleep(2000);
		console.log(point + " added");
		return this;
	}
	
	this.validateName=function(name){
		var greeting=element(by.binding('yourName'));
        browser.sleep(2000);
	    expect(greeting.getText()).toEqual('Hello '+name+'!');
	    browser.sleep(2000);
	    console.log("we said Hello to "+name);
		return this;
	}
	
	this.validateLastestList=function(point){
		browser.manage().timeouts().implicitlyWait(5000);
		element.all(by.repeater("todo in todoList.todos")).last().getText().then(function(text){
			var stringText = text.toString();//used to avoid '[]'
			console.log("Last point in the list: "+stringText);
			expect(stringText).toContain(point);
		});
		console.log("Lastest point added succesfully");
		browser.sleep(2000);
		return this;
	}
	
}
module.exports=new homePage();