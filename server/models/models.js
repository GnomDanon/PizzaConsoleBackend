const sequelize = require('../db')
const {DataTypes, SequelizeScopeError} = require('sequelize')

const ConsoleUsers = sequelize.define('consoleUsers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING, unique: true},
    hashed_password: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    middle_surname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    salary: {type: DataTypes.DOUBLE}
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
    salary: {type: DataTypes.DOUBLE},
    surname: {type: DataTypes.STRING}
})

const Couriers = sequelize.define('couriers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING},
    salary: {type: DataTypes.DOUBLE},
    surname: {type: DataTypes.STRING}
})

const Orders = sequelize.define('orders', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING},
    id_user: {type: DataTypes.INTEGER, references: {
        model: ConsoleUsers,
        key: 'id'
    }},
    delivery: {type: DataTypes.BOOLEAN},
    address: {type: DataTypes.STRING},
    id_chef: {type: DataTypes.INTEGER, references: {
        model: Chefs,
        key: 'id'
    }},
    id_couriers: {type: DataTypes.INTEGER, references: {
        model: Couriers,
        key: 'id'
    }},
    created_at: {type: DataTypes.TIME},
    cost: {type: DataTypes.DOUBLE} 
})

const ProductOrders = sequelize.define('productOrders', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_product: {type: DataTypes.INTEGER, references: {
        model: Products,
        key: 'id'
    }},
    id_order: {type: DataTypes.INTEGER, references: {
        model: Orders,
        key: 'id'
    }},
    count: {type: DataTypes.INTEGER}
})

const Ingredients = sequelize.define('ingredients', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    count: {type: DataTypes.DOUBLE},
    minimum_count: {type: DataTypes.DOUBLE}
})

const IngredientProducts = sequelize.define('ingredientProducts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_product: {type: DataTypes.INTEGER, references: {
        model: Products,
        key: 'id'
    }},
    id_ingredient: {type: DataTypes.INTEGER, references: {
        model: Ingredients,
        key: 'id'
    }},
    count: {type: DataTypes.DOUBLE}
})

const Address = sequelize.define('address', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_user: {type: DataTypes.INTEGER, references: {
        model: ConsoleUsers,
        key: 'id'
    }},
    address: {type: DataTypes.STRING},
    apartment_number: {type: DataTypes.STRING},
    entrance: {type: DataTypes.STRING},
    floor: {type: DataTypes.INTEGER},
    doorphone: {type: DataTypes.STRING}
})

ConsoleUsers.hasMany(Orders, {foreignKey: 'id_user'})
Orders.belongsTo(ConsoleUsers, {foreignKey: 'id_user'})

Chefs.hasMany(Orders, {foreignKey: 'id_chef'})
Orders.belongsTo(Chefs, {foreignKey: 'id_chef'})

Couriers.hasMany(Orders, {foreignKey: 'id_couriers'})
Orders.belongsTo(Couriers, {foreignKey: 'id_couriers'})

Orders.hasMany(ProductOrders, {foreignKey: 'id_order'})
ProductOrders.belongsTo(Orders, {foreignKey: 'id_order'})

Products.hasMany(ProductOrders, {foreignKey: 'id_product'})
ProductOrders.belongsTo(Products, {foreignKey: 'id_product'})

Products.hasMany(IngredientProducts, {foreignKey: 'id_product'})
IngredientProducts.belongsTo(Products, {foreignKey: 'id_product'})

Ingredients.hasMany(IngredientProducts, {foreignKey: 'id_ingredient'})
IngredientProducts.belongsTo(Ingredients, {foreignKey: 'id_ingredient'})

module.exports = {
    ConsoleUsers, Promotions, Products, Chefs, Couriers, Orders, ProductOrders, Ingredients, IngredientProducts, Address
}