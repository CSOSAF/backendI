import passport from 'passport';

export const passportError = (strategy) => { 
    return async (req, res, next) => {
        passport.authenticate(strategy, (error, user, info) => {
            if (error) {
                return next(error);
            }
            if (!user) {
                return res.status(401).send({ error: info.message ? info.message : info.toString() });
            }
            req.user = user;
            next();
        })(req, res, next)
    }
}

export const authorization = (rol) => {
    return async (req, res, next) => {

        if (!req.user) {
            return res.status(401).send({ error: 'Usuario no autorizado' });
        }
        if (req.user.user.rol != rol) {
            return res.status(403).send({ error: 'El usuario no tiene los permisos necesarios' });
        }
        next();
    }
}