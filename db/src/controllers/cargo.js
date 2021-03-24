const router = require("express").Router();
const { consoleTestResultHandler } = require("tslint/lib/test");
const { Goods } = require("./../models/goods"); 



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
    const result = [];
    if (searchText && searchType) {
        const nameAndType = await Goods.find({}, { name: 1, type: 1 });
        const search = nameAndType.filter(({ name, type }) => (name.substring(0, searchText.length) == searchText) && type == searchType);
        for (let { _id } of search) {
            result.push(await Goods.findById(_id));
        }
    } else if (searchText && !searchType) {
        const names = await Goods.find({}, { name: 1 });
        const search = names.filter(({ name }) => name.substring(0, searchText.length) == searchText);
        for (let { _id } of search) {
            result.push(await Goods.findById(_id));
        }
    } else if (searchText.length <= 0 && searchType) {
        const types = await Goods.find({}, { type: 1 });
        const search = types.filter(({ type }) => type == searchType)
        for(let { _id } of search) {
            result.push(await Goods.findById(_id));
        } 
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



