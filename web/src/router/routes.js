import Home from '@/components/home/Home'

import LoginForm from '@/components/auth/LoginForm'
import RegisterForm from '@/components/auth/RegisterForm'
import SubscribeForm from '@/components/auth/SubscribeForm'

import StoryPage from '@/components/story/StoryPage'
import StoryList from '@/components/story/StoryList'
import Story from '@/components/story/Story'
import StoryForm from '@/components/story/StoryForm'

import Chronicles from '@/components/chronicle/Chronicles'
import Chronicle from '@/components/chronicle/Chronicle'
import ChronicleForm from '@/components/chronicle/ChronicleForm'

import Blog from '@/components/blog/Blog'
import Topic from '@/components/blog/Topic'
import Article from '@/components/blog/Article'
import ArticleForm from '@/components/blog/ArticleForm'

import Mag from '@/components/mag/Mag'
import MagNumber from '@/components/mag/MagNumber'
import MagNumberForm from '@/components/mag/MagNumberForm'

import Profile from '@/components/profile/Profile'
import Readings from '@/components/profile/Readings'
import Notifications from '@/components/profile/Notifications'
import Friends from '@/components/profile/Friends'

export const routes = [
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
    name: 'home',
    component: Home
  },
  {
    path: '/chronicles',
    name: 'chronicles',
    component: Chronicles,
    children: [
      {
        path: ':chronicleName',
        component: Chronicle
      },
      {
        path: 'add-chronicle',
        component: ChronicleForm
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
        component: Story
      },
      {
        path: 'add-story',
        component: StoryForm
      }
    ]
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    children: [
      {
        path: ':topicName',
        component: Topic
      },
      {
        path: ':articleName',
        component: Article
      },
      {
        path: 'add-article',
        component: ArticleForm
      }
    ]
  },
  {
    path: '/mag',
    name: 'mag',
    component: Mag,
    children: [
      {
        path: ':magNumberName',
        component: MagNumber
      },
      {
        path: 'add-mag-number',
        component: MagNumberForm
      }
    ]
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    children: [
      {
        path: 'readings',
        component: Readings
      },
      {
        path: 'notifications',
        component: Notifications
      },
      {
        path: 'friends',
        component: Friends
      }
    ]
  }
]
