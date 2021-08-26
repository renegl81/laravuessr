import app from './app';
import renderVueComponentToString from 'vue-server-renderer/basic';

renderVueComponentToString(app, (err, html) => {
    if (err) {
        throw new Error(err);
    }

    // eslint-disable-next-line no-undef
    dispatch(html);
});




