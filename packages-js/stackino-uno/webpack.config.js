const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: {
        index: './src/index.tsx'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'StackinoUno',
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    
    devtool: 'source-map',

    module: {
        rules: [
            { test: /\.(ts|tsx)$/, use: { loader: 'ts-loader', options: { compilerOptions: { declarationDir: './types' } } } },
            { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] }
        ]
    },

    externals: {
        '@uirouter/react': {
            commonjs: '@uirouter/react',
            commonjs2: '@uirouter/react',
            amd: '@uirouter/react'
        },
        'classnames': {
            commonjs: 'classnames',
            commonjs2: 'classnames',
            amd: 'classnames'
        },
        'core-decorators': {
            commonjs: 'core-decorators',
            commonjs2: 'core-decorators',
            amd: 'core-decorators'
        },
        'inversify': {
            commonjs: 'inversify',
            commonjs2: 'inversify',
            amd: 'inversify'
        },
        'inversify-react': {
            commonjs: 'inversify-react',
            commonjs2: 'inversify-react',
            amd: 'inversify-react'
        },
        'mobx': {
            commonjs: 'mobx',
            commonjs2: 'mobx',
            amd: 'mobx'
        },
        'mobx-react': {
            commonjs: 'mobx-react',
            commonjs2: 'mobx-react',
            amd: 'mobx-react'
        },
        'moment': {
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment'
        },
        'prop-types': {
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types'
        },
        'react': {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        },
        'topbar': {
            commonjs: 'topbar',
            commonjs2: 'topbar',
            amd: 'topbar'
        },
        'tslib': {
            commonjs: 'tslib',
            commonjs2: 'tslib',
            amd: 'tslib'
        }
    },

    devtool: 'sourcemap'

};