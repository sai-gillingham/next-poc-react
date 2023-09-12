#!/usr/bin/env node

const EccubeValidationBuilder = require("./EccubeValidationBuilder");
// @TODO: ここで配列を定義するのはどうかと思う
const EccubeBuilderHub  = [
    EccubeValidationBuilder
]

module.exports = EccubeBuilderHub;
