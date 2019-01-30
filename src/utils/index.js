export const getUrlObj = (url) => {
    url = url.trim();
    let resObj = {}
    if (url.indexOf('?') >= 0) {
        let str = url.substr(1);
        let strArr = str.split('&');
        strArr.forEach(element => {
            let keyArr = element.split('=');
            resObj[keyArr[0]] = decodeURIComponent(keyArr[1]);
        });
    }

    return resObj;
}

export const handleTime = (time) => {
    if (time.indexOf('days ago') >= 0) {
        time = time.replace("days ago", "天前")
    } else if (time.indexOf('minutes ago') >= 0) {
        time = time.replace("minutes ago", "分钟前")
    } else if (time.indexOf('hours ago') >= 0) {
        time = time.replace("hours ago", "小时前")
    } else if (time.indexOf('months ago') >= 0) {
        time = time.replace("months ago", "个月前")
    } else if (time.indexOf('years ago') >= 0) {
        time = time.replace("years ago", "年前")
    } else if (time.indexOf('weeks ago') >= 0) {
        time = time.replace("weeks ago", "周前")
    } else if (time.indexOf("a day ago") >= 0) {
        time = time.replace("a day ago", "1 天前")
    } else if (time.indexOf("an hour ago") >= 0) {
        time = time.replace("an hour ago", "1 小时前")
    }

    return time;
}