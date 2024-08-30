//middleware
exports.fechaHora = (req, res, next) => {
    fecha = new Date();
    amd = fecha.toISOString().split('T')[0];
    hora = fecha.toTimeString().split(' ')[0];
    console.log("Estas accediendo el: " + amd + " a las: " + hora);
    next();
};

exports.ubicacion = (req, res, next) => {

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            fetch('https://ipapi.co/' + data.ip + '/json/')
                .then(function (response) {
                    response.json().then(jsonData => {
                        console.log("Tu ip esta registrada desde: " + jsonData.city+" en el estado de "+jsonData.region);
                    });
                })
                .catch(function (error) {
                    console.log(error)
                });
        })
        .catch(error => {
            console.error('Error al obtener la IP:', error);
        });

    next();
};
