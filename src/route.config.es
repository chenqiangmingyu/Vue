/**
 * 路由配置信息
 *
 * @author chenqiang03(chenqiang03@baidu.com)
 */

/* // nested example
'/user/:userId': {
  component: require('./components/user/index.vue'),
  subRoutes: {
    // matches "/user/:userId/profile/:something"
    'profile/:something': {
      component: require('./components/user/profile.vue')
    },
    // matches "/user/:userId/posts"
    'posts': {
      component: require('./components/user/posts.vue')
    },
    // matches "/user/:userId/settings"
    'settings': {
      component: require('./components/user/settings.vue')
    }
  }
},

// not found handler
'*': {
  component: require('./components/not-found.vue')
},

// advanced example
'/inbox': {
  component: require('./components/inbox/index.vue'),
  subRoutes: {
    '/message/:messageId': {
      component: require('./components/inbox/message.vue')
    },
    '/archived': {
      component: require('./components/inbox/archive.vue')
    },
    // default component to render into the nested outlet
    // when the parent route is matched but there's no
    // nested segment. In this case, "/inbox".
    '/': {
      // inline component
      component: {
        template: 'default yo'
      }
    }
  }
}

// global before
// 3 options:
// 1. return a boolean
// 2. return a Promise that resolves to a boolean
// 3. call transition.next() or transition.abort()
router.beforeEach((transition) => {
if (transition.to.path === '/forbidden') {
  router.app.authenticating = true
  setTimeout(() => {
    router.app.authenticating = false
    alert('this route is forbidden by a global before hook')
    transition.abort()
  }, 3000)
} else {
  transition.next()
} */


export function configRouter (router) {
    router.map({
        '/about': {
            component: require('./components/About.vue')
        },
        '/index': {
            component: require('./components/Hello.vue')
        }
    });

    router.redirect({
        '/info': '/index'
    });
}
