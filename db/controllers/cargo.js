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
    console.log(req.params.id);
    try {
        res.send(await Goods.findByIdAndDelete(req.params.id));
    } catch (err) {
        console.error(err);
    }
}); 

router.get("/", async (req, res) => {
    res.send(await Goods.find({})); 
});

router.post("/search", async (req, res) => {
    const { searchText, searchType } = req.body;
    let bytype = [];
    let byname = [];
    if(searchType.length >= 1 && searchType != "none") {
        let types = await Goods.find({}, { type: 1 });
        for(let { type, _id } of types) {
            if(type == searchType) {
                bytype.push(_id.toString());
            }
        }
    }
    if(searchText.length >= 1) {
        let names = await Goods.find({}, { name: 1 });
        for(let { name, _id } of names) {
            for(let i = 0; i < name.length / searchText.length * 2; i++) {
                if(name.slice(i, searchText.length + i) == searchText) {
                    byname.push(_id.toString());
                    break;
                }
            }
        }
    }


    let result = [];
    if(byname.length >= 1 && bytype.length >= 1) {
        var filtered = byname.filter(a => bytype.includes(a));
        for(let i in filtered) {
            result.push(await Goods.findById(filtered[i]));
        }
    } else if(byname.length >= 1) {
        for(let i of byname) {
            result.push(await Goods.findById(i));
        }
    } else if(bytype.length >= 1) {
        for(let i of bytype) {
            result.push(await Goods.findById(i));
        }
    } else {
        result.push(...await Goods.find({}).limit(10));
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
    console.log(req.body);
    let newGoods = Goods(req.body);
    newGoods.save((err, docs) => {
        if(err) {
            return console.error(err);
        }
        res.send(docs);
    });
});


module.exports = router;



