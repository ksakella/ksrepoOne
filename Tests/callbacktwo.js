const userLeft = false;
const userWatchingProgram = false;

function watch(a, b) {
    if (userLeft) {
        a({
            name: 'User Left',
            message: ':('
        });
    } else if (userWatchingProgram) {
        a({
            name: 'User Watching Program',
            message: 'Cartoon TV'
        });
    } else {
        b({
            name: 'Thanks for watching',
            message: 'please subscribe'
        });
    }
}

function a(k) {
    console.log(k.name + " " + k.message);
}

function b(k) {
    console.log(k.name + " " + k.message);
}

watch(a, b);
