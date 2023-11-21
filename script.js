const textarea = document.querySelector("textarea") ;

        if(localStorage.getItem('content') != ""){
            // const para = document.createElement("p") ;
            // para.textContent = localStorage.getItem('msg') ;
            // document.body.appendChild(para) ;
            textarea.textContent = localStorage.getItem('content') ;
        }
        
        function save(){
            const value = textarea.value ;
            localStorage.setItem("content" , value) ;
        } ;

        function clear(){
            textarea.value = "" ;
            localStorage.clear() ;
            // let p = document.querySelector('p') ;
            // p.textContent = "" ;
        }

        const sb = document.querySelector('#save') ;
        const cb = document.querySelector('#clear') ;

        sb.addEventListener("click" , save) ;
        cb.addEventListener("click", clear) ;