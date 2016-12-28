/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true */

$(document).ready(function () {
    "use strict";

    var clicked = 0;
    //ANIMATION FUNCTIONS

    function hideObjectsRight(object) {
        $(object).each(function (index, obj) {
            $(obj).animate({
                right: '-50%',
                bottom: '50%',
            }, 'slow').hide('slow');
        });
    };

    function hideObjectsLeft(object) {
        $(object).each(function (index, obj) {
            $(obj).show().animate({
                right: '150%',
                bottom: '50%',
                height: '0px',
                width: '0px'
            }, 'slow').hide('slow');
        });
    };

    function wait(time) {
        window.setTimeout(function () {
            console.log(time + 'waited');
        }, time);
    }


    //STAGE FUNCTIONS
    var actions = [
        //Add Earth 0
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').show().html('10,000 km').animate({
                height: width * 0.26157,
                bottom: '20%'
            });
            $('#grid').show().css(
                'background-size', '' + width * 0.0262 + 'px ' + width * 0.0262 + 'px, ' + width * 0.0262 + 'px ' + width * 0.0262 + 'px'
            );
            $('#earth').show('slow');
            $('#earth').animate({
                height: width * 0.3333,
                width: width * 0.3333,
                backgroundSize: width * 0.3333,
                right: '50%',
                bottom: '20%',
                fontSize: '5vh'
            }, 'slow');
            $('#jupiter').animate({
                right: '-50%',
                bottom: '50%'
            }).hide('slow');
        },
            //Add Jupiter 1
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').html('10,000 km').animate({
                height: width * 0.07848,
                bottom: '20%'
            });
            $('#earth').animate({
                height: width * 0.1,
                width: width * 0.1,
                backgroundSize: width * 0.1,
                fontSize: width * 0.5,
                right: '75%',
                bottom: '20%',
                fontSize: '5vh'
            }, 'slow');
            $('#jupiter').show('slow');
            $('#jupiter').animate({
                height: width * 1.1,
                width: width * 1.1,
                right: '25%',
                bottom: '20%',
                fontSize: '5vh'
            }, 'slow');
            $('#sun').animate({
                right: '-50%',
                bottom: '50%'
            }).hide('slow');
        },

            //Add Sun 2
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').html('100,000 km').animate({
                height: width * 0.07848,
                bottom: '20%'
            });
            $('#earth').animate({
                height: width * 0.01,
                width: width * 0.01,
                backgroundSize: width * 0.01,
                right: '90%',
                bottom: '20%',
                fontSize: '2vh'
            }, 'slow');
            $('#jupiter').animate({
                height: width * 0.11,
                width: width * 0.11,
                right: '75%',
                fontSize: '2vh'
            }, 'slow');
            $('#sun').show('slow');
            $('#sun').animate({
                height: width * 1.09,
                width: width * 1.09,
                right: '25%',
                bottom: '20%',
                fontSize: '5vh'
            }, 'slow');
            $('#sirius').animate({
                right: '-50%',
                bottom: '50%'
            }, 'slow').hide('slow');
        },

            //Add Sirius 3
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').html('1 mil km').animate({
                height: width * 0.2040,
                bottom: '20%'
            });
            $('#earth').show();
            $('#earth').animate({
                height: width * 0.0026,
                width: width * 0.0026,
                backgroundSize: width * 0.0026,
                right: '95%',
                bottom: '20%',
                fontSize: '.8vh'
            }, 'slow');
            $('#jupiter').animate({
                height: width * 0.022,
                width: width * 0.022,
                right: '90%',
                bottom: '20%',
                fontSize: '.8vh'
            }, 'slow');
            $('#sun').animate({
                height: width * 0.292,
                width: width * 0.292,
                right: '70%',
                fontSize: '5vh'
            }, 'slow');
            $('#sirius').show('slow');
            $('#sirius').animate({
                height: width * 0.5,
                width: width * 0.5,
                right: '25%',
                bottom: '20%',
                fontSize: '5vh'
            }, 'slow');
            $('#pollux').animate({
                right: '-50%',
                bottom: '50%'
            }, 'slow').hide('slow');
        },

        //addPollux 4
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').html('5 mil km').animate({
                height: width * 0.19620,
                bottom: '20%'
            });
            if (width * 0.0005 >= 0.5) {
                $('#earth').show('slow').animate({
                    height: width * 0.0005,
                    width: width * 0.0005,
                    right: '90%',
                    bottom: '20%',
                    fontSize: '.8vh'
                }, 'slow');
            } else {
                $('#earth').animate({
                    right: '150%',
                    bottom: '50%'
                }, 'slow').hide('slow');
            }

            $('#jupiter').show('slow').animate({
                height: width * 0.0055,
                width: width * 0.0055,
                right: '85%',
                bottom: '20%',
                fontSize: '.8vh'
            }, 'slow');
            $('#sun').animate({
                height: width * 0.0568,
                width: width * 0.0568,
                right: '80%',
                bottom: '20%',
                fontSize: '2vh'
            }, 'slow');
            $('#sirius').animate({
                height: width * 0.0958,
                width: width * 0.0958,
                right: '70%',
                bottom: '20%',
                fontSize: '2vh'
            }, 'slow');
            $('#pollux').show('slow');
            $('#pollux').animate({
                height: width * 0.5,
                width: width * 0.5,
                right: '40%',
                bottom: '20%',
                fontSize: '5vh'
            }, 'slow');
            $('#aldebaran').animate({
                right: '-50%',
                bottom: '50%'
            }, 'slow').hide('slow');
        },

        //add Aldebaran 5
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').html('10 mil km').animate({
                height: width * 0.11355,
                bottom: '20%'

            });
            $('#earth').animate({
                right: '150%',
                bottom: '50%'
            }, 'slow').hide('slow');
            $('#jupiter').animate({
                right: '150%',
                bottom: '50%'
            }, 'slow').hide('slow');
            $('#sun').animate({
                height: width * 0.0158,
                width: width * 0.0158,
                right: '85%',
                bottom: '20%',
                fontSize: '.8vh'
            }, 'slow');
            $('#sirius').animate({
                height: width * 0.027,
                width: width * 0.027,
                right: '80%',
                bottom: '20%',
                fontSize: '.8vh'
            }, 'slow');
            $('#pollux').animate({
                height: width * 0.139,
                width: width * 0.139,
                right: '70%',
                bottom: '20%',
                fontSize: '2vh'
            }, 'slow');
            $('#aldebaran').show('slow');
            $('#aldebaran').animate({
                height: width * 0.7,
                width: width * 0.7,
                right: '35%',
                bottom: '20%',
                fontSize: '5vh'
            }, 'slow');
            $('#rigel').animate({
                right: '-50%',
                bottom: '50%'
            }, 'slow').hide('slow');
        },

        //add Rigel 6
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').html('50 mil km').animate({
                height: width * 0.31838435,
                bottom: '20%'

            });
            $('#sun').animate({
                height: width * 0.00886,
                width: width * 0.00886,
                right: '98%',
                fontSize: '.8vh'
            }, 'slow');
            $('#sirius').animate({
                height: width * 0.015,
                width: width * 0.015,
                right: '95%',
                bottom: '20%',
                fontSize: '.8vh'
            }, 'slow');
            $('#pollux').animate({
                height: width * 0.07797,
                width: width * 0.07797,
                right: '90%',
                fontSize: '2vh'
            }, 'slow');
            $('#aldebaran').animate({
                height: width * 0.3916,
                width: width * 0.3916,
                right: '75%',
                bottom: '20%',
                fontSize: '2vh'
            }, 'slow');
            $('#rigel').show('slow');
            $('#rigel').animate({
                height: width * 0.7,
                width: width * 0.7,
                right: '35%',
                bottom: '20%',
                fontSize: '5vh'
            }, 'slow');
            $('#betelgeuse').animate({
                right: '-50%',
                bottom: '50%'
            }, 'slow').hide('slow');
        },

        //add betelgeuse 7
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').html('500 mil km').animate({
                height: width * 0.2875,
                bottom: '20%'

            });
            $('#sun').show().animate({
                height: width * 0.0008,
                width: width * 0.0008,
                right: '98%',
                bottom: '20%',
                fontSize: '.8vh'
            }, 'slow');
            $('#sirius').show().animate({
                height: width * 0.00137,
                width: width * 0.00137,
                right: '95%',
                bottom: '20%',
                fontSize: '.8vh'
            }, 'slow');
            $('#pollux').animate({
                height: width * 0.007,
                width: width * 0.007,
                right: '90%',
                bottom: '20%',
                fontSize: '1vh'
            }, 'slow');
            $('#aldebaran').animate({
                height: width * 0.03536,
                width: width * 0.03536,
                right: '85%',
                bottom: '20%',
                fontSize: '1vh'
            }, 'slow');
            $('#rigel').animate({
                height: width * 0.0632,
                width: width * 0.0632,
                right: '75%',
                bottom: '20%',
                fontSize: '2vh'
            }, 'slow');
            $('#betelgeuse').show('slow');
            $('#betelgeuse').animate({
                height: width * 0.8,
                width: width * 0.8,
                right: '35%',
                bottom: '20%',
                fontSize: '5vh'
            }, 'slow');
            $('#scuti').animate({
                right: '-50%',
                bottom: '50%'
            }, 'slow').hide('slow');
        },

        //add UY 8
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').html('1 bil km').animate({
                height: width * 0.33827,
                bottom: '20%'
            });
            $('#sun').animate({
                right: '150%',
                bottom: '50%'
            }, 'slow').hide('slow');
            $('#sirius').animate({
                right: '150%',
                bottom: '50%'
            }, 'slow').hide('slow');
            $('#pollux').show().animate({
                height: width * 0.00414,
                width: width * 0.00414,
                right: '98%',
                bottom: '20%',
                fontSize: '1vh'
            }, 'slow');
            $('#aldebaran').show().animate({
                height: width * 0.02087,
                width: width * 0.02087,
                right: '95%',
                bottom: '20%',
                fontSize: '1vh'
            }, 'slow');
            $('#rigel').show().animate({
                height: width * 0.0372,
                width: width * 0.0372,
                right: '90%',
                bottom: '20%',
                fontSize: '1vh'
            }, 'slow');
            $('#betelgeuse').show().animate({
                height: width * 0.417,
                width: width * 0.417,
                right: '75%',
                bottom: '20%',
                fontSize: '2vh'
            }, 'slow');
            $('#scuti').show('slow');
            $('#scuti').animate({
                height: width * 0.8,
                width: width * 0.8,
                right: '35%',
                bottom: '20%',
                fontSize: '3vh'
            }, 'slow');
        },

        //add neptune Orbit 9
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').html('2 bil km').animate({
                height: width * 0.06342 * 2,
                bottom: '20%'
            });
            $('#neptuneO').show();
            $('#neptuneO').animate({
                height: width * 0.58669,
                width: width * 0.58669,
                right: '35%',
                bottom: '20%',
                fontSize: '2.5vh',
                marginBottom: '0px'
            }, 'slow');
            $('#pollux').animate({
                right: '150%',
                bottom: '50%'
            }, 'slow').hide('slow');
            $('#aldebaran').animate({
                right: '150%',
                bottom: '50%'
            }, 'slow').hide('slow');
            $('#rigel').animate({
                right: '150%',
                bottom: '50%'
            }, 'slow').hide('slow');
            $('#betelgeuse').animate({
                right: '150%',
                bottom: '50%'
            }, 'slow').hide('slow');
            $('#scuti').show().animate({
                height: width * 0.15,
                width: width * 0.15,
                right: '75%',
                bottom: '20%',
                fontSize: '2vh'
            }, 'slow');
            $('#neptuneO').show('slow');
            $('#neptuneO').animate({
                height: width * 0.58669,
                width: width * 0.58669,
                right: '35%',
                bottom: '20%',
                fontSize: '2.5vh'
            }, 'slow');
        },


            //add Uranus Orbit 10
        function () {
            var width = parseInt($('#space').css("width"), 10);
            var orbit = width * 0.3574;
            actions[9].apply(this, Array.prototype.slice.apply(arguments));
            $('#uranusO').show().animate({
                height: orbit,
                width: orbit,
                right: '35%',
                bottom: '20%',
                marginBottom: ((width * 0.58669) - (orbit)) / 2,
                fontSize: '2vh'
            }, '50');
        },

        //add Saturn Orbit 11
        function () {
            var width = parseInt($('#space').css("width"), 10);
            var orbit = width * 0.1864;
            actions[10].apply(this, Array.prototype.slice.apply(arguments));
            $('#saturnO').show().animate({
                height: orbit,
                width: orbit,
                right: '35%',
                bottom: '20%',
                marginBottom: ((width * 0.58669) - (orbit)) / 2,
                fontSize: '2vh'
            }, '50');
        },

            //add Jupiter Orbit 12
        function () {
            var width = parseInt($('#space').css("width"), 10);
            var orbit = width * 0.1015;
            actions[11].apply(this, Array.prototype.slice.apply(arguments));
            $('#jupiterO').show().animate({
                height: orbit,
                width: orbit,
                right: '35%',
                bottom: '20%',
                marginBottom: ((width * 0.58669) - (orbit)) / 2,
                fontSize: '1vh'
            }, '50');
        },

        //add Asteroid Belt Orbit 13
        function () {
            var width = parseInt($('#space').css("width"), 10);
            var orbit = width * 0.0624;
            actions[12].apply(this, Array.prototype.slice.apply(arguments));
            $('#abO').show().animate({
                height: orbit,
                width: orbit,
                right: '35%',
                bottom: '20%',
                marginBottom: ((width * 0.58669) - (orbit)) / 2,
                fontSize: '1vh'
            }, '50');
        },

        //add Mars Orbit 14
        function () {
            var width = parseInt($('#space').css("width"), 10);
            var orbit = width * 0.02972;
            actions[13].apply(this, Array.prototype.slice.apply(arguments));
            $('#marsO').show().css("border-color", '#FF0000').animate({
                height: orbit,
                width: orbit,
                right: '35%',
                bottom: '20%',
                marginBottom: ((width * 0.58669) - (orbit)) / 2,
                borderTopColor: '#ff0000',
                borderBottomColor: '#ff0000',
                borderLeftColor: '#ff0000',
                borderRightColor: '#ff0000',
                fontSize: '1vh'
            }, '50');
        },

        //add Earth Orbit 15
        function () {
            var width = parseInt($('#space').css("width"), 10);
            var orbit = width * 0.0195;
            actions[14].apply(this, Array.prototype.slice.apply(arguments));
            $('#earthO').show().css("border-color", '#00FFFF').animate({
                height: orbit,
                width: orbit,
                right: '35%',
                bottom: '20%',
                marginBottom: ((width * 0.58669) - (orbit)) / 2,
                borderTopColor: '#0000ff',
                borderBottomColor: '#0000ff',
                borderLeftColor: '#0000ff',
                borderRightColor: '#0000ff',
                fontSize: '1vh'
            }, '50');
        },

        //add Venus Orbit 16
        function () {
            var width = parseInt($('#space').css("width"), 10);
            var orbit = width * 0.01411;
            actions[15].apply(this, Array.prototype.slice.apply(arguments));
            $('#venusO').show().css("border-color", '#FFff00').animate({
                height: orbit,
                width: orbit,
                right: '35%',
                bottom: '20%',
                marginBottom: ((width * 0.58669) - (orbit)) / 2,
                fontSize: '.5vh'
            }, '50');
        },

        //add Mercury Orbit 17
        function () {
            var width = parseInt($('#space').css("width"), 10);
            var orbit = width * 0.0076;
            actions[16].apply(this, Array.prototype.slice.apply(arguments));
            $('#mercuryO').show().css("border-color", '#ff8c00').animate({
                height: orbit,
                width: orbit,
                right: '35%',
                bottom: '20%',
                marginBottom: ((width * 0.58669) - (orbit)) / 2,
                borderTopColor: '#FF8C00',
                borderBottomColor: '#FF8C00',
                borderLeftColor: '#FF8C00',
                borderRightColor: '#FF8C00',
                fontSize: '.5vh'
            }, '50');
        },

        //add Sun dot 18
        function () {
            var width = parseInt($('#space').css("width"), 10);
            var orbit = 1;
            actions[17].apply(this, Array.prototype.slice.apply(arguments));;
            $('#sunO').show().css("border-color", '#ffff00').animate({
                height: orbit,
                width: orbit,
                right: '35%',
                bottom: '20%',
                marginBottom: ((width * 0.58669) - (orbit)) / 2,
                fontSize: '.5vh'
            }, '50');
            $('#neptuneO > #name').css('background-color', 'rgba(0,0,0,0)').html("Neptune<br>Planetary Orbits");
            $('#innerKB').hide();
            $('#outerKB').hide();
        },

        //add kuiper belt 19
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').show().html('5 bil km').animate({
                height: width * 0.16778,
                bottom: '20%'

            });
            //$('#sunO').hide();
            $('#mercuryO').hide();
            $('#venusO').hide();
            $('#earthO').hide();
            $('#marsO').hide();
            $('#abO').hide();
            $('#jupiterO').hide();
            $('#saturnO').hide();
            $('#uranusO').hide();
            $('#sunO').animate({
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.502) / 2,
                zIndex: '5'
            });
            $("#neptuneO").animate({
                width: width * 0.25,
                height: width * 0.25,
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.502) / 2 - (width * 0.25) / 2,
                fontSize: '2vh',
                zIndex: 1
            }, 'slow');
            $("#neptuneO > #name").css('background-color', 'rgba(0,0,0,.8)').html("Neptune<br>Orbit");
            $("#scuti").animate({
                width: width * 0.05773,
                height: width * 0.05773,
                right: "85%"
            });
            $("#innerKB").animate({
                width: width * 0.25,
                height: width * 0.25,
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.502) / 2 - (width * 0.25) / 2,
            }, 'slow').show('slow');
            $("#outerKB").animate({
                width: width * 0.502,
                height: width * 0.502,
                right: "50%",
                bottom: '20%',
                fontSize: '2vh',
                marginBottom: '0'
            }, 'slow').show('slow');
            $("#halley").hide();

        },

        //add halley 20
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').show().html('5 bil km').animate({
                height: width * 0.16778,
                bottom: '20%'

            });
            $('#halley').animate({
                width: width * 0.28883 / 2,
                height: width * 0.02661,
                right: '50%',
                fontSize: '2vh',
                bottom: '20%',
                marginBottom: (width * 0.502) / 2 - (width * 0.02661) / 2,
            }).show();
            $('#halley > #name').css('background-color', 'rgba(0,0,0,.8)');
            $('#sunO').animate({
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.502) / 2,
                zIndex: '5'
            });
            $("#neptuneO").animate({
                width: width * 0.25,
                height: width * 0.25,
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.502) / 2 - (width * 0.25) / 2,
                fontSize: '2vh',
                zIndex: 1
            });
            $("#neptuneO > #name").css('background-color', 'rgba(0,0,0,.8)').html("Neptune<br>Orbit");
            $("#scuti").animate({
                width: width * 0.05773,
                height: width * 0.05773,
                right: "85%"
            });
            $("#innerKB").animate({
                width: width * 0.25,
                height: width * 0.25,
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.502) / 2 - (width * 0.25) / 2,
            }, 'slow').show('slow');
            $("#outerKB").animate({
                width: width * 0.502,
                height: width * 0.502,
                right: "50%",
                bottom: '20%',
                fontSize: '2vh',
                marginBottom: '0'
            }, 'slow').show('slow');
            $("#termShock").hide();
        },

        //add termination shock 21
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').show().html('10 bil km').animate({
                height: width * 0.24124,
                bottom: '20%'

            });
            $('#halley').animate({
                width: width * 0.1948 / 2,
                height: width * 0.0179,
                right: '50%',
                fontSize: '2vh',
                bottom: '20%',
                marginBottom: (width * 0.502) / 2 - (width * 0.0179) / 2,
            }).show();
            $("#neptuneO").animate({
                width: width * 0.1686,
                height: width * 0.1686,
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.5) / 2 - (width * 0.1686) / 2,
                fontSize: '1vh',
                zIndex: 1
            });
            $("#neptuneO > #name").css('background-color', 'rgba(0,0,0,.8)').html("Neptune<br>Orbit");
            $("#scuti").animate({
                width: width * 0.04311,
                height: width * 0.04311,
                right: "85%",
                fontSize: '1vh',
                bottom: '20%',
            }, 'slow').show();
            $("#innerKB").animate({
                width: width * 0.1686,
                height: width * 0.1686,
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.5) / 2 - (width * 0.1686) / 2,
            }, 'slow').show('slow');
            $("#outerKB").animate({
                width: width * 0.2809,
                height: width * 0.2809,
                right: "50%",
                bottom: '20%',
                fontSize: '1vh',
                marginBottom: (width * 0.5) / 2 - (width * 0.2809) / 2,
            }, 'slow').show('slow');
            $("#outerKB > #name").html("Kuiper Belt");
            $("#termShock").animate({
                width: width * 0.5,
                height: width * 0.5,
                right: "50%",
                bottom: '20%',
                fontSize: '2vh',
                marginBottom: '0',
            }, 'slow').show('slow');
            $('#innerOort').hide('slow');

        },

        //add oort cloud begin 22
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').show().html('500 bil km').animate({
                height: width * 0.2785,
                bottom: '20%'

            });
            $('#sunO').hide();
            $('#halley').hide();
            $("#neptuneO").hide();
            hideObjectsLeft('#scuti');
            $("#innerKB").animate({
                width: width * 0.005,
                height: width * 0.005,
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.5) / 2 - (width * 0.005) / 2,
            }, 'slow').fadeIn('slow');
            $("#outerKB").animate({
                width: width * 0.0083,
                height: width * 0.0083,
                right: "50%",
                bottom: '20%',
                fontSize: '1vh',
                marginBottom: (width * 0.5) / 2 - (width * 0.0083) / 2,
            }, 'slow').show('slow');
            $("#outerKB > #name").css('background-color', 'rgba(0,0,0,0)').html(" ");
            $("#termShock").animate({
                width: width * 0.01483,
                height: width * 0.01483,
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.5) / 2 - (width * 0.01483) / 2,
                fontSize: '1vh',
            }, 'slow').show('slow');
            $("#termShock > #name").html("Termination Shock");
            $("#innerOort").animate({
                width: width * 0.5,
                height: width * 0.5,
                right: "50%",
                bottom: '20%',
                fontSize: '3vh',
                zIndex: '1',
                marginBottom: '0'
            }, 'slow').show('slow');
            $('#innerOort > #name').html("Oort Cloud Begins")
            $('#outerOort').fadeOut('slow');
        },

        //add oort cloud 23
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').show().html('2 tril km').animate({
                height: width * 0.1114 * 2,
                bottom: '20%'
            });
            $("#innerKB").hide();
            $("#outerKB").hide();
            $("#outerKB > #name").css('background-color', 'rgba(0,0,0,0)').html(" ");
            $("#termShock").animate({
                width: width * 0.000445,
                height: width * 0.000445,
                right: "50%",
                bottom: '20%',
                marginBottom: (width * 0.5) / 2 - (width * 0.000445) / 2,
                fontSize: '1vh',
            }, 'slow').show('slow');
            $('#termShock > #name').html(" ");
            $("#innerOort").animate({
                width: width * 0.015,
                height: width * 0.015,
                right: "50%",
                bottom: '20%',
                fontSize: '3vh',
                marginBottom: (width * 0.5) / 2 - (width * 0.015) / 2,
                zIndex: '2'
            }, 'slow').show('slow');
            $('#innerOort > #name').html(" ")
            $("#outerOort").animate({
                width: width * 0.5,
                height: width * 0.5,
                right: "50%",
                bottom: '20%',
                fontSize: '3vh',
                zIndex: '1',
                marginBottom: '0'
            }, 'slow').fadeIn('slow');
            $('#solarLimit').fadeOut();
        },

        //add solar system limit 24
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').show().html('2 tril km').animate({
                height: width * 0.17616,
                bottom: '20%'

            });
            $("#termShock").fadeOut();
            $("#termShock > #name").html(" ");
            $("#innerOort").animate({
                width: width * 0.01,
                height: width * 0.01,
                right: "50%",
                bottom: '20%',
                fontSize: '3vh',
                marginBottom: (width * 0.5) / 2 - (width * 0.01) / 2,
                zIndex: '3'
            }, 'slow').show('slow');
            $('#innerOort > #name').html(" ")
            $("#outerOort").animate({
                width: width * 0.3953,
                height: width * 0.3953,
                right: "50%",
                bottom: '20%',
                fontSize: '2vh',
                zIndex: '2',
                marginBottom: (width * 0.5) / 2 - (width * 0.3953) / 2,
            }, 'slow').show('slow');
            $("#solarLimit").animate({
                width: width * 0.5,
                height: width * 0.5,
                right: "50%",
                bottom: '20%',
                fontSize: '3vh',
                marginBottom: '0',
                zIndex: '1'
            }, 'slow').show('slow');
            $('#siriusD').hide();
            $('#alphaCent').hide();
            $('#wolf359').hide();
            $('#rulerH').hide();
        },

        //close stars  10ly 25
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').fadeOut();
            $('#rulerH').show().html('10 Light-years').animate({
                width: width * 0.5,
                left: '20%',
                bottom: '15%'
            });
            $("#innerOort").animate({
                width: width * 0.0024,
                height: width * 0.0024,
                right: "80%",
                bottom: '20%',
                fontSize: '0vh',
                marginBottom: width * 0.05 + (width * 0.1) / 2 - (width * 0.0024) / 2,
                zIndex: '3'
            }, 'slow').fadeIn('slow');
            $('#innerOort > #name').html(" ")
            $("#outerOort").animate({
                width: width * 0.08,
                height: width * 0.08,
                right: "80%",
                bottom: '20%',
                fontSize: '0vh',
                zIndex: '2',
                marginBottom: width * 0.05 + (width * 0.1) / 2 - (width * 0.08) / 2,
            }, 'slow').fadeIn('slow');
            $("#solarLimit").animate({
                width: width * 0.1,
                height: width * 0.1,
                right: "80%",
                bottom: '20%',
                marginBottom: width * 0.05,
                fontSize: '1vh',
                zIndex: '1'
            }, 'slow').fadeIn('slow');
            $("#alphaCent").animate({
                right: "69%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
            }, 'fast').fadeIn('fast');
            $("#wolf359").animate({
                right: "41%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
            }, 'fast').fadeIn('fast');
            $("#siriusD").animate({
                right: "37%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
            }, 'fast').fadeIn('fast');
            $('#betelgeuseD').fadeOut();
            $('#rigelD').fadeOut();
            $('#aldebaranD').fadeOut();
            $('#localCloud').fadeOut();
        },

        //close stars 1000LY 26
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').fadeOut();
            $('#rulerH').show().html('500 Light-years').animate({
                width: width * 0.47754,
                left: '20%'
            });
            $("#innerOort").fadeOut('slow');
            $('#innerOort > #name').html(" ")
            $("#outerOort").fadeOut();
            $("#localCloud").animate({
                width: width * 0.03,
                height: width * 0.03,
                right: "80%",
                bottom: '20%',
                marginBottom: (width * 0.1) - (width * 0.03) / 2,
                fontSize: '1vh',
                zIndex: '1'
            }, 'slow').fadeIn('slow');
            $("#solarLimit").animate({
                width: width * 0.004,
                height: width * 0.004,
                right: "80%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
                zIndex: '1'
            }, 'slow').fadeIn('slow');
            $("#alphaCent").animate({
                right: "80%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
            }, 'fast').fadeOut('slow');
            $("#wolf359").animate({
                right: "80%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
            }, 'fast').fadeOut('slow');
            $("#siriusD").animate({
                right: "80%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
            }, 'fast').fadeOut('slow');
            $("#aldebaranD").animate({
                right: "73.77%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
            }, 'fast').fadeIn('fast');
            $("#betelgeuseD").animate({
                right: "15.75%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
            }, 'fast').fadeIn('fast');
            $("#rigelD").animate({
                right: "2.71%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
            }, 'fast').fadeIn('fast');
            hideObjectsRight('#orionArm');
        },

        //Add ORION ARM width
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').fadeOut();
            $('#rulerH').show().html('3,500 Light-years').animate({
                width: width * 0.5,
                left: '20%'
            });
            $("#innerOort").fadeOut('slow');
            $('#innerOort > #name').html(" ")
            $("#outerOort").fadeOut();
            $("#solarLimit").fadeOut();
            $("#localCloud").animate({
                width: width * 0.004,
                height: width * 0.004,
                right: "80%",
                bottom: '20%',
                marginBottom: width * 0.1,
                fontSize: '1vh',
                zIndex: '1'
            }, 'slow').fadeIn('slow');
            $("#aldebaranD").fadeOut();
            $("#betelgeuseD").fadeOut();
            $("#rigelD").fadeOut();
            $("#orionArm").fadeIn().animate({
                width: width * 0.5,
                right: '20%',
                bottom: '20%'
            });
            hideObjectsRight('#solarOrbit');
        },

            //Add Solar System orbit
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').fadeOut();
            $('#rulerH').show().html('50,000 Light-years').animate({
                width: width * 0.5,
                left: '20%'
            });
            $("#localCloud").fadeOut();
            $("#orionArm").fadeIn().animate({
                width: width * 0.035,
                right: '80%'
            });
            $("#solarOrbit").fadeIn().animate({
                width: width * 0.5,
                height: width * 0.5,
                right: '40%',
                bottom: '20%'
            });
            hideObjectsRight('#milkyWay');
        },

         //Add Milky Way
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#ruler').fadeOut();
            $('#rulerH').show().html('100,000 Light-years').animate({
                width: width * 0.5,
                left: '10%'
            });
            $("#localCloud").fadeOut();
            $("#orionArm").fadeIn().animate({
                width: width * 0.0175,
                right: '90%'
            });
            $("#solarOrbit").fadeIn().animate({
                width: width * 0.25,
                height: width * 0.25,
                right: '70%',
                bottom: '20%'
            });
            $("#milkyWay").fadeIn().animate({
                width: width * 0.6,
                height: width * 0.6,
                right: '35%',
                bottom: '20%'
            });
            hideObjectsRight('#andromeda');
        },

        //Add Andromeda
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#rulerH').fadeOut();
            $('#ruler').show().html('100,000 ly').animate({
                height: width * 0.27272727,
            });
            $("#localCloud").fadeOut();
            $("#orionArm").fadeOut();
            $("#solarOrbit").fadeOut();
            $("#milkyWay").fadeIn().animate({
                width: width * 0.272727,
                height: width * 0.272727,
                right: '80%',
                bottom: '20%'
            });
            $("#andromeda").fadeIn().animate({
                height: width * 0.5,
                width: width * 0.15,
                right: '35%',
                bottom: '20%'
            });
            hideObjectsRight('#messier');
        },

         //Add Messier 87
        function () {
            var width = parseInt($('#space').css("width"), 10);
            $('#rulerH').fadeOut();
            $('#ruler').show().html('250,000 ly').animate({
                height: width * 0.5102 / 2,
            });
            $("#localCloud").fadeOut();
            $("#orionArm").fadeOut();
            $("#solarOrbit").fadeOut();
            $("#milkyWay").fadeIn().animate({
                width: width * 0.10204,
                height: width * 0.10204,
                right: '90%',
                bottom: '20%'
            });
            $("#andromeda").fadeIn().animate({
                height: width * 0.2244,
                width: width * 0.075,
                right: '70%',
                bottom: '20%'
            }).css('box-shadow', 'inset 0 0 10rem black,inset 0 0 10rem black,inset 0 0 10rem black,inset 0 0 10rem black');
            $("#messier").fadeIn().animate({
                width: width * 0.5,
                height: width * 0.5,
                right: '35%',
                bottom: '20%'
            });
            hideObjectsRight('#UGC');
        },

        //Add UGC
        function () {
            var width = parseInt($('#space').css("width"), 10);
            width = width / 1.5;
            $('#rulerh').fadeOut();
            $('#ruler').show().html('1 mil ly').animate({
                height: width * 0.60096,
            });
            $("#localCloud").fadeOut();
            $("#orionArm").fadeOut();
            $("#solarOrbit").fadeOut();
            $("#milkyWay").fadeIn().animate({
                width: width * 0.0601,
                height: width * 0.0601,
                right: '90%',
                bottom: '20%'
            });
            $("#andromeda").fadeIn().animate({
                height: width * 0.1322,
                width: width * 0.02,
                right: '75%',
                bottom: '20%',
                boxShadow: 'none'
            }).css('box-shadow', 'none');
            $("#messier").fadeIn().animate({
                width: width * 0.29447,
                height: width * 0.29447,
                right: '60%',
                bottom: '20%'
            }).css('box-shadow', 'inset 0 0 10rem black,inset 0 0 10rem black,inset 0 0 10rem black,inset 0 0 10rem black');
            $("#UGC").fadeIn().animate({
                width: width * 0.5,
                height: width * 0.5,
                right: '30%',
                bottom: '20%'
            }).css('box-shadow', 'inset 0 0 10rem black,inset 0 0 10rem black,inset 0 0 10rem black,inset 0 0 10rem black');
            hideObjectsRight('#NGC');
        },

        //Add NGC 6251
        function () {
            var width = parseInt($('#space').css("width"), 10);
            width = width / 1.5;
            $('#rulerH').fadeOut();
            $('#ruler').show().html('10 mil ly').animate({
                height: width * 0.5,
            });
            $("#localCloud").fadeOut();
            $("#orionArm").fadeOut();
            $("#solarOrbit").fadeOut();
            $("#milkyWay").fadeIn().animate({
                width: width * 0.005,
                height: width * 0.005,
                right: '90%',
                bottom: '20%'
            });
            $("#andromeda").fadeIn().animate({
                height: width * 0.011,
                width: width * 0.002,
                right: '75%',
                bottom: '20%',
            }).css('box-shadow', 'none');
            $("#messier").fadeIn().animate({
                width: width * 0.0245,
                height: width * 0.0245,
                right: '60%',
                bottom: '20%',
                boxShadow: 'none'
            }).css('box-shadow', 'none');
            $("#UGC").fadeIn().animate({
                width: width * 0.0416,
                height: width * 0.0416,
                right: '50%',
                bottom: '20%',
                boxShadow: 'none'
            }).css('box-shadow', 'none');
            $("#NGC").fadeIn().animate({
                width: width * 0.5,
                height: width * 0.5,
                right: '30%',
                bottom: '20%'
            }).css('box-shadow', 'inset 0 0 10rem black,inset 0 0 10rem black,inset 0 0 10rem black,inset 0 0 10rem black');
            hideObjectsRight('#virgo');
        },

         //Add Virgo Super Cluster
        function () {
            var width = parseInt($('#space').css("width"), 10);
            width = width / 1.5;
            $('#rulerH').fadeOut();
            $('#ruler').show().html('100 mil ly').animate({
                height: width * 0.60096,
            });
            $("#milkyWay").fadeOut();
            $("#andromeda").fadeOut();
            $("#messier").fadeOut();
            $("#UGC").fadeOut();
            $("#NGC").fadeIn().animate({
                width: width * 0.04545,
                height: width * 0.04545,
                right: '70%',
                bottom: '20%',
                boxShadow: 'none'
            }).css('box-shadow', 'none');
            $("#virgo").fadeIn().animate({
                width: width * 0.5,
                height: width * 0.5,
                right: '35%',
                bottom: '20%'
            });
            hideObjectsRight('#laniakea');
        },
        //Add Laniakea Super Cluster
        function () {
            var width = parseInt($('#space').css("width"), 10);
            width = width / 1.5;
            $('#rulerH').fadeOut();
            $('#ruler').show().html('500 mil ly').animate({
                height: width * 0.60096,
            });
            $("#NGC").fadeIn().animate({
                width: width * 0.01,
                height: width * 0.01,
                right: '80%',
                bottom: '20%',
                boxShadow: 'none'
            }).css('box-shadow', 'none');
            $("#virgo").fadeIn().animate({
                width: width * 0.11,
                height: width * 0.11,
                right: '70%',
                bottom: '20%'
            });
            $("#laniakea").fadeIn().animate({
                width: width * 0.5,
                height: width * 0.5,
                right: '35%',
                bottom: '20%'
            });
            hideObjectsRight('#lqg');
        },

        //Add Huge LQG
        function () {
            var width = parseInt($('#space').css("width"), 10);
            width = width / 1.5;
            $('#rulerH').fadeOut();
            $('#ruler').show().html('2 bil ly').animate({
                height: width * 0.5,
            });
            $("#NGC").fadeOut();
            $("#virgo").fadeOut();
            $("#laniakea").fadeIn().animate({
                width: width * 0.125,
                height: width * 0.125,
                right: '70%',
                bottom: '20%'
            });
            $("#lqg").fadeIn().animate({
                width: width * 1,
                height: width * 1,
                right: '40%',
                bottom: '20%'
            });
            hideObjectsRight('#hercules');
        },


        //Add hercules
        function () {
            var width = parseInt($('#space').css("width"), 10);
            width = width / 1.5;
            $('#rulerH').fadeOut();
            $('#ruler').show().html('5 bil ly').animate({
                height: width * 0.5,
            });
            $("#NGC").fadeOut();
            $("#virgo").fadeOut();
            $("#laniakea").fadeOut();
            $("#lqg").fadeIn().animate({
                width: width * 0.4,
                height: width * 0.4,
                right: '80%',
                right: '80%',
                bottom: '20%'
            });
            $("#hercules").fadeIn().animate({
                width: width * 1,
                height: width * 1,
                right: '40%',
                bottom: '20%'
            });
            hideObjectsRight('#universe');
        },

        //Add universe
        function () {
            var width = parseInt($('#space').css("width"), 10);
            width = width / 1.5;
            $('#rulerH').fadeOut();
            $('#ruler').show().html('46.5 bil ly').animate({
                height: width * 0.5,
            });
            $("#NGC").fadeOut();
            $("#virgo").fadeOut();
            $("#laniakea").fadeOut();
            $("#lqg").fadeIn().animate({
                width: width * 0.04301,
                height: width * 0.04301,
                right: '80%',
                bottom: '20%'
            });
            $("#hercules").fadeIn().animate({
                width: width * 0.1075,
                height: width * 0.1075,
                right: '75%',
                bottom: '20%'
            });
            $("#universe").fadeIn().animate({
                width: width * 1,
                height: width * 1,
                right: '50%',
                bottom: '20%'
            });
        },

        //Only universe
        function () {
            var width = parseInt($('#space').css("width"), 10);
            width = width / 1.5;
            $('#rulerH').fadeOut();
            $('#ruler').show().html('93 bil ly').animate({
                height: width * 0.5,
            });
            $("#lqg").fadeOut();
            $("#hercules").fadeOut();
            $("#universe").fadeIn().animate({
                width: width * .5,
                height: width * .5,
                right: '50%',
                bottom: '20%'
            });
        }



    ];

    //NAVIGATION FUNCTIONS

    function progress(object) {
        console.log(clicked);
        if (clicked >= 9 && clicked < 18) {
            clicked = 19;
            actions[clicked - 1].apply(this, Array.prototype.slice.apply(arguments));
        } else if (clicked < actions.length) {
            actions[clicked++].apply(this, Array.prototype.slice.apply(arguments));
        }
    };

    function reverse(object) {
        //call function based on value clicked
        if (clicked <= 19 && clicked > 9) {
            clicked = 9;
            hideObjectsRight('.orbit');
            actions[clicked - 1].apply(this, Array.prototype.slice.apply(arguments));
        } else if (clicked > 0) {
            actions[clicked - 2].apply(this, Array.prototype.slice.apply(arguments));
            --clicked;
        }
    };

    function toGalaxy(object) {
        if (clicked < 31) {
            progress();
            $(":animated").promise().done(function () {
                toGalaxy();
            });

        } else if (clicked > 31) {

            reverse();
            $(":animated").promise().done(function () {
                toGalaxy();
            });
        }
    };

    function toSolar(object) {
        if (clicked < 19) {
            progress();
            $(":animated").promise().done(function () {
                toSolar();
            });

        } else if (clicked > 19) {

            reverse();
            $(":animated").promise().done(function () {
                toSolar();
            });
        }
    };


    function toEarth(object) {
        if (clicked < 0) {
            progress();
        } else if (clicked > 0) {

            reverse();
            $(":animated").promise().done(function () {
                toEarth();
            });
        }

    };



    //BUTTON FUNCTIONS

    $('#start').click(function () {
        clicked = 1;
        $('#buttons').show();
        $('#shortcuts').show();
        $('#site').show();
        actions[0].apply(this, Array.prototype.slice.apply(arguments));
        $('#start').hide('slow');
    });
    $('#earthShort').click(function () {
        toEarth();
    });
    $('#solar').click(function () {
        toSolar();
    });

    $('#starD').click(function () {
        toGalaxy();
    });

    $('#home').click(function () {
        window.location = "../../index.html";
    });

    $('#blog').click(function () {
        window.location = "";
    });

    $("#next").click(function () {
        //call function based on value clicked
        $(":animated").promise().done(function () {
            progress();
        });
    });

    $("#back").click(function () {
        //call function based on value clicked
        $(":animated").promise().done(function () {
            reverse();
        });
    });

    $(window).resize(function () {
        actions[clicked - 1].apply(this, Array.prototype.slice.apply(arguments));
    });

    $('#home').hover(function () {
        $(this).css({
            opacity: '0.7'
        });
    }, function () {
        $(this).css({
            opacity: '1'
        });
    });
    
     $('#blog').hover(function () {
        $(this).css({
            opacity: '0.7'
        });
    }, function () {
        $(this).css({
            opacity: '1'
        });
    });
     $('#earthShort').hover(function () {
        $(this).css({
            opacity: '0.7'
        });
    }, function () {
        $(this).css({
            opacity: '1'
        });
    });
     $('#solar').hover(function () {
        $(this).css({
            opacity: '0.7'
        });
    }, function () {
        $(this).css({
            opacity: '1'
        });
    });
     $('#starD').hover(function () {
        $(this).css({
            opacity: '0.7'
        });
    }, function () {
        $(this).css({
            opacity: '1'
        });
    });
     $('#home').hover(function () {
        $(this).css({
            opacity: '0.7'
        });
    }, function () {
        $(this).css({
            opacity: '1'
        });
    });
});