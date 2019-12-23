$(function() {
    var dat = document.getElementById('currentDay');
    var now = moment();
    dat.innerText = now.format("dddd, MMMM Do");

    $( ".content" ).click(function(e) {

        let row = 0, length = 1, column = 0
        let timeObj = {
            "9 AM" : 1,
            "10 AM" : 2,
            "11 AM" : 3,
            "12 PM" : 4,
            "1 PM" : 5,
            "2 PM" : 6,
            "3 PM" : 7,
            "4 PM" : 8,
            "5 PM" : 9,
        }

        column = e.target.className.match(/\d+/)[0]

        $('.modal-container').toggle()

        $('.modal-container--close').click(function(){
            $('.modal-container').css('display', 'none')
        })
        
        $('.modal-container--form').submit(function(e){
            e.preventDefault()
           
            row = timeObj[$( "#start-select" ).val()]
            length = (timeObj[$( "#end-select" ).val()]) - (timeObj[$( "#start-select" ).val()])
            var apptext = document.getElementById("myText").value  ;
            var t1 =  timeObj[$( "#start-select" ).val()];
     
            var color1="green";

            var idA="divAppoint"+row;
            $('.content').append(`<div id=${idA} class='event' style='grid-row:${row}/span ${length};grid-column:${column};background-color:${color1};'>resrv</div>`)
            start = timeObj[$( "#start-select" ).val()]
            end   = timeObj[$( "#end-select" ).val()]
            var timeS = "";
            var timeE = "";
             var element = document.getElementById(idA);
             element.innerHTML = apptext;
                if (start==1) {
                    timeS = "9 AM" ;
                } else if (start==2) {
                    timeS = "10 AM" ;
                } else if (start==3) {
                    timeS = "11 AM" ;
                } else if (start==4) {
                    timeS = "12 PM" ;
                } else  if (start==5) {
                    timeS = "1 PM" ;
                } else  if (start==6) {
                    timeS = "2 PM" ;
                } else  if (start==7) {
                    timeS = "3 PM" ;
                } else  if (start==8) {
                    timeS = "4 PM" ;
                } else  {
                    timeS = "5 PM" ;
                };
                if (end==1) {
                    timeE = "9 AM" ;
                } else if (end==2) {
                    timeE = "10 AM" ;
                } else if (end==3) {
                    timeE = "11 AM" ;
                } else if (end==4) {
                    timeE = "12 PM" ;
                } else  if (end==5) {
                    timeE = "1 PM" ;
                } else  if (end==6) {
                    timeE = "2 PM" ;
                } else  if (end==7) {
                    timeE = "3 PM" ;
                } else  if (end==8) {
                    timeE = "4 PM" ;
                } else  {
                    timeE = "5 PM" ;
                };

            var Reserv = "Reserv"
            var dat = document.getElementById('2');
            $('.modal-container--form')[0].reset()
            $('.modal-container--form').off()
            $('.modal-container').toggle()
        
            var mom = moment(timeS, 'h a').fromNow();
            var timeSF  = moment(timeS,'h a') ;
            var nowHrs = moment().format('h a');
            var now2 = moment();
            // var now2 =  moment("1 pm",'h a') ;  // debug

           

            if (now2 > timeSF ) {
                    var color1="gray";
                    }
            else if (now2 < timeSF ) {
                var color1="geen";
                }
            else  {
                    var color1="red";
                    }
            ;

            element.style.backgroundColor = color1;
            // localStorage.setItem(timeSF , now2);  //debug
                var appTime = "From " + timeS + " To " + timeE ;
            localStorage.setItem(appTime, apptext);
        })
      });
  });