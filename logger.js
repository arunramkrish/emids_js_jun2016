function Logger(logConfig) {
    this.logConfig = logConfig;
}
Logger.prototype.debug = function() {
    if (this.logConfig.level <= LogLevel.DEBUG) {
        Object.getPrototypeOf(this).log.apply(this,arguments);
    }
};
Logger.prototype.error = function() {
    if (this.logConfig.level <= LogLevel.ERROR) {
        Object.getPrototypeOf(this).log.apply(this,arguments);
    }
};
Logger.prototype.log = function() {
    var msg = "";
    for(var arg in arguments) {
        msg += arguments[arg];
    }
    console.log(msg);
}

var LogLevel = (function() {
    return {
        FATAL : 6,
      ERROR:5,
        WARN : 4,
        INFO : 3,
        DEBUG:2,
        TRACE : 1
    };
})();
var logger = new Logger({level:LogLevel.DEBUG});
logger.debug("This is a debug msg", 123);
logger.error("This is a error msg", 456);


function DivLogger() {
    Logger.apply(this, arguments);   
}
DivLogger.prototype = Object.create(Logger.prototype);

DivLogger.prototype.getLoggerElement = function() {
    return document.getElementById(this.logConfig.divId);
}

DivLogger.proto0type.log = function() {
    var parent = this.getLoggerElement();
    var logElement = document.createElement("div");
    
    var msg = "";
    for(var arg in arguments) {
        msg += arguments[arg];
    }
    logElement.innerHTML = msg;
    
    parent.appendChild(logElement);
}
var divLogger = new DivLogger({level:LogLevel.DEBUG, divId:"logger"});

divLogger.debug("I am debug log", "inside div");
divLogger.error("I am yet another log");



