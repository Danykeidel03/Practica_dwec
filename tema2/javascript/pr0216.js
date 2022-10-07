function convertToBytes(capacity,from){
    switch ( from ) {
        case "B" || "Byte":{
            return capacity;
        }
        case "KB" || "Kilobyte":{
            return capacity*1000;
            break;
        }
        case "MB" || "Megabyte":{
            return capacity*1e6;
        }
        case "GB" || "Gigabyte":{
            return capacity*1e9;
        }
        case "TB" || "Terabyte":{
            return capacity*1e12;
        }
        case "PB" || "Petabyte":{
            return capacity*1e15;
        }
        case "EB" || "Exabyte":{
            return capacity*1e18;
        }
        default:{
            return "error"
        }
    }
}

console.log(fact(3,"EB"));
