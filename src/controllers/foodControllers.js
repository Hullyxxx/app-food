import sequelize from "../models/index.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize)


const getFood = async (req, res) => {
    let { user_id, res_id } = req.body;

    let data = await models.food.findAll()

    res.send(data)
}

const likeRes = async (req, res) => {
    let { user_id, res_id } = req.body;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    let dataLike = {
        user_id: user_id,
        res_id: res_id,
        date_like: today
    }

    try {
        await models.like_res.create(dataLike)
        res.send('Like thành công')
    } catch (error) {
        res.send(error.errors[0].message)
    }
}

const unLikeRes = async (req, res) => {
    let { user_id, res_id } = req.body;

    try {
        await models.like_res.destroy({
            where: {
                user_id: user_id,
                res_id: res_id
            }
        })
        res.send('Unlike thành công')
    } catch (error) {
        res.send(error.errors[0].message)
    }
}

const getLikeResFollowUser = async (req, res) => {
    let { user_id } = req.body;

    try {
        let data = await models.like_res.findAll({
            where: {
                user_id
            },
            include: ['user']
        })

        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

const getLikeResFollowRes = async (req, res) => {
    let { res_id } = req.body;

    try {
        let data = await models.like_res.findAll({
            where: {
                res_id
            },
            include: ['user']
        })

        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

const rateRes = async (req, res) => {
    let { user_id, res_id, amount } = req.body;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    let dataRate = {
        user_id: user_id,
        res_id: res_id,
        amount,
        date_rate: today
    }

    try {
        await models.rate_res.create(dataRate)
        res.send('Đánh giá thành công')
    } catch (error) {
        res.send(error.errors[0].message)
    }
}
const getRateResFollowRes = async (req, res) => {
    let { res_id } = req.body;

    try {
        let data = await models.rate_res.findAll({
            where: {
                res_id
            },
            include: ['user', 're']
        })

        res.send(data)
    } catch (error) {
        res.send(error)
    }
}
const getRateResFollowUser = async (req, res) => {
    let { user_id } = req.body;

    try {
        let data = await models.rate_res.findAll({
            where: {
                user_id
            },
            include: ['user']
        })

        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

const orderFood = async (req, res) => {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body

    let newOrder = {
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id
    }
    try {
        await models.order.create(newOrder)
        res.send('Đặt món thành công');
    } catch (error) {
        res.send('Đặt món thất bại')
    }
}

export {
    getFood,
    likeRes,
    unLikeRes,
    getLikeResFollowUser,
    getLikeResFollowRes,
    getRateResFollowRes,
    getRateResFollowUser,
    rateRes,
    orderFood
}