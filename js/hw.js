/*
         Email:utsav_patel@student.uml.edu
           Name: Utsav Patel
           I am a junior/senoir at Umass Lowell in  91.61 GUI Programming I
           91.461 Assignment:  Creating multiplication table error
           Utsav Patel, UMass Lowell Computer Science, upatel@cs.uml.edu
           Copyright (c) 2019 by Utsav Patel.  All rights reserved.  May be
           freely copied or excerpted for educational purposes with credit to
           the author.
           updated by UP on december 1st, 2019 at 9:23 AM
           w3schools.com was used for references
*/
/*This is adding the greater than method which was created by the jquery validation
team and a plugin which was found on jqueryvalidation
*/
$().ready(function () {
    $.validator.addMethod( "greaterThan", function( value, element, param ) {
      var target = $( param );
      if ( this.settings.onfocusout && target.not( ".validate-greaterThan-blur" ).length ) {
          target.addClass( "validate-greaterThan-blur" ).on( "blur.validate-greaterThan", function() {
              $( element ).valid();
          } );
      }
      return Number(value) >= Number(target.val());

    });
/*This is setting the rules of the form to validate and create a error message below
the rules and messages will be for empty blanks, invalid numbers, and/or greater value*/

      		$("#myform").validate({
            rules: {
                firstHorizontal: {
                required: true,
                min:-250,
                max:250,
                number: true
            },
            lastHorizontal: {
                required: true,
              number: true,
              min:-250,
              max:250,
              greaterThan: '#firstHorizontal'
            },
            firstVertical: {
              required: true,
              min:-250,
              max:250,
              number: true
            },
            lastVertical: {
              required: true,
              min:-250,
              max:250,
              number: true,
              greaterThan:'#firstVertical'
            }
        },
          messages: {
            firstHorizontal: {
              required: "Please enter the  number",
              min:"Enter greater than -250",
              max:"Enter less than 250",
              number: "The number is Invalid"

            },

            lastHorizontal: {
              required:  "Please enter the  number",
              min:"Enter greater than -250",
              max:"Enter less than 250",
              number: "The number is Invalid",

              greaterThan: "Please enter a greater number than previous entered"
              },
              firstVertical: {
                required:"Please enter the  number",
                min:"Enter greater than -250",
                max:"Enter less than 250",

                number:  "The number is Invalid"

              },
              lastVertical: {
                required:  "Please enter the  number",
                min:"Enter greater than -250",
                max:"Enter less than 250",
                number:  "The number is Invalid",

                greaterThan: "Please enter a greater number than previous entered"
              }
                },
                  //create the table if suceess
                submitHandler: function() {
                  create_outputtable();

        },
        });
  });



          function create_outputtable() {
            /* Stores in the values entered by user*/
            var horizontal = Number(document.getElementById("firstHorizontal").value);
            var secondhorizontal = Number(document.getElementById("lastHorizontal").value);
            var vertical = Number(document.getElementById("firstVertical").value);
            var secondvertical = Number(document.getElementById("lastVertical").value);

          /* outputing the numbers in the table*/

             var outputnumber = "<tr><th> </th>";
             for(var i = horizontal; i <= secondhorizontal; i++){
               outputnumber += "<th>" + i + "</th>";
             }
            /*This will output all the numbers and do the calculation */
             outputnumber += "</tr>";
             for(var j = vertical; j <= secondvertical; j++) {
               outputnumber += "<tr><th>" + j + "</th>";
               for(var x = horizontal; x <= secondhorizontal; x++) {
               outputnumber += "<td>" + j*x + "</td>";
               }
               outputnumber += "</tr>";

             }
             /* Printing the table in the HTML filea*/
/*
        var table = document.getElementById("multipcationtable").innerHTML = outputnumber;
*/
            $('#multipcationtable').html(outputnumber);


}

            /* Extra feature to reset the entered input.
              can be used if input entered wrongly*/
          function reset() {
            document.getElementById("myFormreset").reset();
          }
