let arr = ['24-05-2027', '02-12-2018', '14-02-2020'];


function sortDates(arr) {
    return arr.sort( (a, b) => {
        if (a.substring(6) > b.substring(6)) {
            return 1;
        }else if (a.substring(6) < b.substring(6)){
            return -1;
        }else{
            if (a.substring(3,5) > b.substring(3,5)) {
            return 1;
            }else if (a.substring(3,5) < b.substring(3,5)){
                return -1;
            }else{
                if (a.substring(0,2) > b.substring(0,2) ){
                    return 1;
                }else if(a.substring(0,2) < b.substring(0,2)){
                    return -1;
                }
            }
        }
    } )
    
}
        console.log (sortDates (arr));