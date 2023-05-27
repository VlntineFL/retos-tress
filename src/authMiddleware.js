const authenticateUser = (req, res, next) => {
    
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: 'Acceso no autorizado' });
    }
  
    
    const userId = req.user.id;
  
   
    req.user = {
      id: userId,
    };
  
    next();
  };
  
  module.exports = {
    authenticateUser,
  };