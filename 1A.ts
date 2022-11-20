const CompareFn = (a: string, b: string) => {
    if(a[2] > b[2]){
        return 1;
    } else if(a[2] < b[2]){
        return -1;
    } else {
        if(a[1] > b[1]){
            return 1;
        } else if(a[1] < b[1]){
            return -1;
        } else {
            if(a[0] > b[0]){
                return 1;
            } else if(a[0] < b[0]){
                return -1;
            } else {
                return 0;
            }
        }
    }
}

const Sort = (words: string[]) => {
    words.sort(CompareFn);
    return words;
}

const testArray: string[] = ["BOAT", "Locomotive", "Poet", "Accelerate", "GOLF", "ACCIDENTAL", "Submarine"];

console.log(Sort(testArray));