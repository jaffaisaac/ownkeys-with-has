const resturant ={
    soda:5,
    beer:3
}

const restHandler ={
    has:function(target,property){
        if("beer"===property){
            return false 
        }
        return property in target;
    },
    ownKeys:function(target){
        return["soda"];
    }
}

const restProxy =new Proxy(resturant, restHandler)
console.log(Object.keys(restProxy))
console.log(Object.getOwnPropertyDescriptor(restProxy))//undefined