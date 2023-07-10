const sequelize = require('../db')
const {DataTypes, SequelizeScopeError} = require('sequelize')

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING, unique: true},
    hashed_password: {type: DataTypes.BLOB},
    surname: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    middle_surname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    bonus: {type: DataTypes.INTEGER},
    role: {type: DataTypes.STRING}
})

const Promotions = sequelize.define('promotions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING}
})

const Products = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    availability: {type: DataTypes.BOOLEAN},
    description: {type: DataTypes.STRING}
})

const Chefs = sequelize.define('chefs', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING},
    salary: {type: DataTypes.DOUBLE}
})

const Couriers = sequelize.define('couriers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING},
    salary: {type: DataTypes.DOUBLE}
})

const Orders = sequelize.define('orders', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING},
    id_user: {type: DataTypes.INTEGER, references: {
        model: Users,
        key: id
    }},
    delivery: {type: DataTypes.BOOLEAN},
    address: {type: DataTypes.STRING},
    id_chef: {type: DataTypes.INTEGER, references: {
        model: Chefs,
        key: id
    }},
    id_couriers: {type: DataTypes.INTEGER, references: {
        model: Couriers,
        key: id
    }},
    order_time: {type: DataTypes.TIME},
    cost: {type: DataTypes.DOUBLE}
})

const ProductOrders = sequelize.define('productOrders', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_product: {type: DataTypes.INTEGER, references: {
        model: Products,
        key: id
    }},
    id_order: {type: DataTypes.INTEGER, references: {
        model: Orders,
        key: id
    }},
    count: {type: DataTypes.INTEGER}
})

const Ingredients = sequelize.define('ingredients', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    count: {type: DataTypes.DOUBLE}
})

const IngredientProducts = sequelize.define('ingredientProducts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_product: {type: DataTypes.INTEGER, references: {
        model: Products,
        key: id
    }},
    id_ingredient: {type: DataTypes.INTEGER, references: {
        model: Ingredients,
        key: id
    }}
})

const Address = sequelize.define('address', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_user: {type: DataTypes.INTEGER, references: {
        model: Users,
        key: id
    }},
    address: {type: DataTypes.STRING},
    apartment_number: {type: DataTypes.STRING},
    entrance: {type: DataTypes.STRING},
    floor: {type: DataTypes.INTEGER},
    doorphone: {type: DataTypes.STRING}
})

Users.hasMany(Orders, {foreignKey: id_user})
Orders.belongsTo(Users, {foreignKey: id_user})

Chefs.hasMany(Orders, {foreignKey: id_chef})
Orders.belongsTo(Chefs, {foreignKey: id_chef})

Couriers.hasMany(Orders, {foreignKey: id_couriers})
Orders.belongsTo(Couriers, {foreignKey: id_couriers})

Orders.hasMany(ProductOrders, {foreignKey: id_order})
ProductOrders.belongsTo(Orders, {foreignKey: id_order})

Products.hasMany(ProductOrders, {foreignKey: id_product})
ProductOrders.belongsTo(Products, {foreignKey: id_product})

Products.hasMany(IngredientProducts, {foreignKey: id_product})
IngredientProducts.belongsTo(Products, {foreignKey: id_product})

Ingredients.hasMany(IngredientProducts, {foreignKey: id_ingredient})
IngredientProducts.belongsTo(Ingredients, {foreignKey: id_ingredient})

module.exports = {
    Users, Promotions, Products, Chefs, Couriers, Orders, ProductOrders, Ingredients, IngredientProducts, Address
}