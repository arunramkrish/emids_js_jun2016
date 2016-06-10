window.$ = (function() {
    function myQuery() {
        
    }
    function InvalidArgumentsException(msg, argLength) {
            Object.defineProperty(this, "message", {
               enumerable : true,
                configurable: false,
                get: function() {
                    console.log("getter called");
                    return msg + " Passed arguments len:" + argLength;
                }
            });
        this.toString = function() {
            return this.message;
        }
    }
    
    myQuery.ajax = function() {
        if (!arguments[0]) {
            throw new InvalidArgumentsException("Not defined", 0);
        }
        var xhr = new XMLHttpRequest();
        var arg = arguments;
        xhr.onreadystatechange = function() {
            if ((xhr.readyState == 4) && (xhr.status >= 200) && (xhr.status < 300)) {
                arg[0].onSuccess(JSON.parse(xhr.responseText));
            }
        };
        xhr.open(arguments[0].method, arguments[0].url);
        xhr.send(arguments[0].data);
            
    };
    return myQuery;
})();