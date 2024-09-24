import User from "../models/user_model";

export const store = async (req, res) => {
    try {
      const content = await user.create(req.body);
        res.status(201).json();
    } catch (error) {
        res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
      const content = await user.find(req.body);
        res.status(201).json();
    } catch (error) {
        res.status(400).send(error);
        
    }
};

export const update = async (req, res) => {
    try {
      const content = await user.findByIdAndUpdate(req.body);
        res.status(201).json();
    } catch (error) {
        res.status(400).send(error);
    }
};

export const destroy = async (req, res) => {
    try {
      const content = await user.findByIdandDelete(req.body);
        res.status(201).json();
    } catch (error) {
        res.status(400).send(error);
    }
};

export const show = async (req, res) => {
    try {
      const content = await user.findById(req.body);
        res.status(200).json();
    } catch (error) {
        res.status(400).send(error);
    }
};

export const signup = async (req, res) => {
    try {
        const content = await User.create({
            email : req.body.email,
            password : req.body.password
            (req, body)
        });
        
        (res.status(201).json(content));
    } catch (error) {
        res.status(400).send(error);
    }
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user){
            res.sendStatus(404);
        }

        


        ({
            email : req.body.email,
            password : req.body.password
            (req, body)
        });
        
        (res.status(201).json(content));
    } catch (error) {
        res.status(400).send(error);
    }
};