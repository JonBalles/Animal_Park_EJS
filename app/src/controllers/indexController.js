module.exports = {
    
    index: (req, res) => {
        res.render("home")
    },


    error: (req, res) => {
        res.render("error")
    },

    detalleProducto:(req, res) => {
        res.render("detalleProducto")
    },
}