const { ModuleFederationPlugin } = require('webpack').container
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const deps = require('../package.json').dependencies
const { DefinePlugin } = require('webpack')
const { getEnvVars } = require('./getEnvVars')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/',
    filename: '[name].js'
  },

  devServer: {
    port: 3000,
    historyApiFallback: {
      index: '/index.html'
    },
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  plugins: [
    new DefinePlugin(getEnvVars()),
    new ModuleFederationPlugin({
      name: 'root',
      remotes: {
        appHeader: `appHeader@${process.env.REACT_APP_APP_HEADER_URL}/remoteEntry.js`,
        appDashboard: `appDashboard@${process.env.REACT_APP_APP_DASHBOARD_URL}/remoteEntry.js`,
        appTransactions: `appTransactions@${process.env.REACT_APP_APP_TRANSACTIONS_URL}/remoteEntry.js`,
        utilUi: `utilUi@${process.env.REACT_APP_UTIL_UI_URL}/remoteEntry.js`,
        utilApi: `utilApi@${process.env.REACT_APP_UTIL_API_URL}/remoteEntry.js`,
        utilStore: `utilStore@${process.env.REACT_APP_UTIL_STORE_URL}/remoteEntry.js`
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: false
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
          eager: false
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
          eager: false
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
        zustand: { singleton: true, requiredVersion: deps.zustand }
      }
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
