const { app } = require('./app');

app.listen(PORT, () => {
    console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
    });
