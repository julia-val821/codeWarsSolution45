https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

    function maxDiff(list) {
        if(list.length === 0) return 0;
        let max = Math.max(...list);
        let min = Math.min(...list);
        let d;
        d = max - min

        return d;
    }