//home page sign in account steps
//step-1: get the id from input number field
document.getElementById("signin-btn")
    .addEventListener("click", () => {
        const inputUserName = document.getElementById('input-username');
        const inputValueOfName = inputUserName.value;
        console.log(inputValueOfName);

        //step-2: get the id from input password field
        const inputPassword = document.getElementById("input-password");
        const inputValueOfPassword = inputPassword.value;
        console.log(inputValueOfPassword);

        //step-3: match username && password 
        //step-4: if signin match true-> alert () + bring home page
        if (inputValueOfName === 'admin' && inputValueOfPassword === 'admin123') {
            alert("Sign in Successfully" );
            window.location.assign("./home.html");
        }
        else{
         //step-4: if login match false-> alert () 
        alert("Sign in Failed");
        return;
    }
    })