//this will submit the form when the slider is moved
          function slidertable() {
              $("#myform").submit();
          }

          /*to create the slider help was taken from the jquery ui team demo samples
          In this slide has a range of -250 min to max being 250
          the step the slider takes is 1 with fast
          At the same time, it will change the value in the input function
          As well as continue making the table if it passes all the validation
          like greater number and/or min, max or number is invalid or not*/
          $(function() {
            $("#slider1").slider({
              min: -250,
              max: 250,
              step:1,
              animate: "fast",
              slide: function(event, ui) {
                $("#firstHorizontal").val(ui.value);
                 slidertable();
              }
            });
            $("#firstHorizontal").val($("#slider1").slider("value"));
             slidertable();
          });

          $("#firstHorizontal").change(function() {
              $("#slider1").slider("value", Number(document.getElementById("firstHorizontal").value));
               slidertable();
          });


          $(function() {
            $("#slider2").slider({
              min: -250,
              max: 250,
                step:1,
              animate: "fast",
              slide: function(event, ui) {
                $("#lastHorizontal").val(ui.value);
                 slidertable();
              }
            });
            $("#lastHorizontal").val($("#slider2").slider("value"));
             slidertable();
          });

          $("#lastHorizontal").change(function() {
              $("#slider2").slider("value", Number(document.getElementById("lastHorizontal").value));
               slidertable();
          });


          $(function() {
            $("#slider3").slider({
              min: -250,
              max: 250,
                step:1,
              animate: "fast",
              slide: function(event, ui) {
                $("#firstVertical").val(ui.value);
                 slidertable();
              }
            });
            $("#firstVertical").val($("#slider3").slider("value"));
             slidertable();
          });

          $("#firstVertical").change(function() {
              $("#slider3").slider("value", Number(document.getElementById("firstVertical").value));
               slidertable();
          });


          $(function() {
            $("#slider4").slider({
              min: -250,
              max: 250,
              step:1,
              animate: "fast",
              slide: function(event, ui) {
                $("#lastVertical").val(ui.value);
                 slidertable();
              }
            });
            $("#lastVertical").val($("#slider4").slider("value"));
             slidertable();
          });

          $("#lastVertical").change(function() {
              $("#slider4").slider("value", Number(document.getElementById("lastVertical").value));
               slidertable();
          });
/*
This will increase the counter and get the values which has stored  in the values entered by user
*/

var counter = 1;

function saving() {

  $("#multiplicationtabs").tabs();
    var horizontal = Number(document.getElementById("firstHorizontal").value);
    var secondhorizontal = Number(document.getElementById("lastHorizontal").value);
    var vertical = Number(document.getElementById("firstVertical").value);
    var secondvertical = Number(document.getElementById("lastVertical").value);

  counter++;

            //it will make the tab title of horizontal and secondhorizontal x, by the vertical and secondvertical
            //as well as print the table/output table there as well
            var tablename = "<li class='tab'><a href='#tab-" + counter + "'>" + horizontal +
              " x " + secondhorizontal + " , " + vertical + " x " + secondvertical + "</a>" +
              "<span class='ui-icon ui-icon-circle-close'></span>" + "</li>";

            $("#multiplicationtabs ul").append(tablename);
            $( "#multiplicationtabs" ).append('<div id="tab-' + counter + '">' + $("#multipcationtables").html() + '</div>');

            $("#multiplicationtabs").tabs("refresh");
            $("#multiplicationtabs").tabs("option", "active", -1);


            //it will remove the tabs when the x icon is clicked in the tab
        $("#multiplicationtabs").on( "click", "span.ui-icon-circle-close", function() {
          var tabremoval = $( this ).closest( "li" ).remove().attr( "aria-controls" );

          $( "#" + tabremoval ).remove();
          $("#multiplicationtabs").tabs("refresh");

        });
        }
