import HomePage from '@/components/home/HomePage'
import Home from '@/components/home/Home'
import ExosoftOpening from '@/components/home/ExosoftOpening'
import HomeOpening from '@/components/home/HomeOpening'

import LoginForm from '@/components/auth/LoginForm'
import RegisterForm from '@/components/auth/RegisterForm'
import SubscribeForm from '@/components/auth/SubscribeForm'

import StoryPage from '@/components/story/StoryPage'
import StoryList from '@/components/story/StoryList'
import Story from '@/components/story/Story'
import StoryForm from '@/components/story/StoryForm'

import ChroniclePage from '@/components/chronicle/ChroniclePage'
import ChronicleList from '@/components/chronicle/ChronicleList'
import Chronicle from '@/components/chronicle/Chronicle'
import ChronicleForm from '@/components/chronicle/ChronicleForm'

import BlogPage from '@/components/blog/BlogPage'
import ArticleList from '@/components/blog/ArticleList'
import Topic from '@/components/blog/Topic'
import Article from '@/components/blog/Article'
import ArticleForm from '@/components/blog/ArticleForm'

import MagPage from '@/components/mag/MagPage'
import MagNumberList from '@/components/mag/MagNumberList'
import MagNumber from '@/components/mag/MagNumber'
import MagNumberForm from '@/components/mag/MagNumberForm'

import GlossaryPage from '@/components/glossary/GlossaryPage'
import DefinitionList from '@/components/glossary/DefinitionList'
import Definition from '@/components/glossary/Definition'
/* 
import ProfilePage from '@/components/profile/ProfilePage'
import Profile from '@/components/profile/Profile'
import ReadingList from '@/components/profile/ReadingList'
import Reading from '@/components/profile/Reading'
import NotificationList from '@/components/profile/NotificationList'
import Notification from '@/components/profile/Notification'
import FriendList from '@/components/profile/FriendList'
import DiscussionList from '@/components/profile/DiscussionList'
import Discussion from '@/components/profile/Discussion' */

import { authGuard } from '../services/auth'

export default Object.freeze([
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: SubscribeForm
  },
  {
    path: '/home',
    component: HomePage,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'opening',
        name: 'opening',
        component: HomeOpening
      },
      {
        path: 'exosoft-opening',
        name: 'exosoft-opening',
        component: ExosoftOpening
      }
    ]
  },
  {
    path: '/chronicles',
    component: ChroniclePage,
    children: [
      {
        path: '',
        name: 'chronicles',
        component: ChronicleList
      },
      {
        path: ':id',
        name: 'chronicle',
        component: Chronicle,
        beforeEnter: (to, from, next) => {
          authGuard()
          next()
        }
      },
      {
        path: 'add',
        component: ChronicleForm,
        beforeEnter: (to, from, next) => {
          authGuard('ADMIN')
          next()
        }
      }
    ]
  },
  {
    path: '/stories',
    component: StoryPage,
    children: [
      {
        path: '',
        name: 'stories',
        component: StoryList
      },
      {
        path: ':id',
        name:'story',
        component: Story,
        beforeEnter: (to, from, next) => {
          authGuard()
          next()
        }
      },
      {
        path: 'add',
        component: StoryForm,
        beforeEnter: (to, from, next) => {
          authGuard('AUTHOR')
          next()
        }
      }
    ]
  },
  {
    path: '/blog',
    component: BlogPage,
    children: [
      {
        path: '',
        name: 'blog',
        component: ArticleList
      },
      {
        path: 'topics/:id',
        component: Topic
      },
      {
        path: ':id',
        name: 'article',
        component: Article
      },
      {
        path: 'add',
        component: ArticleForm,
        beforeEnter: (to, from, next) => {
          authGuard('AUTHOR')
          next()
        }
      }
    ]
  },
  {
    path: '/mag',
    component: MagPage,
    children: [
      {
        path: '',
        name: 'mag',
        component: MagNumberList
      },
      {
        path: ':id',
        name: 'mag-number',
        component: MagNumber,
        beforeEnter: (to, from, next) => {
          authGuard()
          next()
        }
      },
      {
        path: 'add',
        component: MagNumberForm,
        beforeEnter: (to, from, next) => {
          authGuard('ADMIN')
          next()
        }
      }
    ]
  },
  {
    path: '/glossary',
    component: GlossaryPage,
    children: [
      {
        path: '',
        name: 'glossary',
        component: DefinitionList
      },
      {
        path: ':id',
        name: 'definition',
        component: Definition
      }
    ]
  }
/*   ,{
    path: '/profile',
    component: ProfilePage,
    children: [
      {
        path: '',
        name: 'profile',
        component: Profile
      },
      {
        path: 'discussions',
        name: 'discussions',
        component: DiscussionList
      },
      {
        path: 'discussions/:id',
        name: 'discussion',
        component: Discussion
      },
      {
        path: 'readings',
        name: 'readings',
        component: ReadingList
      },
      {
        path: 'readings/:id',
        name: 'reading',
        component: Reading
      },
      {
        path: 'friends',
        name: 'friends',
        component: FriendList
      }
    ]
  } */
])
