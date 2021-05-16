const psyDao = require("../dao/psyDao");

function findAll() {
    return psyDao.selectAll();
}

function findByType(type) {
    if (!validType(type)) {
        throw new Error("type 이 유효하지 않습니다.");
    }

    return psyDao.selectListByType(type);
}

/**
 * @returns {boolean}
 */
function validType(type) {
    if (typeof type !== "string") {
        return false;
    }

    return psyDao.validType(type);
}

function findAllTypeList() {
    return psyDao.selectAllTypeList();
}

module.exports = {
    findAll: findAll,
    findByType: findByType,
    findAllTypeList: findAllTypeList
}