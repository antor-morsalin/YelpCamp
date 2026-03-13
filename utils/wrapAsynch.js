//? Function that processes the error to next
function wrapAsync(f)
{
    return function(req, res, next)
    {
        f(req, res, next).catch(e=>next(e));
    }
}


module.exports = wrapAsync;