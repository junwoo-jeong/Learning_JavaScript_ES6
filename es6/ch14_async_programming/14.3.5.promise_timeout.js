function launch() {
    return new Promise(function(resolve, reject) {
        if(Math.random() < 0.5) return;
        console.log("Lift off!");
        setTimeout(function() {
            resolve("In orbit!");
        }, 2*1000);
    });
}

function addTimeout(fn, timeout) {
    if(timeout == undefined) timeout = 1000;
    return function(...args) {
        return new Promise(function(resolve, reject) {
            const tid = setTimeout(reject, timeout, new Error("promise timed out"));
            fn(...args)
                .then(function(...args) {
                    clearTimeout(tid);
                    resolve(...args);
                })
                .catch(function(...args) {
                    clearTimeout(tid);
                    reject(...args);
                });
        });
    };
}
