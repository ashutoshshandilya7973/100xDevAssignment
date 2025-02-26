import JWT from 'jsonwebtoken';
import 'dotenv/config';

const checkMiddleware = (req, res, next) => {
    try {
        
        const token = req.headers['token'];

        if (!token) {
            return res.status(401).json({ error: 'Access denied. No token provided.' });
        }

        
        const decoded = JWT.verify(token, process.env.SECRET_KEY);

        
        req.user = decoded;

        next(); 
    } catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token.' });
    }
};

export { checkMiddleware };
