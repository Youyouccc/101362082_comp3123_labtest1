const resolvePromise = () => {
    setTimeout(() => {
        let resolve = {'message': 'resolve promise!'}
        console.log(resolve);
    }, 500)
}

const rejectedPromise = () => {
    setTimeout(() => {
        try {
            throw new Error('error: rejected promise!');
        }
        catch (e){
            console.error(e);
        }
    }, 500)
}

resolvePromise()
rejectedPromise()