import app from './server/src/app';

app.listen(app.config.port, () => {
    console.log(`app is running on port ${app.config.port}`);
});''