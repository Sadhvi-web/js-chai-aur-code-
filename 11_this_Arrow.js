// this keyword
const user = {
    username : 'Sadhvi',
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
        
    }
}
user.welcomeMessage()   // Output: Sadhvi , welcome to website
user.username = 'Sadhu'
user.welcomeMessage()   // Output: Sadhu , welcome to website