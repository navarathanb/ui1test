 $(document).ready(function() {
            var i=1;
           $("#btn1").click(function() {
               $("div").prepend("<li class='list'>user:"+i+"</li>");
               i++;
               disp();
           });
           $("#btn2").click(function() {
               $("div").append("<li class='list'>user:"+i+"</li>");
               i++;
               disp();
           });

           function disp() {
                $(".list").click(function() {
                    var data = $(this).text();
                    //alert(data);
                });
           }
           

        })