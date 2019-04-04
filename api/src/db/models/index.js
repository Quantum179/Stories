import mongoose from 'mongoose'

import PostSchema from './schemas/postSchema'
import StorySchema from './schemas/storySchema'
import ArticleSchema from './schemas/articleSchema'
import ChronicleSchema from './schemas/chronicleSchema'
import UserSchema from './schemas/userSchema'
import AuthorSchema from './schemas/authorSchema'
import ChapterSchema from './schemas/chapterSchema'
import ParagraphSchema from './schemas/paragraphSchema'
import DiscussionSchema from './schemas/discussionSchema'
import CollectionSchema from './schemas/collectionSchema'
import AdminSchema from './schemas/adminSchema'
import MessageSchema from './schemas/messageSchema'
import CommentSchema from './schemas/commentSchema'
import ReviewSchema from './schemas/reviewSchema'
import ThreadSchema from './schemas/threadSchema'
import NotificationSchema from './schemas/notificationSchema'
import NewsSchema from './schemas/newsSchema'
import TopicSchema from './schemas/topicSchema'
import DefinitionSchema from './schemas/definitionSchema'
import MagNumberSchema from './schemas/magNumberSchema'
import MailSchema from './schemas/mailSchema'
import ReadingSchema from './schemas/readingSchema'
import SerieSchema from './schemas/serieSchema'

export let Post, Story, Article, Chronicle, 
    MagNumber, 
    Collection,
    User, Author, Admin,
    Definition,
    Chapter, 
    Paragraph,
    Discussion,
    Message, Comment, Review,
    Thread,
    Notification,
    News,
    Mail,
    Topic,
    Reading


export const loadModels = () => {
  Post = mongoose.model('Post', PostSchema)
  Story = Post.discriminator('Story', StorySchema)
  Article = Post.discriminator('Article', ArticleSchema)
  Chronicle = Post.discriminator('Chronicle', ChronicleSchema)
  MagNumber = mongoose.model('MagNumber', MagNumberSchema)
  Collection = mongoose.model('Collection', CollectionSchema)
  User = mongoose.model('User', UserSchema)
  Author = User.discriminator('Author', AuthorSchema)
  Admin = User.discriminator('Admin', AdminSchema)
  Definition = mongoose.model('Definition', DefinitionSchema)
  Chapter = mongoose.model('Chapter', ChapterSchema)
  Paragraph = mongoose.model('Paragraph', ParagraphSchema)
  Discussion = mongoose.model('Discussion', DiscussionSchema)
  Message = mongoose.model('Message', MessageSchema)
  Comment = Message.discriminator('Comment', CommentSchema)
  Review = mongoose.model('Review', ReviewSchema)
  Thread = mongoose.model('Thread', ThreadSchema)
  Notification = mongoose.model('Notification', NotificationSchema)
  News = mongoose.model('News', NewsSchema)
  Mail = mongoose.model('Mail', MailSchema)
  Topic = mongoose.model('Topic', TopicSchema)
  Reading = mongoose.model('Reading', ReadingSchema)
/*   Serie = mongoose.model('Serie', SerieSchema) */
}