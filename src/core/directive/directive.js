
export default (Vue) => {
   Vue.directive("test1",{
        inserted:function(el){
            el.onclick=function(){
            	alert("OK1");
            };
        }
    }),
   Vue.directive("test2",{
        inserted:function(el){
            el.onclick=function(){
            	alert("OK2");
            };
        }
    })
}



