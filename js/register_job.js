$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var major = $("input#major").val();
            var university = $("input#university").val();
            var graduate_time = $("input#datepicker").val();

            var cheetahMobile = document.getElementById("cheetahMobile").checked;
            var dji = document.getElementById("dji").checked;
            var ehang = document.getElementById("ehang").checked;
            var liaoyuan = document.getElementById("liaoyuan").checked;
            var roboterra = document.getElementById("roboterra").checked;
            var smarking = document.getElementById("smarking").checked;
            var trustLook = document.getElementById("trustLook").checked;
            var tegizn = document.getElementById("tegizn").checked;
            var westlakeVentures = document.getElementById("westlakeVentures").checked;
            var collegeDaily =document.getElementById("collegeDaily").checked;
            var innospring = document.getElementById("innospring").checked;
            var ideaBulbVentures = document.getElementById("ideaBulbVentures").checked;

            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }


            

            var companies = [];
            if(cheetahMobile==true){
                companies.push('cheetahMobile');
            }
            if(dji==true){
                companies.push('dji');
            }
            if(ehang==true){
                companies.push('ehang');
            }
            if(liaoyuan==true){
                companies.push('liaoyuan');
            }
            if(roboterra==true){
                companies.push('roboterra');
            }
            if(smarking==true){
                companies.push('smarking');
            }
            if(trustLook==true){
                companies.push('trustLook');
            }
            if(tegizn==true){
                companies.push('tegizn');
            }
            if(westlakeVentures==true){
                companies.push('westlakeVentures');
            }
            if(collegeDaily==true){
                companies.push('collegeDaily');
            }
            if(innospring==true){
                companies.push('innospring');
            }
            if(ideaBulbVentures==true){
                companies.push('ideaBulbVentures');
            }
            console.log(graduate_time);
            console.log(companies);
            console.log(university);
            console.log(major);
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    companies: companies
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
