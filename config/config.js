// ref: https://umijs.org/config/
import {
  primaryColor,
  borderRadiusBase,
  layoutHeaderBbackground
} from '../src/defaultSettings';

export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        targets: {
          ie: 11,
        },
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
      },
    ],
    [
      'umi-plugin-pro-block',
      {
        moveMock: false,
        moveService: false,
        modifyRequest: true,
        autoAddMenu: true,
      },
    ],
  ],
  targets: {
    ie: 11,
  },
  publicPath: './',
  // cssPublicPath:'',
  /**
   * 路由相关配置
   */
  routes: [ 
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [{
          path: '/',
          redirect: '/index'
        },
        {
          path: '/index',
          name: 'index',
          icon: 'smile',
          component: './BaseTemplate',
        }
      ],
    }

  ],
  history: 'hash',
  hash: true,
  disableRedirectHoist: true,

  /**
   * webpack 相关配置
   */
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
    'border-radius-base': borderRadiusBase,
    'layout-header-background': layoutHeaderBbackground,
  },
  externals: {
    '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  chainWebpack(config, {
    webpack
  }) { 
    config.resolve.alias.set('@', require('path').resolve('src')); 

  }
};
