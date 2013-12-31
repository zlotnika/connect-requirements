exports = module.exports = function(options) {
    options = options || {}

    return function requireKeys(request, response, next) {

        for ( var name in options ) {
            // name as in 'body'
            var required_keys = options[name]
            required_keys = Array.isArray(required_keys) ? required_keys : [required_keys]

            for ( var index in required_keys ) {
                // key as in 'data', or 'language'
                var key = required_keys[index]

                if ( !request[name] || !request[name].hasOwnProperty(key) ) {
                    var error_message = 'Error: request missing ' + key + ' in ' + name
                    response.statusCode = 400
                    return next(error_message)
                }
            }
        }

        next()
    }
}
