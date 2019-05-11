module.exports = app =>{
    
   // antes de inicializar el servidor crea las tablas
   app.db.sequelize.sync().done(()=>{
    // inicializa el servidor 
    app.listen(app.get('port'), () => {
        console.log('Server on port' , app.get('port'));
    });
   })  
};

