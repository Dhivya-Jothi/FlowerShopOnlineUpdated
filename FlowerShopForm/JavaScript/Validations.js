

function ValidateCardNumber() {  //validating the card number
    var cardnum = document.getElementById("txtCardNumber");
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var number = regex.test(cardnum.value);
    if (!number) {
        document.getElementById("cardNumberValid").style.display = "block";
        document.getElementById("txtcardValid").style.display = "block";
        cardnum.focus();
        cardnum.value=null;   
    }
    else {
        document.getElementById("cardNumberValid").style.display = "none"
        document.getElementById("txtcardValid").style.display = "none";    
    }
}

 function ValidateSecurityCode() {//validating the security code
        var security = document.getElementById("txtSecurityCode");
        var regex = /^[0-9]{3}$/;
        var secureNumber = regex.test(security.value);
        if (!secureNumber) {
            document.getElementById("securityCodeValid").style.display = "block";
            document.getElementById("txtcodeValid").style.display = "block";
            security.focus();
            security.value=null;
        }
        else {
            document.getElementById("securityCodeValid").style.display = "none"
             document.getElementById("txtcodeValid").style.display = "none"
        }
    }

      function ValidateName() {//Validating the name
        var userName = document.getElementById("txtCardholderName");
        var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        var name = regex.test(userName.value);
        if (!name) {
            document.getElementById("nameValid").style.display = "inline";
            userName.focus();
            userName.value=null;

        }
        else {
            document.getElementById("nameValid").style.display = "none"
        }
    }


     function ValidateAddress1() {//Validating the address1
       
        var address = document.getElementById("txtAddress1");
        var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        var validAddress = regex.test(address.value);
        if (!validAddress) {
            document.getElementById("address1Valid").style.display = "block";
            document.getElementById("txtAddressValid").style.display = "block";
            address.focus();
            address.value=null;
        }
        else {
            document.getElementById("address1Valid").style.display = "none"
            document.getElementById("txtAddressValid").style.display = "none"
        }
    }

    function ValidateAddress2() {//validating the address2
    
        var address1 = document.getElementById("txtAddress2");
        var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        var validAddress1 = regex.test(address1.value);
          if (!validAddress1) {
            document.getElementById("address2Valid").style.display = "block";
            document.getElementById("txtAddress2Valid").style.display = "block";
            address1.focus();
            address1.value=null;
        }
        else {
            document.getElementById("address2Valid").style.display = "none"
            document.getElementById("txtAddress2Valid").style.display = "none"
        }
    }

      function ValidateAddress3() {//Validating the address3
        var address3 = document.getElementById("txtAddress3");
        var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        var validAddress3 = regex.test(address3.value);
       if (!validAddress3) {
            document.getElementById("address3Valid").style.display = "block";
            document.getElementById("txtAddress3Valid").style.display = "block";
            address3.focus();
            address3.value=null;
        }
        else {
            document.getElementById("address3Valid").style.display = "none"
            document.getElementById("txtAddress3Valid").style.display = "none"
        }
    }

    function ValidateCity() {//Validating the city
    
        var city = document.getElementById("txtCity");
        var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        var validCity = regex.test(city.value);
        if (!validCity) {
            document.getElementById("cityValid").style.display = "block";
             document.getElementById("txtCityValid").style.display = "block";
             city.focus();
            city.value=null;
        }
        else {
            document.getElementById("cityValid").style.display = "none"
            document.getElementById("txtCityValid").style.display = "none"
        }
    }
    
    function ValidateRegion() {//Validating the region
        var region = document.getElementById("txtRegion");
        var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        var validRegion = regex.test(region.value);
         if (!validRegion) {
            document.getElementById("regionValid").style.display = "block";
            document.getElementById("txtRegionValid").style.display = "block";
             region.focus();
            region.value=null;
        }
        else {
            document.getElementById("regionValid").style.display = "none"
            document.getElementById("txtRegionValid").style.display = "none";
        }
    }

    function ValidatePostCode() {//validating the postcode
        var pin = document.getElementById("txtPostCode");
        var regex = /^[0-9]{6}(?:-[0-9]{4})?$/;
        var validPin = regex.test(pin.value);
        if (!validPin) {
            document.getElementById("postCodeValid").style.display = "block";
            document.getElementById("txtPostValid").style.display = "block";
            pin.focus();
            pin.value=null;
        }
        else {
            document.getElementById("postCodeValid").style.display = "none"
             document.getElementById("txtPostValid").style.display = "none"
        }
    }

function ValidatePhoneNo() {//validating the phonenumber
        var phone = document.getElementById("txtTelephone");
        var regex = /^[6789]\d{9}$/;
        var validPhone = regex.test(phone.value);
        if (!validPhone) {
        document.getElementById("phoneValid").style.display = "block";
        document.getElementById("txtTelephoneValid").style.display = "block";
        phone.focus();
        phone.value=null;
        }
        else {
            document.getElementById("phoneValid").style.display = "none"
             document.getElementById("txtTelephoneValid").style.display = "none";
        }
    }

function ValidateFax() {//validating the fax
        var fax = document.getElementById("txtFax");
        var regex = /^\+?[0-9]{6,}$/;
        var ValidFax=regex.test(fax.value);
        if (!ValidFax ){
        document.getElementById("faxValid").style.display = "block";
        document.getElementById("txtFaxValid").style.display = "block";
        fax.focus();
        fax.value=null;
        }
        else {
            document.getElementById("faxValid").style.display = "none"
             document.getElementById("txtFaxValid").style.display = "none"
        }
}

  function ValidateEmail() {//validating the email
    
        var mail = document.getElementById("txtEmail");
        var regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
        var validMail = regex.test(mail.value);
        if (!validMail) {
            document.getElementById("mailIdValid").style.display = "block";
            document.getElementById("txtmailValid").style.display = "block";
            mail.focus();
            mail.value=null;
        }
        else {
            document.getElementById("mailIdValid").style.display = "none"
             document.getElementById("txtmailValid").style.display = "none";
        }
    }

    function MakePayment(){//validating totally,all the feilds
        var pinPay = document.getElementById("txtPostCode").value;
        var cardPay = document.getElementById("txtCardNumber").value.length;     
        var securityPay = document.getElementById("txtSecurityCode").value.length;
        var userNamePay = document.getElementById("txtCardholderName").value.length;
        var addressPay = document.getElementById("txtAddress1").value.length;
        var cityPay = document.getElementById("txtCity").value.length;
                
          
        var mailPay = document.getElementById("txtEmail").value.length;
        if((pinPay!=0)&&(cardPay!=0)&&(securityPay!=0)&&(userNamePay!=0)&&(addressPay!=0)
         &&(cityPay!=0)&&(mailPay!=0))
        {
            alert("Your Payment is Successfull!");
        }
        else
        {
            alert("Invalid, Fill out the feilds");
        }
       
    }

    function StartAgain(){
        location.reload();
    }
    function Cancel(){
        location.reload();
    }