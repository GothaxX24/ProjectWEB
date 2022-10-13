<html>
    <head>
        <title> Sign Up </title>
    <style>
        Body {  
            font-family: Calibri, Helvetica, sans-serif;  
            background-color: blue;  
            }  
        button {   
            background-color: #4CAF50;   
            width: 100%;  
            color: white;   
            padding: 15px;   
            margin: 10px 0px;   
            border: none;   
            cursor: pointer;   
        }   
        form {   
            border: 3px solid #f1f1f1;   
        }   
        input[type=text], input[type=password] {   
            width: 100%;   
            margin: 8px 0;  
            padding: 12px 20px;   
            display: inline-block;   
            border: 2px solid green;   
            box-sizing: border-box;   
        }  
        button:hover {   
            opacity: 0.7;   
        }   
        .cancelbtn {   
            width: auto;   
            padding: 10px 18px;  
            margin: 10px 5px;  
        }   

        .container {   
            padding: 25px;   
            background-color: lightblue;  
        }   
    </style>
    </head>
    <body>
        <center> <h1> Create your account: </h1> </center>
        <form>
            <div>
              <label>Username : </label>   
                <input type="text" placeholder="Enter Username" name="username" required>  
                       
            </div>
                <input type="text" placeholder="Enter Username" name="username" required>  
            <div>
                <label>Password : </label> 
            </div>
            <div>
                <input type="password" placeholder="Enter Password" name="password" required>  
            </div>
            <div>
                <input type="confirm password" placeholder="Confirm Password" name="confirm password" required>
            </div>
            <div>
                <button type="log in">Login</button>  
            </div>
            <div>
            </div>
        </form>
    </body>
</html>