const router = require("express").Router();
const { Goods, RentGoods } = require("./../models/goods"); 




router.get("/rent", async (req, res) => {
    try {
        res.send(await RentGoods.find({}));
    } catch (err) {
        return console.error(err);
    }
});


router.get("/:time", async (req, res) => {
    try {
        res.send(await Goods.find({}).limit(5).skip(req.params.time * 5));
    } catch (err) {
        return console.error(err); 
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.send(await Goods.findByIdAndDelete(req.params.id));
    } catch (err) {
        console.error(err);
    }
}); 

router.get("/", async (req, res) => {
    res.send(await Goods.find({})); 
});

router.get("/search/:text/:type", async (req, res) => {
    const { text, type } = req.params;
    let names = [];
    let result = [];
    if(type.length >= 1 && type != "none") {
        names = await Goods.find({type: type}, { name: 1 });
    } else {
        names = await Goods.find({}, { name: 1 });
    }
    let finalIds = [];
    if(text.length >= 1 && text != "null") {
        for(let { name, _id } of names) {
            for(let i = 0; i < Math.ceil(name.length / text.length * text.length); i++) {
                if(name.slice(i, text.length + i) == text) {
                    finalIds.push(_id);
                    break;
                }
            }
        }
    } else {
        for(let { _id } of names) {
            finalIds.push(_id);
        }
    }


    for(let id of finalIds) {
        result.push(await Goods.findById(id));
    }
    


    res.send(result);
});


router.get("/byid/:id", async (req, res) => {
    try {
        res.send(await Goods.findById(req.params.id));
    } catch (err) {
        return console.error(err)
    }
});

router.get("/byname/:name", async (req, res) => {
    const nameLength = req.params.name.length;

    try {
        var names = await Goods.find({ }, { name: 1 });
    } catch (err) {
        console.error(err);
    }
    let ids = names.filter(({ name, _id }) =>
        name.substring(0, nameLength) == req.params.name);

    let result = [];

    for ( let i of ids ) {
        result.push(await Goods.findById(i._id));
    }

    res.send(result);

});

router.post("/", (req, res) => {
    let newGoods = Goods(req.body);
    newGoods.save((err, docs) => {
        if(err) {
            return console.error(err);
        }
        res.send(docs);
    });
});


module.exports = router;



