const { ModuleFederationPlugin } = require('webpack').container
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const deps = require('../package.json').dependencies
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'auto',
    clean: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'root',
      filename: 'remoteEntry.js',
      remotes: {
        appHeader: `appHeader@${process.env.APP_HEADER_URL}/remoteEntry.js`,
        appDashboard: `appDashboard@${process.env.APP_DASHBOARD_URL}/remoteEntry.js`,
        appTransactions: `appTransactions@${process.env.APP_TRANSACTIONS_URL}/remoteEntry.js`,
        utilUi: `utilUi@${process.env.UTIL_UI_URL}/remoteEntry.js`,
        utilApi: `utilApi@${process.env.UTIL_API_URL}/remoteEntry.js`,
        utilStore: `utilStore@${process.env.UTIL_STORE_URL}/remoteEntry.js`
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom']
        },
        '@emotion/react': {
          singleton: true,
          requiredVersion: deps['@emotion/react']
        },
        '@emotion/styled': {
          singleton: true,
          requiredVersion: deps['@emotion/styled']
        },
        '@mui/material': {
          singleton: true,
          requiredVersion: deps['@mui/material']
        },
        '@mui/icons-material': {
          singleton: true,
          requiredVersion: deps['@mui/icons-material']
        },
        axios: {
          singleton: true,
          requiredVersion: deps.axios
        },
        zustand: { singleton: true, requiredVersion: deps.zustand },
        'react-toastify': {
          singleton: true,
          requiredVersion: deps['react-toastify']
        }
      }
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
