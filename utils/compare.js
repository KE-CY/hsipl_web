const distinguish = async (data) => {
    const create = await data.filter((val) => {
        return val.createAT == undefined || null;
    });
    let updata = await data.filter((val) => {
        return val.createAT != undefined;
    });
    // console.log(create);
    // console.log(updata);
    return { create: create, updata: updata };
}
module.exports = { distinguish };