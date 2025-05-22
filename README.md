# LinkInNest PRD (Product Requirements Document)

## 1. Product Overview

### 1.1 Vision

A social bookmark platform for systematically organizing and sharing knowledge and information

### 1.2 Mission

Transform personal learning journeys and interests into structured roadmaps to share with others, providing better learning experiences through collective intelligence.

### 1.3 Target Users

- **Primary**: Self-improvement oriented users who prefer systematic learning (20-40 years old)
- **Secondary**: Educators, mentors, and experts who want to share professional knowledge
- **Tertiary**: General users seeking efficient access to information in specific fields

## 2. Core Features

### 2.1 Personal Bookmark Management

- **Link Collection**: Store various types of content including web URLs, videos, documents
- **Folder Structure**: Systematic organization through hierarchical folder structure
- **Drag & Drop**: Intuitive sorting and structure modification using dnd-kit
- **Tag System**: Cross-classification through multiple tag assignment
- **Public/Private**: Individual privacy settings for links and folders

### 2.2 Roadmap Features

- **Step-by-step Structure**: Compose learning/experience sequences with folders and links
- **Detailed Descriptions**: Goals and descriptions for each step
- **Progress Tracking**: Individual completion status checking
- **Prerequisites**: Display dependencies between steps

### 2.3 Social Features

- **Public Feed**: Browse public folders and links
- **Like System**: Evaluate useful content
- **Follow**: Subscribe to trusted curators
- **Comments/Reviews**: Share experiences and feedback
- **Sharing**: SNS integration and direct link sharing

### 2.4 Discovery & Exploration

- **Popular Content**: Trending based on likes and views
- **Recommendation System**: Personalized recommendations based on interests
- **Search**: Integrated search based on titles, tags, and descriptions
- **Categories**: Topic-based classification (learning, hobbies, travel, cooking, etc.)

### 2.5 Multilingual UI Support

- **Interface Language**: Multilingual support for UI elements like menus, buttons, and messages only
- **User Content**: Titles, descriptions, comments displayed in original language
- **Language Detection**: Auto-detect content language for appropriate font/layout
- **Language-specific Sorting**: Korean alphabetical order, English ABC order, etc.

### 2.7 Guest Access Policy

- **Free Browsing**: Full access to public folders/roadmaps, search, link clicks, statistics
- **Member Only**: Likes/comments/follows, personal content management, progress tracking
- **Registration Incentive**: Natural login guidance when attempting interactions

#### Guest Available Features

- View full content of public folders/roadmaps
- Click and navigate public links
- Search and browse (unlimited)
- View like/comment/follow counts
- View user profiles
- Filter by tags

#### Member Only Features

- Click like buttons
- Create/edit/delete comments
- Follow functionality
- Create/manage personal folders/links
- Progress tracking (checkboxes)
- Access private content

#### Registration Incentive Strategy

- **Like Attempt**: "Do you like this roadmap? Login to give it a like!"
- **Comment Attempt**: "Login required to communicate with others"
- **Progress Attempt**: "Sign up to record your learning progress"
- **Folder Creation**: "Create your own knowledge repository"

### 2.8 Mobile-Specific Features

- **PWA**: Installable web app without app store
- **Offline Mode**: Offline viewing of bookmarked roadmaps
- **Mobile Gestures**: Swipe folder navigation, long-press context menus
- **Touch Optimization**: Drag-and-drop, zoom optimized for touch interfaces

## 3. User Scenarios

### 3.1 Learner (Minsu, 25, Aspiring Developer)

1. Create "Full-stack Developer Roadmap" folder
2. Structure sub-folders by steps (HTML/CSS → JavaScript → React → Node.js → Portfolio)
3. Add YouTube tutorials, blog posts, practice project links to each step
4. Write personal notes and reviews while progressing
5. Share completed roadmap publicly with other aspiring developers

### 3.2 Expert (Younghee, 35, UX Designer)

1. Create "30-day UX Design Challenge for Beginners" roadmap
2. Structure daily learning goals and practice assignments
3. Organize industry-standard tools, reference articles, case studies
4. Provide weekly feedback sessions to followers
5. Give portfolio feedback to challenge completers

### 3.3 Hobbyist (Cheolsu, 30, Office Worker)

1. Discover popular "Guitar Self-learning Roadmap"
2. Progress step-by-step while recording personal practice videos
3. Connect with people with similar interests
4. Create own "Guitar Practice for Office Workers" variant roadmap

## 4. Technical Requirements

### 4.1 Core Technology Stack

- **Frontend**: React/Next.js + TypeScript
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **UI Library**: dnd-kit (drag-and-drop)
- **Styling**: Tailwind CSS
- **State Management**: unstated-next
- **Mobile**: PWA + Responsive Design

