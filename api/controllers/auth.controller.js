import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    //db operations  
    const { email, password, username } = req.body;
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // create user in db
    console.log(req.body);
}; 

export const login = async (req, res) => {
    //db operations  
}; 

export const logout = async (req, res) => {
    //db operations  
}; 