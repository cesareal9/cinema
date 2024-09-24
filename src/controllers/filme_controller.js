export const store = async (req, res) => {
    try {
      const content = await Filme.create(req.body);
        res.status(201).json();
    } catch (error) {
        res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
      const content = await Filme.find(req.body);
        res.status(201).json();
    } catch (error) {
        res.status(400).send(error);
        
    }
};

export const update = async (req, res) => {
    try {
      const content = await Filme.findByIdAndUpdate(req.body);
        res.status(201).json();
    } catch (error) {
        res.status(400).send(error);
    }
};
// export const put = async (req, res) => {
//     try {
//       const content = await Filme.create(req.body);
//         res.status(201).json();
//     } catch (error) {
//         res.status(400).send(error);
//     }
// };
export const destroy = async (req, res) => {
    try {
      const content = await Filme.findByIdandDelete(req.body);
        res.status(201).json();
    } catch (error) {
        res.status(400).send(error);
    }
};

export const show = async (req, res) => {
    try {
      const content = await Filme.findById(req.body);
        res.status(200).json();
    } catch (error) {
        res.status(400).send(error);
    }
};