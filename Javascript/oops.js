//    single level inheritance.
function parent() {
    this.name = "James";
    this.email = "james@gmail.com";
    this.mobile = 23432432;
    
    this.cals = function() {
        return "<h2>Ph: "+this.mobile+"</h2>";
    }

}
//prototype: adding parent information into child
parent.prototype.func1 = function() {
    document.getElementById("div1").innerHTML += "Name : "+this.name+"<br> Email: "+this.email+"<br>"+this.cals();
}

// func1();//erros
var obj = new parent();// creation of an object and initialization of object
//parent is a constructor