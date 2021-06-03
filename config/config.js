module.exports = function (req, res, next) {
    res.sendApi = function (data, status = 200) {
        res.setHeader('Content-Type', 'application/json');
        res.status(status);
        res.json(data);
    }

    res.sendAsyncApi = function (Promise) {
        Promise.then(item => res.sendApi({
            results: item,
            statuscode: 200,
            message: 'Connect succesfuly...'
        })).catch(err => res.sendApi({
            results: null,
            statuscode: 500,
            message: 'Connect failed'
        }, 500))
    }
    next();
}