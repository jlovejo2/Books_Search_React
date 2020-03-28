
module.exports = {

    imageExists: function(param) {
        if(param) return param.thumbnail
        else return 'Value Not Found'
    }

}