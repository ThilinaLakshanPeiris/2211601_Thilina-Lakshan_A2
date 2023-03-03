// users array
const users = [
    {
      username: "User1",
      password: "u12"
    },
    {
      username: "User2",
      password: "u23"
    },
    {
      username: "User3",
      password: "u34"
    }
  ];

//   when press the login button in the index.html this function will run
    function login(entered_name , entered_pass){
       User_have = false;
    
        for(i = 0; i<users.length; i++ ){
            // checkin the entered user name and password is correct
            if(users[i].username == entered_name && users[i].password == entered_pass){
                this.User_have = true;
                break;
            }
        };

        if(this.User_have == true){
                alert(entered_name +' is there')
                const username_value = document.getElementById('username').value;
                const url = "home.html?username_value=" + encodeURIComponent(username_value);
                window.location.href = url;
        }else{
            if (document.getElementById('username').value != "" && document.getElementById('password').value == ""){
                //  when username not empty and password feild empty this code will run
                document.getElementById('username_err_msg').style.display = "block"
                // alert msg will display
                alert("please enter password !!!")
                document.getElementById('username_err_msg').style.display = "none"
            }
            else if (document.getElementById('username').value == "" && document.getElementById('password').value != ""){
                // when username empty and password feild not empty this code will run
                document.getElementById('password_err_msg').style.display = "block"
                // alert msg will display
                alert("please enter username !!!")
                document.getElementById('password_err_msg').style.display = "none"
            }
            else if(document.getElementById('username').value == "" && document.getElementById('password').value == ""){
                // when username empty and password feild empty this code will run
                // alert msg will display
                alert("please enter Username & password in the fields. !!!!!")
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            }
            else if(document.getElementById('username').value != "" && document.getElementById('password').value != ""){
                // when username not empty and password feild not empty this code will run
                // alert msg will display
                alert("There is no Username like " +document.getElementById('username').value)
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            };
        }  
    };
   
    //   when press the logout button in the home.html this function will run

function log_out(){
    window.location.href = "index.html";
    document.getElementById('username').value="";
    document.getElementById('password').value="";
      
};

    //   when press the create button in the home.html this function will run

function create(){
    document.getElementById('User_input').style.display = "block"
    document.getElementById('create_user_btn').style.display = "none"
};

    //   when press the signin button in the index.html this function will run

function signin_btn(){
    document.getElementById('nav_btn').value = "Log in";
    document.getElementById('headding').value = "Sign in";
    document.getElementById('login_btn').value = "Sign in";

};

    //   when press the create user button in the home.html this function will run

function create_user(){

    username = document.getElementById('new_username').value;
    password = document.getElementById('new_password').value;

    const new_user ={username,password};
    users.push(new_user);
    
        console.log(users);
        debugger;
};




