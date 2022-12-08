
function validate()

{
    var name= document.getElementById("name").value
    var email= document.getElementById("email").value 
    var password= document.getElementById("password").value
    var confirmpassword= document.getElementById("confirmpassword").value

    checkname(name)
    checkemail(email)
    checkpassword(password)
    checkconfirmpassword(confirmpassword , password)
    
}

function checkname(name)
{
  if(name.length >8)
  {
      document.getElementById('name').classList. add('success')
      document.getElementById('name').classList. replace('error','success')
      document.getElementById('name_error').innerHTML=''
  }
 else
 {
     document.getElementById('name').classList.add('error')
     document.getElementById('name_error').innerText='enter a name with 8 letters'
 }

}

function checkemail(email)
{
  if(email.length >8 && email.include ('@gmail.com'))
  {
      document.getElementById('email').classList. add('success')
      document.getElementById('email').classList. replace('error','success')
      document.getElementById('email_error').innerHTML=''
  }
 else
 {
     document.getElementById('email').classList. add('error')
     document.getElementById('email_error').innerText='email must include @gmail.com and min length should be 8'
 }-

}

function checkpassword(password)
{
  if(password.length >8 && username.include ('.'))
  {
      document.getElementById('password').classList. add('success')
      document.getElementById('password').classList. replace('error','success')
      document.getElementById('password_error').innerHTML=''
  }
 else
 {
     document.getElementById('password').classList.add('error')
     document.getElementById('password_error').innerText='min 8 charcters and should include .'
 }

}

function checkconfirmpassword(confirmpassword, password)
{
  if(confirmpassword==password && password != '')
  {
      document.getElementById('confirmpassword').classlist. add('success')
      document.getElementById('confirmpassword').classList. replace('error','success')
      document.getElementById('confirmpassword_error').innerHTML=''
  }
 else
 {
     document.getElementById('confirmpassword').classlist.add('error')
     document.getElementById('confirmpassword_error').innerText='passwords do not match'
 }

}
