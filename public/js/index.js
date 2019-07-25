function validateForm() {
    var x = document.forms["comment"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else {
        var x = document.forms["comment"]["address"].value;
        if (x == "") {
            alert("Address must be filled out");
            return false;
        } else {
            var x = document.forms["comment"]["phone"].value;
            if (x == "") {
                alert("Phone number must be filled out");
                return false;
            } else if (!phoneValue.value.match(/^\d{10}$/)) {
                alert("Phone number not valid");
                return false;
            } else {
                var x = document.forms["comment"]["email"].value;
                if (x == "") {
                    alert("Email must be filled out");
                    return false;
                } else if (emailValue.validity.typeMismatch) {
                    alert("Email not valid");
                    return false;
                } else {
                    var x = document.forms["comment"]["comments"].value;
                    if (x == "") {
                        alert("Comment must be filled out");
                        return false;
                    } else {
                        post();
                        return false;
                    }
                }
            }
        }

    }
}
var post = function () {
    var email = document.getElementById('emailValue');
    alert('The comment was submitted and an email confirmation was sent to ' + email.value);
    form.reset();
    return false;
}