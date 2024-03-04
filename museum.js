`   $(".button.rus").click(function(){
        document.getElementByClassName("en").style.display = "none";
        document.getElementByClassName("tat").style.display = "none";
        document.getElementByClassName("tat").style.display = "block";
        }
    );

        $(".button.en").click(function(){
            document.getElementByClassName("tat").style.display = "none";
            document.getElementByClassName("rus").style.display = "none";
            document.getElementByClassName("en").style.display = "block";
    });`
    function showHide(element_id) {
        //Если элемент с id-шником element_id существует
        //let array = ["rus", "tat", "eng"];
        //for (let i= 0; i<=array.length - 1; i++){
            var obj = document.getElementById("rus"); 
            if (obj.style.display != "none") { 
                obj.style.display = "none"; //Показываем элемент
            }
            
            var obj = document.getElementById("en"); 
            if (obj.style.display != "none") { 
                obj.style.display = "none"; //Показываем элемент
            }
                
            var obj = document.getElementById("tat"); 
            if (obj.style.display != "none") { 
                obj.style.display = "none"; //Показываем элемент
           }
        //}
        if (document.getElementById(element_id)) { 
            //Записываем ссылку на элемент в переменную obj
            var obj = document.getElementById(element_id); 
            //Если css-свойство display не block, то: 
            if (obj.style.display != "block") { 
                obj.style.display = "block"; //Показываем элемент
            } //Скрываем элемент
        }
        
        
    }