### 4.2 Database Schema

```sql
-- User profiles
user_profiles (id, username, avatar_url, bio, created_at)

-- Folders (roadmaps/collections)
folders (id, user_id, title, description, is_public, is_roadmap, created_at, updated_at)

-- Links
links (id, folder_id, title, url, description, sort_order, created_at)

-- Folder structure (nested folders)
folder_hierarchy (parent_id, child_id, child_type, sort_order)

-- Tags
tags (id, name, category, color)
folder_tags (folder_id, tag_id)
link_tags (link_id, tag_id)

-- Social features
likes (user_id, item_type, item_id, created_at)
follows (follower_id, following_id, created_at)
comments (id, user_id, item_type, item_id, content, created_at)

-- Progress tracking
user_progress (user_id, item_type, item_id, is_completed, completed_at, notes)
```

### 4.3 Feature Implementation

- **Drag & Drop**: Utilize @dnd-kit/core, @dnd-kit/sortable
- **Real-time Updates**: Supabase Realtime
- **File Upload**: Supabase Storage (thumbnails, profile images)
- **Search**: PostgreSQL Full-text Search + tag-based filtering
- **Recommendations**: Collaborative filtering + content-based filtering
- **Authentication & Authorization**:
  - User authentication with Supabase Auth
  - Data security with RLS (Row Level Security)
  - Granular guest/member permissions
  - Natural login incentive UX
- **Mobile Optimization**:
  - PWA (Progressive Web App) implementation
  - Touch gesture support (swipe, long-press)
  - Mobile-specific drag-and-drop UX
  - Offline mode support (bookmarked roadmaps)

## 5. UI/UX Requirements

### 5.1 Core Principles

- **Intuitiveness**: Easy structure modification through drag-and-drop
- **Visualization**: Clear representation of roadmap progress stages
- **Responsiveness**: Smooth navigation on mobile devices
- **Performance**: Fast loading even with large numbers of links
- **Guest-Friendly**: Guests feel sufficient value before naturally converting to membership

### 5.2 Main Pages

1. **Dashboard**: Personal folder/link management + progress tracking
2. **Explore**: Browse public roadmaps + search
3. **Detail View**: Folder/roadmap details + comments
4. **Profile**: User information + public content
5. **Editor**: Dedicated roadmap creation/editing interface

### 5.3 Component Priority

- **High**: DnD Tree View, Link Card, Folder Card, Progress Tracker
- **Medium**: Comment System, Like Button, Tag Selector
- **Low**: Advanced Search, Analytics Dashboard

## 6. Success Metrics (KPIs)

### 6.1 User Engagement

- DAU/MAU ratio
- Average session time
- Roadmap completion rate

### 6.2 Content Quality

- Like ratio relative to public folder count
- Average links per folder
- Comment/interaction ratio

### 6.3 Network Effects

- Number of follow relationships between users
- Click rate of shared content
- New user consumption of existing user content

## 7. Development Roadmap

### 7.1 MVP (4-6 weeks)

- [ ] Basic CRUD (folders, links)
- [ ] Drag-and-drop sorting
- [ ] Public/private settings
- [ ] Basic exploration features

### 7.2 V1.0 (8-10 weeks)

- [ ] Tag system
- [ ] Like/comment features
- [ ] User profiles
- [ ] Search functionality

### 7.3 V1.5 (12-16 weeks)

- [ ] Progress tracking
- [ ] Follow system
- [ ] Recommendation algorithm
- [ ] Mobile optimization

### 7.4 V2.0 (20-24 weeks)

- [ ] Advanced roadmap features
- [ ] Collaborative editing
- [ ] API opening
- [ ] Premium features

## 8. Risk Factors & Mitigation

### 8.1 Technical Risks

- **Complex Drag-and-Drop**: Phased implementation, thorough testing
- **Performance Issues**: Virtualization, lazy loading, caching strategies
- **Data Consistency**: Transactions, optimistic updates

### 8.2 Business Risks

- **User Acquisition**: Initial seed content, influencer collaboration
- **Content Quality**: Curation system, community moderation
- **Differentiation**: Unique roadmap features, excellent UX

---

## Getting Started with Development

### Required Installation

```bash
# After installing Node.js and npm
npm install

# Run development server
npm run dev
```

### Environment Setup

1. Create Supabase project
2. Set environment variables in `.env.local`
3. Create database tables
4. Start developing!

### Key Libraries

- `@dnd-kit/core`, `@dnd-kit/sortable` - Drag and drop
- `@supabase/supabase-js` - Backend integration
- `unstated-next` - State management

Refer to feature-specific documentation for more detailed implementation methods!
