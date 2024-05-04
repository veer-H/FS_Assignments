// Decorator function that logs method calls with their arguments
function logMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    // Replace the original method with a new one that logs the call and then invokes the original method
    descriptor.value = function (...args: any[]) {
        console.log(`Calling method: ${propertyKey} with arguments:`, args);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

// Logger class with a log method that is decorated with the logMethod decorator
class Logger {
    // Apply the logMethod decorator to the log method
    @logMethod
    // Log a message to the console
    log(message: string): void {
        console.log(message);
    }
}

// Create a new instance of the Logger class
const logger = new Logger();

// Log a message with details using the logger instance
logger.log("This message will be logged with details");