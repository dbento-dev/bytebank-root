const { ModuleFederationPlugin } = require('webpack').container
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const deps = require('../package.json').dependencies

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
    new ModuleFederationPlugin({
      name: 'root',
      remotes: {
        appHeader: `appHeader@http://localhost:3001/remoteEntry.js`,
        appDashboard: `appDashboard@http://localhost:3002/remoteEntry.js`,
        appTransactions: `appTransactions@http://localhost:3003/remoteEntry.js`,
        utilUi: `utilUi@http://localhost:8310/remoteEntry.js`,
        utilApi: `utilApi@http://localhost:8311/remoteEntry.js`,
        utilStore: `utilStore@http://localhost:8312/remoteEntry.js`
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
        history: { singleton: true, requiredVersion: deps.history }
      }
    })
  ]
}

module.exports = merge(commonConfig, devConfig)
