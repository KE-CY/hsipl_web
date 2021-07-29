const distinguish = async (data) => {
    const create = await data.filter((val) => {
        return val.id == undefined;
    });
    let updata = await data.filter((val) => {
        return val.id != undefined;
    });
    // console.log(create);
    // console.log(updata);
    return { create: create, updata: updata };
}
module.exports = { distinguish };